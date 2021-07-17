import React from 'react';
import MyMap from './Map/MyMap';
import ListOfStreets from './List/ListOfStreets';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../Login';
import Registration from '../Registration';
import Header from './Navigation/Header';

function HomePage() {
  const user = useSelector((state) => state.auth.user);

  return (
    <Box>
      {!user.token ? (
        <Switch>
          <Route path="/auth" component={Login} />
          <Route path="/registration" component={Registration} />
        </Switch>
      ) : (
        ''
      )}
      <Header />
      <Switch>
        <Route exact path={`/map`} component={MyMap} />
        <Route path={`/list`} component={ListOfStreets} />
        <Redirect to={`/map`} />
      </Switch>
    </Box>
  );
}

export default HomePage;
