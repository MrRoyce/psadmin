'use strict';

const Dispatcher  = require('../dispatcher/appDispatcher'),
      CourseApi   = require('../api/courseApi'),
      ActionTypes = require('../constants/actionTypes');

var CourseActions = {
    createCourse : (course) => {

        // In a real app, this would be asynchrouns, and the action would
        // be in a callback or promise
        var newCourse = CourseApi.saveCourse(course);

        // Hey Dispatcher, go tell the stores that an course was just created
        //  Publish the action
        Dispatcher.dispatch({
            actionType : ActionTypes.CREATE_COURSE,
            course     : newCourse
        });
    },

    updateCourse : (course) => {

        // In a real app, this would be asynchrouns, and the action would
        // be in a callback or promise
        var updatedCourse = CourseApi.saveCourse(course);

        //  Publish the action
        Dispatcher.dispatch({
            actionType : ActionTypes.UPDATE_COURSE,
            course     : updatedCourse
        });
    },

    deleteCourse : (id) => {

        // In a real app, this would be asynchrouns, and the action would
        // be in a callback or promise
        CourseApi.deleteCourse(id);

        //  Publish the action
        Dispatcher.dispatch({
            actionType : ActionTypes.DELETE_COURSE,
            id         : id
        });
    }
};

module.exports = CourseActions;
