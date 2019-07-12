"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var calculatorVisitor = require('./GeneratedAntlr/CalculatorVisitor.js');
// This class defines a complete visitor for a parse tree produced by the CalculatorParser.
var FormulaVisitor = (function (_super) {
    __extends(FormulaVisitor, _super);
    function FormulaVisitor() {
        _super.apply(this, arguments);
    }
    // Visit a parse tree produced by calculatorParser#calculator.
    FormulaVisitor.prototype.visitCalculator = function (context) {
        return context.expression(0).accept(this);
    };
    
    FormulaVisitor.prototype.visitExpression = function (context) {
        return context.accept(this);
    };
    
    // Visit a parse tree produced by calculatorParser#Tan.
    FormulaVisitor.prototype.visitTan = function (context) {
        return Math.tan(this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#Cosh.
    FormulaVisitor.prototype.visitCosh = function (context) {
        return Math.cosh(this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#SqRoot.
    FormulaVisitor.prototype.visitSqRoot = function (context) {
        var nthRoot = this.visitExpression(context.expression(0));
        if (nthRoot === 0) {
            return NaN;
        }
        return Math.pow(this.visitExpression(context.expression(1)), 1 / nthRoot);
    };
    
    // Visit a parse tree produced by calculatorParser#NegExponent.
    FormulaVisitor.prototype.visitNegExponent = function (context) {
        return this.visitExpression(context.expression(0)) * Math.pow(10, -1 * this.visitExpression(context.expression(1)));
    };
    
    // Visit a parse tree produced by calculatorParser#Exponent.
    FormulaVisitor.prototype.visitExponent = function (context) {
        return this.visitExpression(context.expression(0)) * Math.pow(10, this.visitExpression(context.expression(1)));
    };
    
    // Visit a parse tree produced by calculatorParser#Arctan2.
    FormulaVisitor.prototype.visitArctan2 = function (context) {
        return Math.atan2(this.visitExpression(context.expression(0)), this.visitExpression(context.expression(1)));
    };
    
    // Visit a parse tree produced by calculatorParser#MulDiv.
    FormulaVisitor.prototype.visitMulDiv = function (context) {
        if (context.op.text === '*') {
            return this.visitExpression(context.expression(0)) * this.visitExpression(context.expression(1));
        }
        else {
            var divisor = this.visitExpression(context.expression(1));
            if (divisor !== 0) {
                return this.visitExpression(context.expression(0)) / divisor;
            }
            return NaN;
        }
    };

    FormulaVisitor.prototype.visitMult = function (context) {
        return this.visitExpression(context.expression(0)) * this.visitExpression(context.expression(1));
    };
    
    // Visit a parse tree produced by calculatorParser#Arcsin.
    FormulaVisitor.prototype.visitArcsin = function (context) {
        return Math.asin(this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#Arccot.
    FormulaVisitor.prototype.visitArccot = function (context) {
        return Math.PI * 0.5 - Math.atan(this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#Arccos.
    FormulaVisitor.prototype.visitArccos = function (context) {
        return Math.acos(this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#Euler.
    FormulaVisitor.prototype.visitEuler = function (context) {
        return Math.E;
    };
    
    // Visit a parse tree produced by calculatorParser#Arctan.
    FormulaVisitor.prototype.visitArctan = function (context) {
        return Math.atan(this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#Parenthesis.
    FormulaVisitor.prototype.visitParenthesis = function (context) {
        return this.visitExpression(context.expression(0));
    };
    
    // Visit a parse tree produced by calculatorParser#Abs.
    FormulaVisitor.prototype.visitAbs = function (context) {
        return Math.abs(this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#Number.
    FormulaVisitor.prototype.visitNumber = function (context) {
        return Number(context.getText().replace(',', '.'));
    };
    
    // Visit a parse tree produced by calculatorParser#Sinh.
    FormulaVisitor.prototype.visitSinh = function (context) {
        return Math.sinh(this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#Round.
    FormulaVisitor.prototype.visitRound = function (context) {
        return Math.round(this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#Trunc.
    FormulaVisitor.prototype.visitTrunc = function (context) {
        return Math.trunc(this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#Pi.
    FormulaVisitor.prototype.visitPi = function (context) {
        return Math.PI;
    };
    
    // Visit a parse tree produced by calculatorParser#Tanh.
    FormulaVisitor.prototype.visitTanh = function (context) {
        return Math.tanh(this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#Floor.
    FormulaVisitor.prototype.visitFloor = function (context) {
        return Math.floor(this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#Ln.
    FormulaVisitor.prototype.visitLn = function (context) {
        return Math.log(this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#Mod.
    FormulaVisitor.prototype.visitMod = function (context) {
        return this.visitExpression(context.expression(0)) % this.visitExpression(context.expression(1));
    };
    
    // Visit a parse tree produced by calculatorParser#Log.
    FormulaVisitor.prototype.visitLog = function (context) {
        return Math.log10(this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#AddSub.
    FormulaVisitor.prototype.visitAddSub = function (context) {
        return context.op.text === '+'
            ? (this.visitExpression(context.expression(0)) + this.visitExpression(context.expression(1)))
            : (this.visitExpression(context.expression(0)) - this.visitExpression(context.expression(1)));
    };
    
    // Visit a parse tree produced by calculatorParser#Cos.
    FormulaVisitor.prototype.visitCos = function (context) {
        return Math.cos(this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#Deg.
    FormulaVisitor.prototype.visitDeg = function (context) {
        return this.visitExpression(context.expression(0)) * 180 / Math.PI;
    };
    
    // Visit a parse tree produced by calculatorParser#Sqrt.
    FormulaVisitor.prototype.visitSqrt = function (context) {
        return Math.sqrt(this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#Cot.
    FormulaVisitor.prototype.visitCot = function (context) {
        return 1 / Math.tan(this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#Whole.
    FormulaVisitor.prototype.visitWhole = function (context) {
        return Math.trunc(this.visitExpression(context.expression(0)) / this.visitExpression(context.expression(1)));
    };
    
    // Visit a parse tree produced by calculatorParser#Unary.
    FormulaVisitor.prototype.visitUnary = function (context) {
        return -1 * this.visitExpression(context.expression(0));
    };
    
    // Visit a parse tree produced by calculatorParser#UnaryPlus.
    FormulaVisitor.prototype.visitUnaryPlus = function (context) {
        return this.visitExpression(context.expression(0));
    };

    // Visit a parse tree produced by calculatorParser#Rad.
    FormulaVisitor.prototype.visitRad = function (context) {
        return this.visitExpression(context.expression(0)) * Math.PI / 180;
    };
    
    // Visit a parse tree produced by calculatorParser#Sqr.
    FormulaVisitor.prototype.visitSqr = function (context) {
        return this.visitExpression(context.expression(0)) * this.visitExpression(context.expression(0));
    };
    
    // Visit a parse tree produced by calculatorParser#Sin.
    FormulaVisitor.prototype.visitSin = function (context) {
        return Math.sin(this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#Eex.
    FormulaVisitor.prototype.visitEex = function (context) {
        return Math.pow(10, this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#Pow.
    FormulaVisitor.prototype.visitPow = function (context) {
        return Math.pow(this.visitExpression(context.expression(0)), this.visitExpression(context.expression(1)));
    };
    
    // Visit a parse tree produced by calculatorParser#Ceil.
    FormulaVisitor.prototype.visitCeil = function (context) {
        return Math.ceil(this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#Exp.
    FormulaVisitor.prototype.visitExp = function (context) {
        return Math.pow(Math.E, this.visitExpression(context.expression(0)));
    };
    
    // Visit a parse tree produced by calculatorParser#Roundk.
    FormulaVisitor.prototype.visitRoundk = function (context) {
        return Math.round(this.visitExpression(context.expression(0)) * Math.pow(10, this.visitExpression(context.expression(1)))) /
            Math.pow(10, this.visitExpression(context.expression(1)));
    };
    
    return FormulaVisitor;
}(calculatorVisitor.CalculatorVisitor));
exports.FormulaVisitor = FormulaVisitor;
