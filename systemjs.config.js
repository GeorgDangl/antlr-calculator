(function (global) {
    System.config({
        "defaultJSExtensions": true,
        // map tells the System loader where to look for things
        map: {
            antlr4: 'node_modules/antlr4',
            GeneratedAntlr: 'GeneratedAntlr',
            fs: '@empty' // The antlr4 package has a require statement for 'fs' which we don't need
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            antlr4: {
                main: './index.js',
                defaultExtension: 'js'
            },
            GeneratedAntlr: {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);
