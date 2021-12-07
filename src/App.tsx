import React, { lazy } from 'react';
import { Router, Switch, Route } from 'react-router-dom' 

import history from './routerHistory'
import Layout from 'Layout'
import { RedirectLaunchpad } from 'pages/Launpad/redirect';
import { SocialLink } from 'pages/CreateSale/SocialLinkPage';

const Home = lazy(() => import('./pages/Home'));
const CreateSale = lazy(()=> import('./pages/CreateSale/index'))
const PreSale = lazy(()=> import('./pages/PreSale/index'))
const Tokens = lazy(() => import('./pages/Tokens'))
const Liquidity = lazy(() => import ('./pages/Liquidity'))
const LockerCreate = lazy(() => import ('./pages/LockerCreate'))

const App : React.FC = () => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/launchpad:subItem' exact component={RedirectLaunchpad} />
          <Route path='/launchpad/preSale' exact component={PreSale} /> 
          <Route path='/launchpad/createSale' exact component={CreateSale} />
          <Route path='/launchpad/createSale/sociallink' exact component={SocialLink} /> 
          <Route path='/lock/tokens' exact component={Tokens} /> 
          <Route path='/lock/liquidity' exact component={Liquidity} />
          <Route path='/lock/createLocker' exact component={LockerCreate} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
