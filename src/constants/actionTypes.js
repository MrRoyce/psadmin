'use strict';

const keyMirror = require('react/lib/keyMirror'); // Mirror the values from the keys

module.exports = keyMirror({
    INITIALIZE    : null,
    CREATE_AUTHOR : null,
    UPDATE_AUTHOR : null,
    DELETE_AUTHOR : null,
    INIT_COURSES  : null,
    CREATE_COURSE : null,
    UPDATE_COURSE : null,
    DELETE_COURSE : null
});
