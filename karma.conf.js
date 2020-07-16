// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            "src/**/*.ts"
        ],
        preprocessors: {
            "**/*.ts": "karma-typescript"
        },
        reporters: ["progress", 'kjhtml', "karma-typescript"],
        browsers: ["Chrome"],
        karmaTypescriptConfig: {
            tsconfig: "tsconfig.spec.json"
        }
    });
};
