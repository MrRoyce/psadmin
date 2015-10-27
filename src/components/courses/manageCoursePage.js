/* eslint-disable no-alert*/
'use strict';

// manageCoursePage.js

// Modules
const React  = require('react'),
      Router = require('react-router'),
      toastr = require('toastr');

// Files
const CourseForm    = require('./courseForm.js'),
      CourseActions = require('../../actions/courseActions.js'),
      CourseStore   = require('../../stores/courseStore');

var ManageCoursePage = React.createClass({

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
            course : { id : '', title : '', watcHref : '', author : { id : '', name : ''}, length : '', category : ''},
            errors : {},
            dirty  : false  // Used to check for errors
        };
    },

    // Set the state before the rendering occurs
    // Otherwise, the page will render if 'componentDidMount' was used
    componentWillMount : function () {
        var courseId = this.props.params.id; //from the path '/course:id'

        if (courseId) {
            this.setState({course : CourseStore.getCourseById(courseId) });
        }
    },

    setCourseState : function (event) {
        var field = event.target.name,
            value = event.target.value;
        this.setState({dirty : true});  // The state is changed
        if (field === 'author') {
            this.state.course.author.name = value; // special handling for name
        } else {
            this.state.course[field] = value;
        }

        return this.setState({course : this.state.course});
    },

    courseFormIsValid : function () {
        var formIsValid = true;

        this.state.errors = {}; //clear any previous errors.

        if (this.state.course.title.length < 3) {
            this.state.errors.title = 'Title must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.course.author.length < 3) {
            this.state.errors.author = 'Author must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.course.category.length < 3) {
            this.state.errors.category = 'Category must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.course.length.length < 3) {
            this.state.errors.length = 'Length must be at least 3 characters.';
            formIsValid = false;
        }

        this.setState({errors : this.state.errors});
        return formIsValid;
    },

    saveCourse : function (event) {
        event.preventDefault();

        if (!this.courseFormIsValid()) {
            return;
        }

        // Check if it is an existing or new course
        if (this.state.course.id) {
            CourseActions.updateCourse(this.state.course);
        } else {
            CourseActions.createCourse(this.state.course);
        }

        this.setState({dirty : false});  // reset flag after save
        toastr.success('Course saved.');
        this.transitionTo('courses');  // Go to the course list page via react-router
    },

    render : function () {
        return (
             <CourseForm
                course={this.state.course}
                onChange={this.setCourseState}
                onSave={this.saveCourse}
                errors={this.state.errors} />
        );
    }
});

module.exports = ManageCoursePage;
