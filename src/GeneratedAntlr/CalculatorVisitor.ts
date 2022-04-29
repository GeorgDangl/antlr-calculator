// Generated from ./src/Calculator.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { UnaryContext } from "./CalculatorParser";
import { UnaryPlusContext } from "./CalculatorParser";
import { FloorContext } from "./CalculatorParser";
import { CeilContext } from "./CalculatorParser";
import { AbsContext } from "./CalculatorParser";
import { RoundkContext } from "./CalculatorParser";
import { RoundContext } from "./CalculatorParser";
import { TruncContext } from "./CalculatorParser";
import { SinContext } from "./CalculatorParser";
import { CosContext } from "./CalculatorParser";
import { TanContext } from "./CalculatorParser";
import { CotContext } from "./CalculatorParser";
import { SinhContext } from "./CalculatorParser";
import { CoshContext } from "./CalculatorParser";
import { TanhContext } from "./CalculatorParser";
import { ArcsinContext } from "./CalculatorParser";
import { ArccosContext } from "./CalculatorParser";
import { ArctanContext } from "./CalculatorParser";
import { Arctan2Context } from "./CalculatorParser";
import { ArccotContext } from "./CalculatorParser";
import { ExpContext } from "./CalculatorParser";
import { LnContext } from "./CalculatorParser";
import { EexContext } from "./CalculatorParser";
import { LogContext } from "./CalculatorParser";
import { RadContext } from "./CalculatorParser";
import { DegContext } from "./CalculatorParser";
import { SqrtContext } from "./CalculatorParser";
import { SqrContext } from "./CalculatorParser";
import { ExponentContext } from "./CalculatorParser";
import { NegExponentContext } from "./CalculatorParser";
import { PowContext } from "./CalculatorParser";
import { ModContext } from "./CalculatorParser";
import { WholeContext } from "./CalculatorParser";
import { SqRootContext } from "./CalculatorParser";
import { MulDivContext } from "./CalculatorParser";
import { ParenthesisContext } from "./CalculatorParser";
import { MultContext } from "./CalculatorParser";
import { MinContext } from "./CalculatorParser";
import { MaxContext } from "./CalculatorParser";
import { AddSubContext } from "./CalculatorParser";
import { NumberContext } from "./CalculatorParser";
import { PiContext } from "./CalculatorParser";
import { EulerContext } from "./CalculatorParser";
import { SubstitutionContext } from "./CalculatorParser";
import { CalculatorContext } from "./CalculatorParser";
import { ExpressionContext } from "./CalculatorParser";
import { TrailingCommentContext } from "./CalculatorParser";
import { CompileUnitContext } from "./CalculatorParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CalculatorParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CalculatorVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `Unary`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary?: (ctx: UnaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryPlus`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryPlus?: (ctx: UnaryPlusContext) => Result;

	/**
	 * Visit a parse tree produced by the `Floor`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloor?: (ctx: FloorContext) => Result;

	/**
	 * Visit a parse tree produced by the `Ceil`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCeil?: (ctx: CeilContext) => Result;

	/**
	 * Visit a parse tree produced by the `Abs`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbs?: (ctx: AbsContext) => Result;

	/**
	 * Visit a parse tree produced by the `Roundk`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoundk?: (ctx: RoundkContext) => Result;

	/**
	 * Visit a parse tree produced by the `Round`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRound?: (ctx: RoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `Trunc`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrunc?: (ctx: TruncContext) => Result;

	/**
	 * Visit a parse tree produced by the `Sin`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSin?: (ctx: SinContext) => Result;

	/**
	 * Visit a parse tree produced by the `Cos`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCos?: (ctx: CosContext) => Result;

	/**
	 * Visit a parse tree produced by the `Tan`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTan?: (ctx: TanContext) => Result;

	/**
	 * Visit a parse tree produced by the `Cot`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCot?: (ctx: CotContext) => Result;

	/**
	 * Visit a parse tree produced by the `Sinh`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSinh?: (ctx: SinhContext) => Result;

	/**
	 * Visit a parse tree produced by the `Cosh`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCosh?: (ctx: CoshContext) => Result;

	/**
	 * Visit a parse tree produced by the `Tanh`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTanh?: (ctx: TanhContext) => Result;

	/**
	 * Visit a parse tree produced by the `Arcsin`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArcsin?: (ctx: ArcsinContext) => Result;

	/**
	 * Visit a parse tree produced by the `Arccos`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArccos?: (ctx: ArccosContext) => Result;

	/**
	 * Visit a parse tree produced by the `Arctan`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArctan?: (ctx: ArctanContext) => Result;

	/**
	 * Visit a parse tree produced by the `Arctan2`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArctan2?: (ctx: Arctan2Context) => Result;

	/**
	 * Visit a parse tree produced by the `Arccot`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArccot?: (ctx: ArccotContext) => Result;

	/**
	 * Visit a parse tree produced by the `Exp`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp?: (ctx: ExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `Ln`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLn?: (ctx: LnContext) => Result;

	/**
	 * Visit a parse tree produced by the `Eex`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEex?: (ctx: EexContext) => Result;

	/**
	 * Visit a parse tree produced by the `Log`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLog?: (ctx: LogContext) => Result;

	/**
	 * Visit a parse tree produced by the `Rad`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRad?: (ctx: RadContext) => Result;

	/**
	 * Visit a parse tree produced by the `Deg`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeg?: (ctx: DegContext) => Result;

	/**
	 * Visit a parse tree produced by the `Sqrt`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqrt?: (ctx: SqrtContext) => Result;

	/**
	 * Visit a parse tree produced by the `Sqr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqr?: (ctx: SqrContext) => Result;

	/**
	 * Visit a parse tree produced by the `Exponent`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExponent?: (ctx: ExponentContext) => Result;

	/**
	 * Visit a parse tree produced by the `NegExponent`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegExponent?: (ctx: NegExponentContext) => Result;

	/**
	 * Visit a parse tree produced by the `Pow`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPow?: (ctx: PowContext) => Result;

	/**
	 * Visit a parse tree produced by the `Mod`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMod?: (ctx: ModContext) => Result;

	/**
	 * Visit a parse tree produced by the `Whole`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhole?: (ctx: WholeContext) => Result;

	/**
	 * Visit a parse tree produced by the `SqRoot`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqRoot?: (ctx: SqRootContext) => Result;

	/**
	 * Visit a parse tree produced by the `MulDiv`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulDiv?: (ctx: MulDivContext) => Result;

	/**
	 * Visit a parse tree produced by the `Parenthesis`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesis?: (ctx: ParenthesisContext) => Result;

	/**
	 * Visit a parse tree produced by the `Mult`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMult?: (ctx: MultContext) => Result;

	/**
	 * Visit a parse tree produced by the `Min`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMin?: (ctx: MinContext) => Result;

	/**
	 * Visit a parse tree produced by the `Max`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMax?: (ctx: MaxContext) => Result;

	/**
	 * Visit a parse tree produced by the `AddSub`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSub?: (ctx: AddSubContext) => Result;

	/**
	 * Visit a parse tree produced by the `Number`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by the `Pi`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPi?: (ctx: PiContext) => Result;

	/**
	 * Visit a parse tree produced by the `Euler`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEuler?: (ctx: EulerContext) => Result;

	/**
	 * Visit a parse tree produced by the `Substitution`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubstitution?: (ctx: SubstitutionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalculatorParser.calculator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculator?: (ctx: CalculatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalculatorParser.trailingComment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrailingComment?: (ctx: TrailingCommentContext) => Result;

	/**
	 * Visit a parse tree produced by `CalculatorParser.compileUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompileUnit?: (ctx: CompileUnitContext) => Result;
}

