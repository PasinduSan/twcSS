import React, { Component } from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/Global.scss';
import './styles/bootstrap/bootstrap.scss';
import Textanimation from './components/Partners/Textanimation';
import Button from './components/Partners/Button';
// import Help from './Help';
import Map from './components/Partners/Map';
import Reseller from './components/Partners/Reseller';
import Affiliate from './components/Partners/Affiliate';
import Developer from './components/Partners/Developer';
import ResellerForm from './components/Partners/ResellerForm';

class Partner extends Component {
  render() {
    return (
      <div>
        <Textanimation title1='Partner up with' />
        <Button />
        <Map />
        <Reseller />
        <Affiliate />
        <Developer />
        <ResellerForm />
      </div>
    );
  }
}
export default Partner;
