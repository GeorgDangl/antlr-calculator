var antlr4Plugin = require('antlr4-webpack-plugin');

// This config will only run the antlr4Plugin to create the Lexer and Parser files in the ./GeneratedAntlr directory
// Based on https://github.com/corzani/generator-antlr4
module.exports = {
    output: {
        filename: "./GeneratedAntlr/bundle.js" // Shouldn't produce anything since there's no entry defined
    },
    plugins: [
        antlr4Plugin({
            grammar: 'Calculator.g4',
            options: {
                o: 'GeneratedAntlr/',
                grammarLevel: {
                    language: 'JavaScript'
                },
                flags: [
                    'visitor',
                    'no-listener'
                ]
            }
        })
    ]
};