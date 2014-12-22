# Grunt: Profiles
> Environment profiles configuration for grunt, many thanks for the idea to [Logan Koester](https://github.com/logankoester/grunt-environment)

[![Gittip](https://img.shields.io/gratipay/imapi.svg)](https://gratipay.com/imapi/)

[![NPM](https://nodei.co/npm/grunt-environment.png?downloads=true)](https://nodei.co/npm/grunt-profile/)

## Getting Started
This plugin requires Grunt `~0.4.1`

To install:

```shell
npm install grunt-profile --save-dev
```

How to use:

```js
grunt.initConfig({
  // ...

  profile: {
    default: 'local',
    profiles: ['local', 'live']
  },

  concat: {
    options: {
      separator: ';',
      sourceMap: false,
      local: {
        sourceMap: true  
      }
    },
    // ...

  }
});

grunt.loadNpmTasks('grunt-profile');

```

You can use profile/profiles at any place in any task configuration, based on the current
profile it would be automatically substituted with the correct one.
For example running the snippet about with:

```shell
grunt concat
```

Will include the sourceMap, and with:

```shell
grunt profile:live concat
```

will not.

You can setup as many profiles as you like, these two is just for the reference.
