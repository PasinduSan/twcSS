import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './styles/Global.scss';
import './styles/bootstrap/bootstrap.scss';
import Navbar from './components/layout/Navbar';
import Partner from './Partner';
import Main from './Main';

const Home = () => {
  return (
    <HashRouter>
      <Navbar />
      <Route exact path='/Partner' component={Partner} />
      <Route exact path='/Home' component={Main} />
    </HashRouter>
  );
};
export default Home;
