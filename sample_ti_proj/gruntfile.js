module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-scandium');

	grunt.initConfig({
		scandium: {
			ios: {
				platform : 'ios',
				project_dir : '/REPOS/grunt-scandium/sample_ti_proj',
				force: true,
				build_only: false,
				options: {
					device_family: 'iphone'
				}
			},
			android: {
				platform : 'android',
				//project_dir : '/Users/t32k/Desktop/cli_test',
				force: true,
				build_only: false,
				options: {
					android_sdk: '/android-sdk',
					target: 'emulator'
				}
			}
		}
	});
	
	grunt.registerTask('default', 'scandium');
}