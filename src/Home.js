import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './styles/Global.scss';
import './styles/bootstrap/bootstrap.scss';
import Navbar from './components/layout/Navbar';
import Partner from './Partner';
import Main from './Main';

const Home = () => {
  return (
    <Switch>
      <HashRouter>
        <Navbar />
        <Route exact path='/Partner' component={Partner} />
        <Route exact path='/Home' component={Main} />
      </HashRouter>
    </Switch>
  );
};
export default Home;
