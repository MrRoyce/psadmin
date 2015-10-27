'use strict';

// Modules
const React  = require('react'),
      Router = require('react-router'),
      toastr = require('toastr');

// Function
const Link   = Router.Link;

// Files
const Utility       = require('./../common/utility.js'),
      CourseActions = require('../../actions/courseActions');

class CourseList extends React.Component{

    constructor () {
        super();
        Utility.bind(this, ['deleteCourse']);
    }

    // Tell actions that an course was deleted
    deleteCourse (id, event) {
        event.preventDefault();
        CourseActions.deleteCourse(id);
        toastr.success('Course Deleted');
    }

    render () {

        var createCourseRow = (course) => {
            return (
                <tr key={course.id}>
                    <td>
                        <a href={course.watchHref} target="_blank">Watch</a>
                    </td>
                    <td>
                        <a href="#" onClick={this.deleteCourse.bind(this, course.id)} >Delete</a>
                    </td>
                    <td>
                        <Link to='manageCourse' params={{id : course.id}}>{course.title}</Link>
                    </td>
                    <td>{course.author.name}</td>
                    <td>{course.category}</td>
                    <td>{course.length}</td>
                </tr>
            );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Length</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.courses.map(createCourseRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
}

CourseList.propTypes = {
    courses : React.PropTypes.array.isRequired
};

module.exports = CourseList;
