/* eslint-disable no-alert, no-unsued-vars*/
'use strict';

// Modules
const React    = require('react');

class About extends React.Component{

    constructor () {
        super();
        //Utility.bind(this, ['delete', 'togglePurchase']);
    }

    /*static willTransitionTo (transition, params, query, callback) {

        if (!confirm('Are you sure?')) {
            transition.about();
        } else {
            callback();
            return;
        }
    }

    static willTransitionFrom (transition) {

        if (!confirm('Are you really sure?')) {
            transition.about();
        }
    }*/

    render () {
        return (
            <div>
            <h1>About</h1>
            <p>This application uses the following technologies:</p>
            <ul>
                <li>React</li>
                <li>React Router</li>
                <li>Flux</li>
                <li>Node</li>
                <li>Gulp</li>
                <li>Browserify</li>
                <li>Bootstrap</li>
            </ul>
            </div>
        );
    }
}

module.exports = About;
