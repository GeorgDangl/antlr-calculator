"use strict";
var CalculationResult_1 = require('./CalculationResult');
var FormulaErrorListener_1 = require('./FormulaErrorListener');
var antlr4 = require('antlr4');
var calculatorLexer = require('./GeneratedAntlr/CalculatorLexer');
var calculatorParser = require('./GeneratedAntlr/CalculatorParser');
var formulaVisitor = require('./FormulaVisitor.js');
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.calculate = function (formula) {
        var result = new CalculationResult_1.CalculationResult();
        if (formula === null || formula.match(/^\s*$/) !== null) {
            result.result = 0;
            result.isValid = true;
            return result;
        }
        var inputStream = new antlr4.InputStream(formula);
        var lexer = new calculatorLexer.CalculatorLexer(inputStream);
        var commonTokenStream = new antlr4.CommonTokenStream(lexer);
        var parser = new calculatorParser.CalculatorParser(commonTokenStream);
        var errorListener = new FormulaErrorListener_1.FormulaErrorListener();
        parser._listeners = [errorListener];
        var visitor = new formulaVisitor.FormulaVisitor();
        var parseTree = parser.calculator();
        if (errorListener.isValid) {
            var visitorResult = visitor.visitCalculator(parseTree);
            if (isNaN(visitorResult)) {
                result.isValid = false;
                result.result = NaN;
            }
            else {
                result.isValid = true;
                result.result = visitorResult;
            }
            return result;
        }
        result.isValid = false;
        result.errorPosition = errorListener.errorLocation;
        result.errorMessage = errorListener.errorMessage;
        result.result = NaN;
        return result;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=Calculator.js.map