'use strict';

const gulp       = require('gulp'),  // duh
      connect    = require('gulp-connect'),  // Runs local dev server
      concat     = require('gulp-concat'),  // Concatenate files
      open       = require('gulp-open'),   // Open a URL in browser
      browserify = require('browserify'),  // Bundles JS
      reactify   = require('reactify'),  // Transforms JSX to JS
      source     = require('vinyl-source-stream'),  // Use text streams with gulp
      eslint     = require('gulp-eslint');  // Lint JS and JSX files

// Configuration Variables
let config = {
        port       : 9005,
        devBaseUrl : 'http://localhost',
        paths      : {
            html   : './src/*.html',
            js     : './src/**/*.js',
            images : './src/images/*',
            css    : ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'],
            dist   : './dist',
            mainJs : './src/main.js'
        }
    };

// Start a server
gulp.task('connect', () => {
    connect.server({
        root       : ['dist'],
        port       : config.port,
        base       : config.devBaseUrl,
        livereload : true
    });
});

gulp.task('open', ['connect'], () => {
    gulp.src('dist/index.html')
        .pipe(open({ uri : config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', () => {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', () => {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

// Migrates images to dist folder
// Note that I could even optimize my images here
gulp.task('images', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());

    //publish favicon
    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('lint',  () => {
    return gulp.src(config.paths.js)
        .pipe(eslint({config : '.eslintrc'}))
        .pipe(eslint.format());
});

gulp.task('css', () => {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('watch', () => {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);
