'use strict';

var grunt = require('grunt');
var tpcheck = require('tpcheck');

module.exports = function () {
    var task = this;
    var done = task.async();

    var options = task.options({
        typeNote: '@type'
    });

    tpcheck.checkNote(this.filesSrc, options.typeNote, function(error, report){
        if(error){
            grunt.fail.warn(error);
        }

        grunt.log.subhead('Check files: ' + report.files.length);
        if(report.noNoteFiles.length){
            grunt.log.errorlns('Have worry note:');
            report.noNoteFiles.forEach(function(filename){
                grunt.log.writeln('Error file: ' + filename);
            });
        }

        done(true);
    });
};

module.exports.description = 'Template check note.';

