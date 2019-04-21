import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import MainLayout from './components/MainLayout';
import Explore from './components/Explore';

export default () => (
  <>
    <div id="content">
      <div className="darkTheme">
        <div id="content-wrapper">
          <div className="grid-frame vertical">
            <BrowserRouter>
              <Header />
              <Switch>
                <Route exact path="/" component={MainLayout} />
                <Route path="/explore/blocks" component={Explore} />
              </Switch>
              <Footer />
            </BrowserRouter>
            <div
              className="__react_component_tooltip place-top type-dark "
              data-id="tooltip"
            />
          </div>
          <div className="notifications-wrapper" />
        </div>
      </div>
    </div>
  </>
);
