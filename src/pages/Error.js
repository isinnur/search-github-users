import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Error = () => {
  return <Wrapper>
    <div>
      <h1>404</h1>
      <h3>sorry, the page you tried cannot be found</h3>
      <Link to="/" className='btn'>back home</Link>
    </div>
  </Wrapper>;

};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #0D1117;
  text-align: center;
  h1 {
    font-size: 10rem;
    color:#617d98;
  }
  h3 {
    color: #fff;
    margin-bottom: 1.5rem;
  }
`;
export default Error;
