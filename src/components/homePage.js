'use strict';

// Modules
const React = require('react'),
      Router = require('react-router');

// Files
const Link   = Router.Link;

class Home extends React.Component{

    constructor () {
        super();
        //Utility.bind(this, ['delete', 'togglePurchase']);
    }

    render () {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>React, React Router, and Flux for ultra-responsive web apps</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More...</Link>
            </div>
        );
    }
}

module.exports = Home;
