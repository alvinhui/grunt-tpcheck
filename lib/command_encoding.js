'use strict';

var grunt = require('grunt');
var tpcheck = require('tpcheck');

module.exports = function () {
    var task = this;
    var done = task.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = task.options({
        rules: ['utf-8']
    });

    tpcheck.checkEncoding(this.filesSrc, options.rules, function(error, report){
        if(error){
            grunt.fail.warn(error);
        }

        grunt.log.subhead('Check: ' + task.filesSrc.length);
        if(report.length){
            grunt.log.errorlns('Have worry encoding:');
            report.forEach(function(item){
                grunt.log.writeln('Error from: ' + item.filePath);
                grunt.log.writeln('Error encoding: ' + item.encoding);
                grunt.log.writeln('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
            });
            grunt.fail.warn('Not through the tpcheck encoding.');
        }

        done(true);
    });
};

module.exports.description = 'Template check encoding.';

