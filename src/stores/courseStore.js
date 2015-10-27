/* eslint-disable no-underscore-dangle*/
'use strict';

// courseStore.js

// Modules
var assign = require('object-assign'),  // Merge multiple objects 'PonyFill'
      _      = require('lodash');

// Files
var Dispatcher  = require('../dispatcher/appDispatcher'),
      ActionTypes = require('../constants/actionTypes');

// Functions
var EventEmitter = require('events').EventEmitter;

//  Vars
var existingCourse,
    existingCourseIndex,
    _courses = [],
    CHANGE_EVENT = 'change',

    // The store
    CourseStore  = assign({}, EventEmitter.prototype, {

        addChangeListener : function (callback) {
            this.on(CHANGE_EVENT, callback);
        },

        removeChangeListener : function (callback) {
            this.removeListener(CHANGE_EVENT, callback);
        },

        emitChange : function () {
            this.emit(CHANGE_EVENT);
        },

        getAllCourses : () => {
            return _courses;
        },

        getCourseById : (id) => {
            return _.find(_courses, {id : id});
        }
    });

// Register the store with the dispatcher
Dispatcher.register( (action) => {
    switch (action.actionType) {

        case ActionTypes.INITIALIZE :
            _courses = action.initialData.courses;
            CourseStore.emitChange();
            break;

        case ActionTypes.CREATE_COURSE :
            _courses.push(action.course);
            CourseStore.emitChange();
            break;

         case ActionTypes.UPDATE_COURSE :
            // Find existing course
            existingCourse      = _.find(_courses, {id : action.course.id});
            // Replace it in our private array
            existingCourseIndex = _.indexOf(_courses, existingCourse);
            _courses.splice(existingCourseIndex, 1, action.course);
            CourseStore.emitChange();
            break;

        case ActionTypes.DELETE_COURSE :
            _.remove(_courses, (course) => {
                return action.id === course.id;
            });
            CourseStore.emitChange();
            break;

        default:
            break;
    }
});

module.exports = CourseStore;
