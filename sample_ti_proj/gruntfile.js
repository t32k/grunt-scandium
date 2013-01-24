module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-scandium');

	grunt.initConfig({
		scandium: {
			iphone: {
				platform : 'ios',
				project_dir : '/REPOS/grunt-scandium/sample_ti_proj',
				force: true,
				build_only: false,
				options: {
					device_family: 'iphone',
					sim_version: '6.0'
				}
			},
			ipad: {
				platform : 'ios',
				project_dir : '/REPOS/grunt-scandium/sample_ti_proj',
				force: false,
				build_only: false,
				options: {
					device_family: 'ipad',
					sim_version: '5.1'
				}
			},
			android: {
				platform : 'android',
				project_dir : '/REPOS/grunt-scandium/sample_ti_proj',
				force: true,
				build_only: false,
				options: {
					android_sdk: '/android-sdk',
					avd_skin: 'HVGA'
				}
			}
		}
	});
	
	grunt.registerTask('default', 'scandium');
}