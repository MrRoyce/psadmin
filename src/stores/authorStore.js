/* eslint-disable no-underscore-dangle*/
'use strict';

// Modules
const assign = require('object-assign'),  // Merge multiple objects 'PonyFill'
      _      = require('lodash');

// Files
const Dispatcher  = require('../dispatcher/appDispatcher'),
      ActionTypes = require('../constants/actionTypes');

// Functions
const EventEmitter = require('events').EventEmitter;

//  Vars
let existingAuthor,
    existingAuthorIndex,
    _authors = [],
    CHANGE_EVENT = 'change',

    // The store
    AuthorStore  = assign({}, EventEmitter.prototype, {

        addChangeListener : function (callback) {
            this.on(CHANGE_EVENT, callback);
        },

        removeChangeListener : function (callback) {
            this.removeListner(CHANGE_EVENT, callback);
        },

        emitChange : function () {
            this.emit(CHANGE_EVENT);
        },

        getAllAuthors : () => {
            return _authors;
        },

        getAuthorById : (id) => {
            return _.find(_authors, {id : id});
        }
    });

// Register the store with the dispatcher
Dispatcher.register( (action) => {

    switch (action.actionType) {

        case ActionTypes.INITIALIZE :
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;

        case ActionTypes.CREATE_AUTHOR :
            _authors.push(action.author);
            AuthorStore.emitChange();
            break;

         case ActionTypes.UPDATE_AUTHOR :
            // Find existing author
            existingAuthor      = _.find(_authors, {id : action.author.id});
            // Replace it in our private array
            existingAuthorIndex = _.indexOf(_authors, existingAuthor);
            _authors.splice(existingAuthorIndex, 1, action.author);
            AuthorStore.emitChange();
            break;

        case ActionTypes.DELETE_AUTHOR :
            debugger;
            _.remove(_authors, (author) => {
                return action.id === author.id;
            });
            AuthorStore.emitChange();
            break;

        default:
            break;
    }
});

module.exports = AuthorStore;
