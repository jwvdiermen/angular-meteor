Package.describe({
  summary: "The simplest no-conflict way to use AngularJS with Meteor, Meteorite and Atmosphere Smart Packages.",
  version: "0.5.7",
  git: "https://github.com/Urigo/angular-meteor.git"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.0.1');
  // Exports the angular package scope
  api.export('angularMeteor', 'client');

  api.use('jquery', 'client', {weak: true});

  // Including bower
  api.use('mquandalle:bower@0.1.11', 'client');
  api.add_files('smart.json', 'client');

  // Files to load in Client only.
  api.add_files([
    // Lib Files
    'lib/angular-hash-key-copier.js',
    // Module Files
    'modules/angular-meteor-subscribe.js',
    'modules/angular-meteor-collections.js',
    'modules/angular-meteor-template.js',
    'modules/angular-meteor-user.js',
    'modules/angular-meteor-methods.js',
    'modules/angular-meteor-session.js',
    // Finally load angular-meteor File
    'angular.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('angular');
  api.addFiles('angular-tests.js');
});
