import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateAJob from '../components/createAJob/CreateAJob';
// import OePaperReadout from '../oePaperReadout/OePaperReadout';
import Login from '../workshop_auth/Login';
import { Provider } from 'react-redux';
import Dashboard from '../components/dashboard/Dashboard';
import Sidebar from '../../common/Sidebar';
import ThankYouOrder from '../components/thankYou/ThankYouOrder';
import Checkout from '../components/checkout/Checkout';
import OrderOverview from '../components/orderOverview/OrderOverview';

export default function RouterPath() {
  const location = window.location.pathname;
  return (
    <BrowserRouter>
      {(location === '/' || location === '/signin') ? '' : <Sidebar />}
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path='/create-a-job'>
          <CreateAJob />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/thank-you-order'>
          <ThankYouOrder />
        </Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='/order-overview'>
          <OrderOverview />
        </Route>
        {/* <Route path='/oe-readout'>
            <OePaperReadout />
          </Route> */}
      </Switch>
    </BrowserRouter>
  )
}
