import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch
} from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
function App() {
  return (

    <AuthWrapper>
      <Router>
        <Switch>

          <PrivateRoute path="/" exact={true}>
            <Dashboard></Dashboard>
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>


      </Router>
    </AuthWrapper >
  );
}

export default App;
