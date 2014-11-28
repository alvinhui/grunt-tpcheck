/*
 * grunt-tpcheck
 * https://github.com/alvinhui/grunt-tpcheck
 *
 * Copyright (c) 2014 Alvin Hui
 * Licensed under the MIT license.
 */

'use strict';

var commands = require('../lib/commands');

module.exports = function (grunt) {

  function wrapCommand(fn) {
    return fn;
  }

  for (var command in commands) {
    var fn = commands[command];
    grunt.registerMultiTask('tpcheck' + command, fn.description || '', wrapCommand(fn));
  }
};