import { tree } from 'antlr4';
import { CalculatorVisitor } from './GeneratedAntlr'

// This class defines a complete visitor for a parse tree produced by the CalculatorParser.
export class FormulaVisitor extends CalculatorVisitor {

    // Visit a parse tree produced by calculatorParser#calculator.
    public visitCalculator(context): number {
        return context.expression(0).accept(this);
    };

    public visitExpression(context): number {
        return context.accept(this);
    };

    // Visit a parse tree produced by calculatorParser#Tan.
    public visitTan(context): number {
        return Math.tan(this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#Cosh.
    public visitCosh(context): number {
        return Math.cosh(this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#SqRoot.
    public visitSqRoot(context): number {
        var nthRoot = this.visitExpression(context.expression(0));
        if (nthRoot === 0) {
            return NaN;
        }
        return Math.pow(this.visitExpression(context.expression(1)), 1 / nthRoot);
    };


    // Visit a parse tree produced by calculatorParser#NegExponent.
    public visitNegExponent(context): number {
        return this.visitExpression(context.expression(0)) * Math.pow(10, -1 * this.visitExpression(context.expression(1)));
    };


    // Visit a parse tree produced by calculatorParser#Exponent.
    public visitExponent(context): number {
        return this.visitExpression(context.expression(0)) * Math.pow(10, this.visitExpression(context.expression(1)));
    };


    // Visit a parse tree produced by calculatorParser#Arctan2.
    public visitArctan2(context): number {
        return Math.atan2(this.visitExpression(context.expression(0)), this.visitExpression(context.expression(1)));
    };


    // Visit a parse tree produced by calculatorParser#MulDiv.
    public visitMulDiv(context): number {
        if (context.op.text === '*') {
            return this.visitExpression(context.expression(0)) * this.visitExpression(context.expression(1));
        } else {
            var divisor = this.visitExpression(context.expression(1));
            if (divisor !== 0) {
                return this.visitExpression(context.expression(0)) / divisor;
            }
            return NaN;
        }
    };


    // Visit a parse tree produced by calculatorParser#Arcsin.
    public visitArcsin(context): number {
        return Math.asin(this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#Arccot.
    public visitArccot(context): number {
        return Math.PI * 0.5 - Math.atan(this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#Arccos.
    public visitArccos(context): number {
        return Math.acos(this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#Euler.
    public visitEuler(context): number {
        return Math.E;
    };


    // Visit a parse tree produced by calculatorParser#Arctan.
    public visitArctan(context): number {
        return Math.atan(this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#Parenthesis.
    public visitParenthesis(context): number {
        return this.visitExpression(context.expression(0));
    };


    // Visit a parse tree produced by calculatorParser#Abs.
    public visitAbs(context): number {
        return Math.abs(this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#Number.
    public visitNumber(context): number {
        return Number(context.getText().replace(',', '.'));
    };


    // Visit a parse tree produced by calculatorParser#Sinh.
    public visitSinh(context): number {
        return Math.sinh(this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#Round.
    public visitRound(context): number {
        return Math.round(this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#Trunc.
    public visitTrunc(context): number {
        return Math.trunc(this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#Pi.
    public visitPi(context): number {
        return Math.PI;
    };


    // Visit a parse tree produced by calculatorParser#Tanh.
    public visitTanh(context): number {
        return Math.tanh(this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#Floor.
    public visitFloor(context): number {
        return Math.floor(this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#Ln.
    public visitLn(context): number {
        return Math.log(this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#Mod.
    public visitMod(context): number {
        return this.visitExpression(context.expression(0)) % this.visitExpression(context.expression(1));
    };


    // Visit a parse tree produced by calculatorParser#Log.
    public visitLog(context): number {
        return Math.log10(this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#AddSub.
    public visitAddSub(context): number {
        return context.op.text === '+'
            ? (this.visitExpression(context.expression(0)) + this.visitExpression(context.expression(1)))
            : (this.visitExpression(context.expression(0)) - this.visitExpression(context.expression(1)));
    };


    // Visit a parse tree produced by calculatorParser#Cos.
    public visitCos(context): number {
        return Math.cos(this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#Deg.
    public visitDeg(context): number {
        return this.visitExpression(context.expression(0)) * 180 / Math.PI;
    };


    // Visit a parse tree produced by calculatorParser#Sqrt.
    public visitSqrt(context): number {
        return Math.sqrt(this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#Cot.
    public visitCot(context): number {
        return 1 / Math.tan(this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#Whole.
    public visitWhole(context): number {
        return Math.trunc(this.visitExpression(context.expression(0)) / this.visitExpression(context.expression(1)));
    };


    // Visit a parse tree produced by calculatorParser#Unary.
    public visitUnary(context): number {
        return -1 * this.visitExpression(context.expression(0));
    };

    // Visit a parse tree produced by calculatorParser#UnaryPlus.
    public visitUnaryPlus(context): number {
        return this.visitExpression(context.expression(0));
    }


    // Visit a parse tree produced by calculatorParser#Rad.
    public visitRad(context): number {
        return this.visitExpression(context.expression(0)) * Math.PI / 180;
    };


    // Visit a parse tree produced by calculatorParser#Sqr.
    public visitSqr(context): number {
        return this.visitExpression(context.expression(0)) * this.visitExpression(context.expression(0));
    };


    // Visit a parse tree produced by calculatorParser#Sin.
    public visitSin(context): number {
        return Math.sin(this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#Eex.
    public visitEex(context): number {
        return Math.pow(10, this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#Pow.
    public visitPow(context): number {
        return Math.pow(this.visitExpression(context.expression(0)), this.visitExpression(context.expression(1)));
    };


    // Visit a parse tree produced by calculatorParser#Ceil.
    public visitCeil(context): number {
        return Math.ceil(this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#Exp.
    public visitExp(context): number {
        return Math.pow(Math.E, this.visitExpression(context.expression(0)));
    };


    // Visit a parse tree produced by calculatorParser#Roundk.
    public visitRoundk(context): number {
        return Math.round(this.visitExpression(context.expression(0)) * Math.pow(10, this.visitExpression(context.expression(1)))) /
            Math.pow(10, this.visitExpression(context.expression(1)));
    };
}