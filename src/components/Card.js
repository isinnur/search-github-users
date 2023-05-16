import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
const Card = () => {
  const { githubUser } = React.useContext(GithubContext);
  const { avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    login,
    twitter_username
  } = githubUser;
  return <Wrapper>
    <header>
      <img src={avatar_url} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>@{login}</p>
      </div>

      <a href={html_url}>Follow</a>
    </header>

    <p className='bio'>{bio}</p>
    <div className='links'>
      <p><MdBusiness></MdBusiness> {company} </p>
      <p><MdLocationOn></MdLocationOn> {location || 'earth'} </p>
      <a href={`https://${blog}`}><MdLink></MdLink>{blog}</a>
    </div>
  </Wrapper>;
};
const Wrapper = styled.article`
  background: #262A33;
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: 'user';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: #262A33;
    color: #fff;
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;

  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      object-fit:cover;
    }
    h4 {
      font-size:18px;
      margin-bottom: 0.25rem;
      color:#fff;
    }
    p {
      margin-bottom: 0;
    }
    a {
      color: #617d98;
      border: 1px solid #617d98;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: #617d98;
        color: var(--clr-white);
      }
    }
  }
  .bio {
    color:#fff;
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      color:#fff;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }
`;
export default Card;
