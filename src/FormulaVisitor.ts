import { AbsContext, MaxContext, MinContext, SubstitutionContext } from "./GeneratedAntlr/CalculatorParser";

import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { AddSubContext } from "./GeneratedAntlr/CalculatorParser";
import { ArccosContext } from "./GeneratedAntlr/CalculatorParser";
import { ArccotContext } from "./GeneratedAntlr/CalculatorParser";
import { ArcsinContext } from "./GeneratedAntlr/CalculatorParser";
import { Arctan2Context } from "./GeneratedAntlr/CalculatorParser";
import { ArctanContext } from "./GeneratedAntlr/CalculatorParser";
import { CalculatorContext } from "./GeneratedAntlr/CalculatorParser";
import { CalculatorVisitor } from './GeneratedAntlr/CalculatorVisitor';
import { CeilContext } from "./GeneratedAntlr/CalculatorParser";
import { CosContext } from "./GeneratedAntlr/CalculatorParser";
import { CoshContext } from "./GeneratedAntlr/CalculatorParser";
import { CotContext } from "./GeneratedAntlr/CalculatorParser";
import { DegContext } from "./GeneratedAntlr/CalculatorParser";
import { EexContext } from "./GeneratedAntlr/CalculatorParser";
import { EulerContext } from "./GeneratedAntlr/CalculatorParser";
import { ExpContext } from "./GeneratedAntlr/CalculatorParser";
import { ExponentContext } from "./GeneratedAntlr/CalculatorParser";
import { ExpressionContext } from "./GeneratedAntlr/CalculatorParser";
import { FloorContext } from "./GeneratedAntlr/CalculatorParser";
import { FormulaErrorListener } from "./FormulaErrorListener";
import { LnContext } from "./GeneratedAntlr/CalculatorParser";
import { LogContext } from "./GeneratedAntlr/CalculatorParser";
import { ModContext } from "./GeneratedAntlr/CalculatorParser";
import { MulDivContext } from "./GeneratedAntlr/CalculatorParser";
import { MultContext } from "./GeneratedAntlr/CalculatorParser";
import { NegExponentContext } from "./GeneratedAntlr/CalculatorParser";
import { NumberContext } from "./GeneratedAntlr/CalculatorParser";
import { ParenthesisContext } from "./GeneratedAntlr/CalculatorParser";
import { PiContext } from "./GeneratedAntlr/CalculatorParser";
import { PowContext } from "./GeneratedAntlr/CalculatorParser";
import { RadContext } from "./GeneratedAntlr/CalculatorParser";
import { RoundContext } from "./GeneratedAntlr/CalculatorParser";
import { RoundkContext } from "./GeneratedAntlr/CalculatorParser";
import { SinContext } from "./GeneratedAntlr/CalculatorParser";
import { SinhContext } from "./GeneratedAntlr/CalculatorParser";
import { SqRootContext } from "./GeneratedAntlr/CalculatorParser";
import { SqrContext } from "./GeneratedAntlr/CalculatorParser";
import { SqrtContext } from "./GeneratedAntlr/CalculatorParser";
import { TanContext } from "./GeneratedAntlr/CalculatorParser";
import { TanhContext } from "./GeneratedAntlr/CalculatorParser";
import { TruncContext } from "./GeneratedAntlr/CalculatorParser";
import { UnaryContext } from "./GeneratedAntlr/CalculatorParser";
import { UnaryPlusContext } from "./GeneratedAntlr/CalculatorParser";
import { WholeContext } from "./GeneratedAntlr/CalculatorParser";

export class FormulaVisitor extends AbstractParseTreeVisitor<number> implements CalculatorVisitor<number> {

    protected defaultResult(): number {
        return 0;
    }

    constructor(private substitutionResolver: (substitution: string) => number,
        private formulaErrorListener: FormulaErrorListener) {
        super();
    }

    visitSubstitution(context: SubstitutionContext): number {
        const substitution = context.text;
        const resolved = this.substitutionResolver(substitution);
        if (resolved != null) {
            return resolved;
        }

        this.formulaErrorListener.reportSubstitutionNotFound(context.start.tokenIndex, substitution);
        return 0;
    }

    // Visit a parse tree produced by calculatorParser#calculator.
    visitCalculator(context: CalculatorContext): number {
        return context.expression().accept(this);
    };

    visitMin(context: MinContext): number {
        let currentMin = this.visitExpression(context._expr[0]);

        if (context._expr.length > 1)
        {
            for (let i = 1; i < context._expr.length; i++)
            {
                currentMin = Math.min(currentMin, this.visitExpression(context._expr[i]));
            }
        }
        
        return currentMin;
    };

    visitMax(context: MaxContext): number {
        let currentMax = this.visitExpression(context._expr[0]);

        if (context._expr.length > 1)
        {
            for (let i = 1; i < context._expr.length; i++)
            {
                currentMax = Math.max(currentMax, this.visitExpression(context._expr[i]));
            }
        }
        
        return currentMax;
    };

    visitExpression(context: ExpressionContext): number {
        return context.accept(this);
    };

    // Visit a parse tree produced by calculatorParser#Tan.
    visitTan(context: TanContext): number {
        return Math.tan(this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#Cosh.
    visitCosh(context: CoshContext): number {
        return Math.cosh(this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#SqRoot.
    visitSqRoot(context: SqRootContext): number {
        var nthRoot = this.visitExpression(context.expression(0));
        if (nthRoot === 0) {
            return NaN;
        }
        return Math.pow(this.visitExpression(context.expression(1)), 1 / nthRoot);
    };

    // Visit a parse tree produced by calculatorParser#NegExponent.
    visitNegExponent(context: NegExponentContext): number {
        return this.visitExpression(context.expression(0)) * Math.pow(10, -1 * this.visitExpression(context.expression(1)));
    };

    // Visit a parse tree produced by calculatorParser#Exponent.
    visitExponent(context: ExponentContext): number {
        return this.visitExpression(context.expression(0)) * Math.pow(10, this.visitExpression(context.expression(1)));
    };

    // Visit a parse tree produced by calculatorParser#Arctan2.
    visitArctan2(context: Arctan2Context): number {
        return Math.atan2(this.visitExpression(context.expression(0)), this.visitExpression(context.expression(1)));
    };

    // Visit a parse tree produced by calculatorParser#MulDiv.
    visitMulDiv(context: MulDivContext): number {
        if (context._op.text === '*') {
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

    visitMult(context: MultContext): number {
        return this.visitExpression(context.expression(0)) * this.visitExpression(context.expression(1));
    };

    // Visit a parse tree produced by calculatorParser#Arcsin.
    visitArcsin(context: ArcsinContext): number {
        return Math.asin(this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#Arccot.
    visitArccot(context: ArccotContext): number {
        return Math.PI * 0.5 - Math.atan(this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#Arccos.
    visitArccos(context: ArccosContext): number {
        return Math.acos(this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#Euler.
    visitEuler(context: EulerContext): number {
        return Math.E;
    };

    // Visit a parse tree produced by calculatorParser#Arctan.
    visitArctan(context: ArctanContext): number {
        return Math.atan(this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#Parenthesis.
    visitParenthesis(context: ParenthesisContext): number {
        return this.visitExpression(context.expression());
    };

    // Visit a parse tree produced by calculatorParser#Abs.
    visitAbs(context: AbsContext): number {
        return Math.abs(this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#Number.
    visitNumber(context: NumberContext): number {
        return Number(context.text.replace(',', '.'));
    };

    // Visit a parse tree produced by calculatorParser#Sinh.
    visitSinh(context: SinhContext): number {
        return Math.sinh(this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#Round.
    visitRound(context: RoundContext): number {
        return Math.round(this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#Trunc.
    visitTrunc(context: TruncContext): number {
        return Math.trunc(this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#Pi.
    visitPi(context: PiContext): number {
        return Math.PI;
    };

    // Visit a parse tree produced by calculatorParser#Tanh.
    visitTanh(context: TanhContext): number {
        return Math.tanh(this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#Floor.
    visitFloor(context: FloorContext): number {
        return Math.floor(this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#Ln.
    visitLn(context: LnContext): number {
        return Math.log(this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#Mod.
    visitMod(context: ModContext): number {
        return this.visitExpression(context.expression(0)) % this.visitExpression(context.expression(1));
    };

    // Visit a parse tree produced by calculatorParser#Log.
    visitLog(context: LogContext): number {
        return Math.log10(this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#AddSub.
    visitAddSub(context: AddSubContext): number {
        return context._op.text === '+'
            ? (this.visitExpression(context.expression(0)) + this.visitExpression(context.expression(1)))
            : (this.visitExpression(context.expression(0)) - this.visitExpression(context.expression(1)));
    };

    // Visit a parse tree produced by calculatorParser#Cos.
    visitCos(context: CosContext): number {
        return Math.cos(this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#Deg.
    visitDeg(context: DegContext): number {
        return this.visitExpression(context.expression()) * 180 / Math.PI;
    };

    // Visit a parse tree produced by calculatorParser#Sqrt.
    visitSqrt(context: SqrtContext): number {
        return Math.sqrt(this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#Cot.
    visitCot(context: CotContext): number {
        return 1 / Math.tan(this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#Whole.
    visitWhole(context: WholeContext): number {
        return Math.trunc(this.visitExpression(context.expression(0)) / this.visitExpression(context.expression(1)));
    };

    // Visit a parse tree produced by calculatorParser#Unary.
    visitUnary(context: UnaryContext): number {
        return -1 * this.visitExpression(context.expression());
    };

    // Visit a parse tree produced by calculatorParser#UnaryPlus.
    visitUnaryPlus(context: UnaryPlusContext): number {
        return this.visitExpression(context.expression());
    };

    // Visit a parse tree produced by calculatorParser#Rad.
    visitRad(context: RadContext): number {
        return this.visitExpression(context.expression()) * Math.PI / 180;
    };

    // Visit a parse tree produced by calculatorParser#Sqr.
    visitSqr(context: SqrContext): number {
        return this.visitExpression(context.expression()) * this.visitExpression(context.expression());
    };

    // Visit a parse tree produced by calculatorParser#Sin.
    visitSin(context: SinContext): number {
        return Math.sin(this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#Eex.
    visitEex(context: EexContext): number {
        return Math.pow(10, this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#Pow.
    visitPow(context: PowContext): number {
        return Math.pow(this.visitExpression(context.expression(0)), this.visitExpression(context.expression(1)));
    };

    // Visit a parse tree produced by calculatorParser#Ceil.
    visitCeil(context: CeilContext): number {
        return Math.ceil(this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#Exp.
    visitExp(context: ExpContext): number {
        return Math.pow(Math.E, this.visitExpression(context.expression()));
    };

    // Visit a parse tree produced by calculatorParser#Roundk.
    visitRoundk(context: RoundkContext): number {
        return Math.round(this.visitExpression(context.expression(0)) * Math.pow(10, this.visitExpression(context.expression(1)))) /
            Math.pow(10, this.visitExpression(context.expression(1)));
    };

}
