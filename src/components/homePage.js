'use strict';

// Modules
const React = require('react');

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
            </div>
        );
    }
}

module.exports = Home;
