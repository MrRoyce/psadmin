/* eslint-disable global-require*/

'use strict';

// Modules
var React  = require('react'),
      Router = require('react-router');

var DefaultRoute = Router.DefaultRoute,
    Route        = Router.Route,
    routes       = (
       <Route name="app" path="/" handler={require('./components/app')}>
            <DefaultRoute handler={require('./components/homePage')} />
            <Route name="authors" handler={require('./components/authors/authorPage')} />
            <Route name="about" handler={require('./components/about/aboutPage')} />

        </Route>
    );

module.exports = routes;