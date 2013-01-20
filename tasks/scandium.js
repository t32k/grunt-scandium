module.exports = function( grunt ) {
    'use strict';

    grunt.registerMultiTask('scandium', 'This triggers the `titanium build` command.', function() {

        // Internal lib.
        var titanium = require( './lib/titanium' ).init( grunt );

        var done = this.async();

        var command = titanium.cli(this.data);

        grunt.log.writeln('`titanium build ' + command.args.join(' ') + '` was initiated.');

        grunt.util.spawn(command, function( error, result, code) {
            if (error) {
                grunt.log.error(error);
                grunt.log.error('Code: ' + code);
                done(false);
            }
            else {
                grunt.log.writeln(result);
                grunt.log.writeln(code);
                done();
            }
        });
    });
};