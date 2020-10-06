import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';

import { CalculationResult } from './CalculationResult';
import { CalculatorLexer } from './GeneratedAntlr/CalculatorLexer';
import { CalculatorParser } from './GeneratedAntlr/CalculatorParser';
import { FormulaErrorListener } from './FormulaErrorListener';
import { FormulaVisitor } from './FormulaVisitor';

export class Calculator {
    public static calculate(formula: string): CalculationResult {
        var result = new CalculationResult();
        if (formula === null || /^\s*$/.test(formula)) {
            result.result = 0;
            result.isValid = true;
            return result;
        }
        var inputStream = new ANTLRInputStream(formula);
        var lexer = new CalculatorLexer(inputStream);
        var commonTokenStream = new CommonTokenStream(lexer);
        var parser = new CalculatorParser(commonTokenStream);
        var errorListener = new FormulaErrorListener();
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);
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