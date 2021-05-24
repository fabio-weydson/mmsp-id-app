import logo from './logo.svg';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Admin from "./layouts/Admin.js";
import {withAuthenticator} from 'aws-amplify-react';
import Amplify, { Auth } from 'aws-amplify';
import "./assets/css/material-dashboard-react.css?v=1.10.0";

//import aws_exports from './aws-exports';
Amplify.configure({
  mandatorySignIn: true,
  region: 'eu-central-1',
  userPoolId:'eu-central-1_xvLnAMAmu',
  identityPoolId: 'eu-central-1:e2c233fa-98f3-4647-bd0b-2a361abc549e',
  userPoolWebClientId:'5u2t14f4r9udch0tvvl1uh0umn'
});


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </BrowserRouter>
  );
}

export default withAuthenticator(App);
