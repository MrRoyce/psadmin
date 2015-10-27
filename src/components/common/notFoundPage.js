'use strict';

// Modules
const React = require('react'),
      Router = require('react-router');

// Files
const Link   = Router.Link;

class NotFoundPage extends React.Component{

    constructor () {
        super();
        //Utility.bind(this, ['delete', 'togglePurchase']);
    }

    render () {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Nothing to see here</p>
                <p><Link to="app">Back to safety...</Link></p>
            </div>
        );
    }
}

module.exports = NotFoundPage;
