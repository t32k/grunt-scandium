module.exports = function(grunt) {
    'use strict';

    grunt.registerTask( 'scandium-clean', 'This executes the `titanium clean` command.', function() {

        // Tell grunt this task is asynchronous.
        var done    = this.async(),
            exec    = require('child_process').exec,
            command = 'titanium clean';

        function puts( error, stdout, stderr ) {
            grunt.log.write( stdout );
            if ( error !== null ) {
                grunt.log.error( error );
                done(false);
            }
            else {
                done(true);
            }
        }

        exec( command, puts );
        grunt.log.write( '`' + command + '` was initiated.' );
    });
};
