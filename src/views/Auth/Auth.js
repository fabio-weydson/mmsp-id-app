/*eslint-disable*/
import React, {Component} from "react";
import {Authenticator} from 'aws-amplify-react';
import {Amplify } from 'aws-amplify';
import '@aws-amplify/ui/dist/style.css';

export default function Auth() {

      return (
        <div>
        <Authenticator/>
        </div>
      );
    
}
