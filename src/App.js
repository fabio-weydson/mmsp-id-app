import logo from './logo.svg';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Admin from "./layouts/Admin.js";
import {withAuthenticator} from 'aws-amplify-react';
import Amplify, { Auth } from 'aws-amplify';
import "./assets/css/material-dashboard-react.css?v=1.10.0";

//import aws_exports from './aws-exports';
Amplify.configure({
/*  */
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
