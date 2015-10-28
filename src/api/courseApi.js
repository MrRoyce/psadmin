'use strict';

// courseApi.js

//This file is mocking a web API by hitting hard coded data.
// Files
var courses = require('./courseData').courses;

// Modules
var _       = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function () {
    var S4 = function () {
       return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
};

var _generateCourseId = function(course) {
	return course.title.replace(' ', '-');
}

var _clone = function (item) {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var CourseApi = {
    getAllCourses : function () {
        return _clone(courses);
    },

    getCourseById : function (id) {
        var course = _.find(courses, {id : id});
        return _clone(course);
    },

    saveCourse : function (course) {
        //pretend an ajax call to web api is made here
        console.log('Pretend this just saved the course to the DB via AJAX call...');
        if (course.id) {
            var existingCourseIndex = _.indexOf(courses, _.find(courses, {id : course.id}));
            courses.splice(existingCourseIndex, 1, course);
        } else {
            //Just simulating creation here.
            //The server would generate ids for new courses in a real app.
           
            course.id = _generateCourseId(course);
            course.author.id = _generateId();
            courses.push(course);
        }
		 //Cloning so copy returned is passed by value rather than by reference.
        return _clone(course);
    },

    deleteCourse : function (id) {
        console.log('Pretend this just deleted the course from the DB via an AJAX call...');
        _.remove(courses, { id : id});
    }
};

module.exports = CourseApi;
