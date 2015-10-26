/* eslint-disable strict*/

$ = jQuery = require('jquery');

// Modules
var React        = require('react'),
    RouteHandler = require('react-router').RouteHandler;

// Files
var Header = require('./common/header');

var App = React.createClass({

    render : () => {

        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

module.exports = App;
