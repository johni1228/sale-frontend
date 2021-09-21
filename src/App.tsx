import React, { lazy } from 'react';
import { Router, Switch, Route } from 'react-router-dom' 

import './index.scss'
import history from './routerHistory'

const Home = lazy(() => import('./pages/Home'));
const Mint = lazy(() => import('./pages/Mint'));
const MyNFTs = lazy(() => import('./pages/MyNFTs'));
const MintedNFTs = lazy(() => import('./pages/MintedNFTs'));
const Marketplace = lazy(() => import('./pages/Marketplace'));

const App : React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/mint' exact>
          <Mint />
        </Route>
        <Route path='/myNFTs' exact>
          <MyNFTs />
        </Route>
        <Route path='/mintedNFTs' exact>
          <MintedNFTs />
        </Route>
        <Route path='/marketplace' exact>
          <Marketplace />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
