/* eslint-disable no-alert*/
'use strict';

// Modules
const React  = require('react'),
      Router = require('react-router'),
      toastr = require('toastr');

// Files
const AuthorForm    = require('./authorForm.js'),
      AuthorActions = require('../../actions/authorActions.js'),
      AuthorStore   = require('../../stores/authorStore');

var ManageAuthorPage = React.createClass({

    mixins : [
        Router.Navigation  // Note, mixins are no longer supported in v0.14 and above
    ],

    statics : {
        willTransitionFrom : (transition, component) => {
            if (component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();  // Use react-router to stop transition if they cancel
            }
        }
    },

    getInitialState : () => {
        return {
            author : { id : '', firstName : '', lastName : ''},
            errors : {},
            dirty  : false  // Used to check for errors
        };
    },

    // Set the state before the rendering occurs
    // Otherwise, the page will render if 'componentDidMount' was used
    componentWillMount : function () {
        var authorId = this.props.params.id; //from the path '/author:id'

        if (authorId) {
            this.setState({author : AuthorStore.getAuthorById(authorId) });
        }
    },

    setAuthorState : function (event) {
        var field = event.target.name,
            value = event.target.value;

        this.setState({dirty : true});  // The state is changed

        this.state.author[field] = value;

        return this.setState({author : this.state.author});
    },

    authorFormIsValid : function () {
        var formIsValid = true;

        this.state.errors = {}; //clear any previous errors.

        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = 'First name must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = 'Last name must be at least 3 characters.';
            formIsValid = false;
        }

        this.setState({errors : this.state.errors});
        return formIsValid;
    },

    saveAuthor : function (event) {
        event.preventDefault();

        if (!this.authorFormIsValid()) {
            return;
        }

        // Check if it is an existing or new author
        if (this.state.author.id) {
            AuthorActions.updateAuthor(this.state.author);
        } else {
            AuthorActions.createAuthor(this.state.author);
        }

        this.setState({dirty : false});  // reset flag after save
        toastr.success('Author saved.');
        this.transitionTo('authors');  // Go to the author list page via react-router
    },

    render : function () {
        return (
             <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor}
                errors={this.state.errors} />
        );
    }
});

module.exports = ManageAuthorPage;
