/* eslint-disable no-underscore-dangle*/
'use strict';

// Modules
const
      React   = require('react'),
      Router  = require('react-router');

// Functions
const Link   = Router.Link;

// Files
const AuthorList  = require('./authorList.js'),
      AuthorStore = require('../../stores/authorStore'),
      Utility     = require('./../common/utility.js');

class AuthorPage extends React.Component{

    constructor () {
        super();
        Utility.bind(this, ['componentWillMount', 'componentWillUnmount', '_onChange']);
        this.state = {authors : AuthorStore.getAllAuthors() }; //this.getFirstState();
    }

    componentWillMount () {
        AuthorStore.addChangeListener(this._onChange);
    }

    // Clean up our data when it is deleted
    componentWillUnmount () {
        AuthorStore.removeChangeListener(this._onChange);
    }

    _onChange () {
        this.setState({authors : AuthorStore.getAllAuthors()});
    }

    render () {

        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
}

module.exports = AuthorPage;
