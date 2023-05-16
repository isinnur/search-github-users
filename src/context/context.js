import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

//Provider, Consumer - GithubContext.Provider

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);

    const [requests, setRequests] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    //error
    const [error, setError] = useState({ show: false, msg: "" });

    const searchGithubUser = async (user) => {
        //toggleError
        toggleError();
        setIsLoading(true);
        const response = await axios(`${rootUrl}/users/${user}`)
            .catch(err => console.log(err))

        if (response) {
            setGithubUser(response.data);
            const { login, followers_url } = response.data;

            //repos
            axios(`${rootUrl}/users/${login}/repos?per_page=100`).
                then(response => setRepos(response.data)
                );

            //followers
            axios(`${followers_url}?per_page=100`).
                then(response => setFollowers(response.data))
            //more logic here

            // repos
            // https://api.github.com/users/isinnur/repos?per_page=100

            //followers
            //https://api.github.com/users/isinnur/followers

        }

        else {
            toggleError(true, 'there is no user with that username');
        }

        checkRequest();
        setIsLoading(false);
    };

    const checkRequest = () => {
        axios(`${rootUrl}/rate_limit`)
            .then(({ data }) => {
                let { rate: { remaining },
                } = data;

                setRequests(remaining);
                if (remaining === 0) {
                    //throw an error
                    toggleError(true, 'sorry you have exceeded  your hourly rate limit!')

                }
            }).catch((err) => console.log(err));
    };

    function toggleError(show = false, msg = '') {
        setError({ show, msg });
    }




    useEffect(() => {
        checkRequest();
    }, [])
    return (
        <GithubContext.Provider value={{
            githubUser,
            repos,
            followers,
            requests,
            error,
            searchGithubUser,
            isLoading,
        }}>{children}</GithubContext.Provider>
    );
};

export { GithubProvider, GithubContext };