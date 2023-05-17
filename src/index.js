import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

//dev-52r1iukj3fzbwnrn.us.auth0.com
//FgkKnTXQfKP1u3uWLyTTP9B26Wq74rJwimport { Auth0Provider } from '@auth0/auth0-react';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Auth0Provider
      domain="dev-52r1iukj3fzbwnrn.us.auth0.com"
      clientId="FgkKnTXQfKP1u3uWLyTTP9B26Wq74rJw"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.Fragment>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
