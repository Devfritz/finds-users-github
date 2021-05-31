import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/github-user.png';

const Login = () => {
  return(
    <Wrapper>
       <div className="container">
           <img src={loginImg} alt="github user" />
           <h1>Github User</h1>
             <button className="btn">Login</button>
       </div>
    </Wrapper>
  ) 
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  h1{
    color:white;
  }
  img {
    margin-bottom: 2rem;
    width:40%;
    margin:0 auto;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
