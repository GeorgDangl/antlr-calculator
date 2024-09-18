// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine', 'webpack'],
        files: ['src/**/*.spec.ts'],
        preprocessors: {
          'src/**/*.spec.ts': ['webpack'],
        },
        reporters: ['junit'],
        browsers: ['ChromeHeadless'],
        singleRun: true,
        webpack: require('./webpack-test.config.js'),
        junitReporter: {
          outputDir: '',
          outputFile: 'karma-results.xml',
          useBrowserName: false
        },
      });
};
