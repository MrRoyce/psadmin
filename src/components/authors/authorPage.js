'use strict';

// Modules
const React = require('react');

// Files
const Utility    = require('./../common/utility.js'),
      AuthorList = require('./authorList.js');

// Files
const AuthorApi = require('../api/authorApi');

class AuthorPage extends React.Component{

    constructor () {
        super();
        Utility.bind(this, ['componentWillMount']);
        this.state = {authors : []}; //this.getFirstState();
    }

    componentWillMount () {
        //if (this.isMounted()) {
            this.setState({authors : AuthorApi.getAllAuthors() });
        //}
    }

    render () {

        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
}

module.exports = AuthorPage;
