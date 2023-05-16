import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { GithubContext } from '../context/context';
const Search = () => {
  const [user, setUser] = React.useState('');
  const { requests, error, searchGithubUser, isLoading } = React.useContext(GithubContext);

  //get things from global context
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (user) {
      searchGithubUser(user);
      // setUser('');
    }

  };


  return (
    <section className='section'>
      <Wrapper className='section-center'>
        {error.show && (
          <ErrorWrapper>
            <p>{error.msg}</p>
          </ErrorWrapper>
        )}
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <MdSearch />
            <input type='text' placeholder='Enter Github User' value={user} onChange={(e) => setUser(e.target.value)} />
            {/* <button type='submit'>Search</button> */}
            {requests > 0 && !isLoading && (
              <button type='submit'>Search</button>
            )}
          </div>
        </form>
        {requests > 0 && <h3> Requests: {requests} / 60</h3>}

      </Wrapper>
    </section >
  )
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-control {
    background-color: #262A33 ;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    input {
      background-color: #262A33;
      border-color: transparent;
      letter-spacing: var(--spacing);
      color: #fff;
      padding: 0.25rem 0.5rem;
    }

    input:focus{
      outline:none;
    }


    input::placeholder {
      color: var(--clr-grey-5);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    button {
      border-radius: 5px;
      border:1px solid var(--clr-grey-5);
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: #262A33;
      color: var(--clr-grey-5);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-grey-5);
        color: #fff;
      }
    }

    svg {
      color: var(--clr-grey-5);
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    color: var(--clr-grey-5);
    font-weight: 400;
  }
`;
const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: #fff;
    letter-spacing: var(--spacing);
  }
`;
export default Search;
