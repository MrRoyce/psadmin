/* eslint-disable no-underscore-dangle*/
'use strict';

// coursePage.js

// Modules
const
      React   = require('react'),
      Router  = require('react-router');

// Functions
const Link   = Router.Link;

// Files
const CourseList  = require('./courseList.js'),
      CourseStore = require('../../stores/courseStore'),
      Utility     = require('./../common/utility.js');

class CoursePage extends React.Component{

    constructor () {
        super();
        Utility.bind(this, ['componentWillMount', 'componentWillUnmount', '_onChange']);
        this.state = {courses : CourseStore.getAllCourses() }; //this.getFirstState();
    }

    componentWillMount () {
        CourseStore.addChangeListener(this._onChange);
    }

    // Clean up our data when it is deleted
    componentWillUnmount () {
        CourseStore.removeChangeListener(this._onChange);
    }

    _onChange () {
        this.setState({courses : CourseStore.getAllCourses()});
    }

    render () {

        return (
            <div>
                <h1>Courses</h1>
                <Link to="addCourse" className="btn btn-default">Add Course</Link>
                <CourseList courses={this.state.courses} />
            </div>
        );
    }
}

module.exports = CoursePage;
