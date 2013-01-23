module.exports = function(grunt) {
    'use strict';

    grunt.registerMultiTask('scandium', 'This triggers the `titanium build` command.', function() {

        var titanium  = require( './lib/titanium' ).init(grunt),
            util      = grunt.util || grunt.utils,
            done      = this.async(),
            command   = titanium.cli(this.data);

        // Output Command Line
        grunt.log.writeln('`titanium ' + command.args.join(' ') + '` was initiated.');

        // Watching Titanium Command log
        var worker = util.spawn(command, function(error, result, code) {
            if (error) {
                grunt.log.error(error);
                grunt.log.error('Code: ' + code);
                done();
            }
        });
        worker.stdout.on('data', function(data){
            grunt.log.write('>> ' + data);
        });
        worker.stderr.on('data', function(data){
            grunt.log.error(data);
        });
    });
};