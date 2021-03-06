/* eslint-disable global-require*/

'use strict';

// Modules
const React  = require('react'),
      Router = require('react-router');

// Files
var routeApp  = require('./components/app'),
    routeHome = require('./components/homePage');

// Other Files
// Not sure why I can't include these above?? eslint throws an error??
var routeAuthors   = require('./components/authors/authorPage'),
    routeCourses   = require('./components/courses/coursePage'),
    routeAddAuthor = require('./components/authors/manageAuthorPage'),
    routeAddCourse = require('./components/courses/manageCoursePage'),
    routeAbout     = require('./components/about/aboutPage'),
    routeNotFound  = require('./components/common/notFoundPage');

var DefaultRoute  = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,
    Redirect      = Router.Redirect,
    Route         = Router.Route,
    routes        = (
       <Route name="app" path="/" handler={routeApp}>
            <DefaultRoute handler={routeHome} />
            <Route name="authors" handler={routeAuthors} />
            <Route name="courses" handler={routeCourses} />
            <Route name="addAuthor" path="author" handler={routeAddAuthor} />
            <Route name="addCourse" path="course" handler={routeAddCourse} />
            <Route name="manageAuthor" path="author/:id" handler={routeAddAuthor} />
            <Route name="manageCourse" path="course/:id" handler={routeAddCourse} />
            <Route name="about" handler={routeAbout} />
            <NotFoundRoute handler={routeNotFound} />
            <Redirect from="about-us" to="about" />
            <Redirect from="awthurs" to="authors" />
            <Redirect from="about/*" to="about" />
        </Route>
    );

module.exports = routes;
