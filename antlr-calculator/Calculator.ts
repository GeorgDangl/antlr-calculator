import { FormulaVisitor } from './FormulaVisitor';
import { CalculationResult } from './CalculationResult';
import { FormulaErrorListener } from './FormulaErrorListener';

import { BaseError } from 'make-error-cause';

import { InputStream, CommonTokenStream } from 'antlr4';

import { CalculatorLexer, CalculatorParser } from './GeneratedAntlr';

export class Calculator {
    public static calculate(formula: string): CalculationResult {
        var result = new CalculationResult();
        if (formula === null || formula.match(/^\s*$/) !== null) {
            result.result = 0;
            result.isValid = true;
            return result;
        }
        var inputStream = new InputStream(formula);
        var lexer = new CalculatorLexer(inputStream);
        var commonTokenStream = new CommonTokenStream(lexer);
        var parser = new CalculatorParser(commonTokenStream);
        var errorListener = new FormulaErrorListener();
        parser._listeners = [errorListener];
        var visitor = new FormulaVisitor();
        var parseTree = parser.calculator();
        if (errorListener.isValid) {
            var visitorResult = visitor.visitCalculator(parseTree);
            if (isNaN(visitorResult)) {
                result.isValid = false;
                result.result = NaN;
            } else {
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
    }
}