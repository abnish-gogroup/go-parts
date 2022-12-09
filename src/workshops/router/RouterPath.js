import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateAJob from '../createAJob/CreateAJob';
import Login from '../workshop_auth/Login';

export default function RouterPath(){
  return(
    <BrowserRouter>
      <Switch>
      <Route exact path="/">
            <Login />
          </Route>
          <Route path='/create-a-job'>
            <CreateAJob />
          </Route>
      </Switch> 
    </BrowserRouter>
  )
}