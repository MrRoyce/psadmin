'use strict';

// Modules
var React    = require('react'),
    Router   = require('react-router');

// Files
var routes = require('./routes');

Router.run(routes, (Handler) => {
    React.render(<Handler/>, document.getElementById('app'));
});
