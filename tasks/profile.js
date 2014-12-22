(function () {
  module.exports = function (grunt) {
    var initialConf,
    _ = require('lodash');

    grunt.profile = function () {
      return grunt.config('profile.current');
    };

    function updateGruntfile(profile) {
      initialConf || (initialConf = _.cloneDeep(grunt.config.getRaw()));
      grunt.config.init(_.cloneDeep(initialConf));
      var merge = function (node, key) {
        if (_.isObject(node)) {
          if (node[profile]) {
            key ? grunt.config(key, _.merge(node, node[profile])) : grunt.config.merge(node[profile]);
          }
          _.each(node, function (v, k) {
            merge(v, key ? key + k : k);
          });
        }
      };
      merge(grunt.config.getRaw());
      return true;
    }

    function setProfile(profile) {
      grunt.config('profile.current', profile);
      grunt.log.ok("Current profile: " + profile);
      return true;
    }

    function switchTo(profile) {
      updateGruntfile(profile) && setProfile(profile);
    }

    _.each(grunt.config('profile.profiles'), function (profile) {
      return grunt.registerTask("profile:" + profile, function () {
        switchTo(profile);
      });
    });

    switchTo(grunt.config('profile.default'));
  };

}).call(this);
