'use strict';

// Modules
const React    = require('react'),
    Router   = require('react-router');

// Files
const routes          = require('./routes'),
      InitalizeActions = require('./actions/initializeActions');

InitalizeActions.initApp();  // Start er up!

// Away we go!
Router.run(routes, (Handler) => {
    React.render(<Handler/>, document.getElementById('app'));
});
