'use strict';

var grunt = require('grunt');
var tpcheck = require('tpcheck');

module.exports = function () {
    var task = this;
    // Merge task-specific and/or target-specific options with these defaults.
    var options = task.options({
        regular: '',
        rootPath: '',
        pathPre: '',
        judge: null
    });

    tpcheck.checkInclude(this.filesSrc, options.regular, options.rootPath, options.pathPre, options.judge ,function(error, report){
        if(error){
            grunt.fail.warn(error);
        }

        grunt.log.subhead('match regular: ' + report.count);
        if(report.errors.length){
            grunt.log.errorlns('Have worry include:');
            report.errors.forEach(function(item){
                grunt.log.writeln('Error from: ' + item.file);
                grunt.log.writeln('Error are: ' + item.paths);
                grunt.log.writeln('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
            });
            grunt.fail.warn('Not through the tpcheck include.');
        }
    });
};

module.exports.description = 'Template check include.';

