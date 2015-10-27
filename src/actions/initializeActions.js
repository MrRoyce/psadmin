'use strict';

// Files
const Dispatcher  = require('../dispatcher/appDispatcher'),
      ActionTypes = require('../constants/actionTypes'),
      AuthorApi   = require('../api/authorApi'),
      CourseApi   = require('../api/courseApi');

let InitializeActions = {
    initApp : function () {

        Dispatcher.dispatch({
            actionType  : ActionTypes.INITIALIZE,
            initialData : {
                authors : AuthorApi.getAllAuthors(),  // Would normally use async call
                courses : CourseApi.getAllCourses()  // Would normally use async call
            }
        });

    }
};

module.exports = InitializeActions;
