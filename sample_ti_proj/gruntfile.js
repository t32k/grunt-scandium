module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-scandium');

	grunt.initConfig({
		scandium: {
			ios: {
				platform : 'ios',
				project_dir : '/Users/t32k/Desktop/cli_test',
				force: false,
				build_only: true,
				options: {
					device_family: 'iphone'
				}
			},
			android: {
				platform : 'android',
				project_dir : '/Users/t32k/Desktop/cli_test',
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