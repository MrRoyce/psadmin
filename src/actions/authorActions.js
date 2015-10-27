'use strict';

const Dispatcher  = require('../dispatcher/appDispatcher'),
      AuthorApi   = require('../api/authorApi'),
      ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor : (author) => {

        // In a real app, this would be asynchrouns, and the action would
        // be in a callback or promise
        var newAuthor = AuthorApi.saveAuthor(author);

        // Hey Dispatcher, go tell the stores that an author was just created
        //  Publish the action
        Dispatcher.dispatch({
            actionType : ActionTypes.CREATE_AUTHOR,
            author     : newAuthor
        });
    },

    updateAuthor : (author) => {

        // In a real app, this would be asynchrouns, and the action would
        // be in a callback or promise
        var updatedAuthor = AuthorApi.saveAuthor(author);

        //  Publish the action
        Dispatcher.dispatch({
            actionType : ActionTypes.UPDATE_AUTHOR,
            author     : updatedAuthor
        });
    },

    deleteAuthor : (id) => {
        debugger;
        // In a real app, this would be asynchrouns, and the action would
        // be in a callback or promise
        AuthorApi.deleteAuthor(id);

        //  Publish the action
        Dispatcher.dispatch({
            actionType : ActionTypes.DELETE_AUTHOR,
            id         : id
        });
    }
};

module.exports = AuthorActions;
