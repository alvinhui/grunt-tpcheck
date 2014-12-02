# grunt-tpcheck

> template check plugin

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-tpcheck --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-tpcheck');
```

## The "tpcheck" task

### Overview
In your project's Gruntfile, add a section named `tpcheck` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  tpcheckinclude: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
  tpcheckencoding: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### tpcheckinclude

1. rootPath
  Type: `String`
  Default value: `''`
2. regular
  Type: `String`
  Default value: `''`

#### tpcheckencoding


1. rules
  Type: `Array`
  Default value: `['utf-8']`

#### tpchecknote


1. typeNote
  Type: `string`
  Default value: `@type`

### Usage Examples

see Gruntfile.js

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
