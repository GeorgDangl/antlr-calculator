"use strict";
var FormulaVisitor_1 = require('./FormulaVisitor');
var CalculationResult_1 = require('./CalculationResult');
var FormulaErrorListener_1 = require('./FormulaErrorListener');
var antlr4_1 = require('antlr4');
var GeneratedAntlr_1 = require('./GeneratedAntlr');
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
        var inputStream = new antlr4_1.InputStream(formula);
        var lexer = new GeneratedAntlr_1.CalculatorLexer(inputStream);
        var commonTokenStream = new antlr4_1.CommonTokenStream(lexer);
        var parser = new GeneratedAntlr_1.CalculatorParser(commonTokenStream);
        var errorListener = new FormulaErrorListener_1.FormulaErrorListener();
        parser._listeners = [errorListener];
        var visitor = new FormulaVisitor_1.FormulaVisitor();
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