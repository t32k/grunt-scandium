This is a half-baked grunt.js multitask aka [gruntplugin](http://jsfiddle.net/cowboy/qzRjD/show/) that executes [Titanium Command Line](http://docs.appcelerator.com/titanium/latest/#!/guide/Titanium_Command-Line_Interface_Reference) for you and prints the Titanium output to `grunt.log.write()`.

# Dependencies

You need to have [node.js](http://nodejs.org/), [grunt.js](https://github.com/cowboy/grunt), [titanium](https://npmjs.org/package/titanium) installed for this to work.

# Getting Started

Install from npm.

```
% npm install grunt-scandium
```

Add your project's `grunt.js` (`Gruntfile.js` when ~0.4.0).

```javascript
grunt.loadNpmTasks('grunt-scandium');
```

# An Example Setup

```javascript
scandium: {
    ios: {
        platform : 'ios',
        project_dir : '/path/to/your_project',
        force: true,
        build_only: false,
        options: {
            device_family: 'iphone'
        }
    },
    android: {
        platform : 'android',
        project_dir : '/path/to/your_project',
        options: {
            android_sdk: '/path/to/android-sdk',
            target: 'emulator'
        }
    }
}
```

# Changelog

- v0.3.0: Add support for `titanium clean`
- v0.2.0: Add support for display titanium log message
- v0.1.0: Release.

----

# LICENSE MIT

Copyright (c) 2013 Koji Ishimoto

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
