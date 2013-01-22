exports.init = function(grunt) {
    'use strict';

    var exports = {};

    // Titanium Command-Line Interface
    exports.cli = function(data) {

        // Generic Options
        // ============================================
        var tiArgs          = [],
            command         = { cmd: 'titanium', args: tiArgs },
            // <boolean>: Only perform the build; when specified, does not install or run the app.
            build_only      = data.build_only,
            // <type>: Type of deployment: production, test, or development.
            deploy_type     = data.deploy_type,
            // <boolean>: Force a full rebuild.
            force           = data.force,
            // <level>: Minimum logging level. Supported options are trace, debug, info, warn, and error.
            log_level       = data.log_level,
            // <platform>: Target build platform: Supported values are android, ios, and mobileweb.
            platform        = data.platform,
            // <directory>: Directory containing the project, otherwise the current working directory is assumed.
            project_dir     = data.project_dir,
            // <version>: Titanium SDK version to build with. If not specified, uses the configured default SDK.
            sdk             = data.sdk;

        if ( platform !== undefined && project_dir !== undefined ) {
            tiArgs.push('build', '--platform', platform, '--project_dir', project_dir);
        }
        if ( build_only === true ) {
            tiArgs.push('--build-only');
        }
        if ( deploy_type !== undefined ) {
            tiArgs.push('--deploy-type', deploy_type);
        }
        if ( force === true ) {
            tiArgs.push('--force');
        }
        if ( log_level !== undefined ) {
            tiArgs.push('--log-level', log_level);
        }
        if ( sdk  !== undefined ) {
            tiArgs.push('--sdk', sdk);
        }


        // Android Build Options
        // ============================================
            // <alias>: Alias for the keystore
        var alias           = data.options.alias,
            // <path>: Path to the Android SDK.
            android_sdk     = data.options.android_sdk,
            // <id>: ID for the AVD. The ID specifies the API level and supplementary APIs for an AVD.
            avd_id          = data.options.avd_id,
            // <skin>: Skin for the AVD. Defaults to HVGA.
            avd_skin        = data.options.avd_skin,
            // <host:port>: Debug connection info.
            debug_host      = data.options.debug_host,
            // <path>: Location of the keystore.
            keystore        = data.options.keystore,
            // <dir>: Output directory (used when target is dist-playstore).
            output_dir      = data.options.output_dir,
            // <alias>: the password for the keystore
            password        = data.options.password,
            // <value>: Target to build for. Target can be emulator, device, or dist-playstore.
            target          = data.options.target;

        if ( alias !== undefined ) {
            tiArgs.push('--alias', alias);
        }
        if ( android_sdk !== undefined ) {
            tiArgs.push('--android-sdk', android_sdk);
        }
        if ( avd_id !== undefined ) {
            tiArgs.push('--avd-id', avd_id);
        }
        if ( avd_skin !== undefined ) {
            tiArgs.push('--avd-skin', avd_skin);
        }
        if ( debug_host !== undefined ) {
            tiArgs.push('--debug-host', debug_host);
        }
        if ( keystore !== undefined ) {
            tiArgs.push('--keystore', keystore);
        }
        if ( output_dir !== undefined ) {
            tiArgs.push('--output-dir', output_dir);
        }
        if ( password !== undefined ) {
            tiArgs.push('--password', password);
        }
        if ( target !== undefined ) {
            tiArgs.push('--target', target);
        }


        // iOS Build Options
        // ============================================
            // <name>: iOS Developer Certificate to use; required when target is device.
        var developer_name      = data.options.developer_name,
            // <value>: Device family to build for (iphone, ipad, or universal).
            device_family       = data.options.device_family,
            // <name>: iOS Distribution Certificate to use; required when target is dist-appstore or dist-adhoc.
            distribution_name   = data.options.distribution_name,
            // <value>: iOS SDK version to build for. Default: latest installed iOS SDK.
            ios_version         = data.options.ios_version,
            // <value>: Path to the distribution keychain to use instead of the system default;
            // only used when target is device, dist-appstore, or dist-adhoc.
            keychain            = data.options.keychain,
            // <dir>: Output directory. Only used when target is dist-adhoc.
            ios_output_dir      = data.options.output_dir,
            // <uuid>: Provisioning profile uuid; required when target is device, dist-appstore, or dist-adhoc.
            pp_uuid             = data.options.pp_uuid,
            // <value>: iOS Simulator version; only used when target is simulator
            sim_version         = data.options.sim_version,
            // <value>: Target to build for: simulator, device, dist-appstore, or dist-adhoc.
            ios_target          = data.options.target;

        if ( developer_name !== undefined ) {
            tiArgs.push('--developer-name', developer_name);
        }
        if ( device_family !== undefined ) {
            tiArgs.push('--device-family', device_family);
        }
        if ( distribution_name !== undefined ) {
            tiArgs.push('--distribution-name', distribution_name);
        }
        if ( ios_version !== undefined ) {
            tiArgs.push('--ios-version', ios_version);
        }
        if ( keychain !== undefined ) {
            tiArgs.push('--keychain', keychain);
        }
        if ( ios_output_dir !== undefined ) {
            tiArgs.push('--output-dir', ios_output_dir);
        }
        if ( pp_uuid !== undefined ) {
            tiArgs.push('--pp-uuid', pp_uuid);
        }
        if ( sim_version !== undefined ) {
            tiArgs.push('--sim-version', sim_version);
        }
        if ( ios_target !== undefined ) {
            tiArgs.push('--target', ios_target);
        }

        return command;
    };

  return exports;
};