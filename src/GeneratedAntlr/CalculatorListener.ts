// Generated from ./src/Calculator.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `CalculatorParser`.
 */
export interface CalculatorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `Unary`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnary?: (ctx: UnaryContext) => void;
	/**
	 * Exit a parse tree produced by the `Unary`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnary?: (ctx: UnaryContext) => void;

	/**
	 * Enter a parse tree produced by the `UnaryPlus`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryPlus?: (ctx: UnaryPlusContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryPlus`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryPlus?: (ctx: UnaryPlusContext) => void;

	/**
	 * Enter a parse tree produced by the `Floor`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFloor?: (ctx: FloorContext) => void;
	/**
	 * Exit a parse tree produced by the `Floor`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFloor?: (ctx: FloorContext) => void;

	/**
	 * Enter a parse tree produced by the `Ceil`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCeil?: (ctx: CeilContext) => void;
	/**
	 * Exit a parse tree produced by the `Ceil`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCeil?: (ctx: CeilContext) => void;

	/**
	 * Enter a parse tree produced by the `Abs`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAbs?: (ctx: AbsContext) => void;
	/**
	 * Exit a parse tree produced by the `Abs`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAbs?: (ctx: AbsContext) => void;

	/**
	 * Enter a parse tree produced by the `Roundk`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRoundk?: (ctx: RoundkContext) => void;
	/**
	 * Exit a parse tree produced by the `Roundk`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRoundk?: (ctx: RoundkContext) => void;

	/**
	 * Enter a parse tree produced by the `Round`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRound?: (ctx: RoundContext) => void;
	/**
	 * Exit a parse tree produced by the `Round`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRound?: (ctx: RoundContext) => void;

	/**
	 * Enter a parse tree produced by the `Trunc`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTrunc?: (ctx: TruncContext) => void;
	/**
	 * Exit a parse tree produced by the `Trunc`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTrunc?: (ctx: TruncContext) => void;

	/**
	 * Enter a parse tree produced by the `Sin`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSin?: (ctx: SinContext) => void;
	/**
	 * Exit a parse tree produced by the `Sin`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSin?: (ctx: SinContext) => void;

	/**
	 * Enter a parse tree produced by the `Cos`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCos?: (ctx: CosContext) => void;
	/**
	 * Exit a parse tree produced by the `Cos`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCos?: (ctx: CosContext) => void;

	/**
	 * Enter a parse tree produced by the `Tan`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTan?: (ctx: TanContext) => void;
	/**
	 * Exit a parse tree produced by the `Tan`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTan?: (ctx: TanContext) => void;

	/**
	 * Enter a parse tree produced by the `Cot`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCot?: (ctx: CotContext) => void;
	/**
	 * Exit a parse tree produced by the `Cot`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCot?: (ctx: CotContext) => void;

	/**
	 * Enter a parse tree produced by the `Sinh`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSinh?: (ctx: SinhContext) => void;
	/**
	 * Exit a parse tree produced by the `Sinh`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSinh?: (ctx: SinhContext) => void;

	/**
	 * Enter a parse tree produced by the `Cosh`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCosh?: (ctx: CoshContext) => void;
	/**
	 * Exit a parse tree produced by the `Cosh`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCosh?: (ctx: CoshContext) => void;

	/**
	 * Enter a parse tree produced by the `Tanh`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTanh?: (ctx: TanhContext) => void;
	/**
	 * Exit a parse tree produced by the `Tanh`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTanh?: (ctx: TanhContext) => void;

	/**
	 * Enter a parse tree produced by the `Arcsin`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterArcsin?: (ctx: ArcsinContext) => void;
	/**
	 * Exit a parse tree produced by the `Arcsin`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitArcsin?: (ctx: ArcsinContext) => void;

	/**
	 * Enter a parse tree produced by the `Arccos`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterArccos?: (ctx: ArccosContext) => void;
	/**
	 * Exit a parse tree produced by the `Arccos`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitArccos?: (ctx: ArccosContext) => void;

	/**
	 * Enter a parse tree produced by the `Arctan`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterArctan?: (ctx: ArctanContext) => void;
	/**
	 * Exit a parse tree produced by the `Arctan`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitArctan?: (ctx: ArctanContext) => void;

	/**
	 * Enter a parse tree produced by the `Arctan2`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterArctan2?: (ctx: Arctan2Context) => void;
	/**
	 * Exit a parse tree produced by the `Arctan2`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitArctan2?: (ctx: Arctan2Context) => void;

	/**
	 * Enter a parse tree produced by the `Arccot`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterArccot?: (ctx: ArccotContext) => void;
	/**
	 * Exit a parse tree produced by the `Arccot`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitArccot?: (ctx: ArccotContext) => void;

	/**
	 * Enter a parse tree produced by the `Exp`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExp?: (ctx: ExpContext) => void;
	/**
	 * Exit a parse tree produced by the `Exp`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExp?: (ctx: ExpContext) => void;

	/**
	 * Enter a parse tree produced by the `Ln`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLn?: (ctx: LnContext) => void;
	/**
	 * Exit a parse tree produced by the `Ln`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLn?: (ctx: LnContext) => void;

	/**
	 * Enter a parse tree produced by the `Eex`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEex?: (ctx: EexContext) => void;
	/**
	 * Exit a parse tree produced by the `Eex`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEex?: (ctx: EexContext) => void;

	/**
	 * Enter a parse tree produced by the `Log`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLog?: (ctx: LogContext) => void;
	/**
	 * Exit a parse tree produced by the `Log`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLog?: (ctx: LogContext) => void;

	/**
	 * Enter a parse tree produced by the `Rad`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRad?: (ctx: RadContext) => void;
	/**
	 * Exit a parse tree produced by the `Rad`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRad?: (ctx: RadContext) => void;

	/**
	 * Enter a parse tree produced by the `Deg`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterDeg?: (ctx: DegContext) => void;
	/**
	 * Exit a parse tree produced by the `Deg`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitDeg?: (ctx: DegContext) => void;

	/**
	 * Enter a parse tree produced by the `Sqrt`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSqrt?: (ctx: SqrtContext) => void;
	/**
	 * Exit a parse tree produced by the `Sqrt`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSqrt?: (ctx: SqrtContext) => void;

	/**
	 * Enter a parse tree produced by the `Sqr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSqr?: (ctx: SqrContext) => void;
	/**
	 * Exit a parse tree produced by the `Sqr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSqr?: (ctx: SqrContext) => void;

	/**
	 * Enter a parse tree produced by the `Exponent`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExponent?: (ctx: ExponentContext) => void;
	/**
	 * Exit a parse tree produced by the `Exponent`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExponent?: (ctx: ExponentContext) => void;

	/**
	 * Enter a parse tree produced by the `NegExponent`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNegExponent?: (ctx: NegExponentContext) => void;
	/**
	 * Exit a parse tree produced by the `NegExponent`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNegExponent?: (ctx: NegExponentContext) => void;

	/**
	 * Enter a parse tree produced by the `Pow`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPow?: (ctx: PowContext) => void;
	/**
	 * Exit a parse tree produced by the `Pow`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPow?: (ctx: PowContext) => void;

	/**
	 * Enter a parse tree produced by the `Mod`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMod?: (ctx: ModContext) => void;
	/**
	 * Exit a parse tree produced by the `Mod`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMod?: (ctx: ModContext) => void;

	/**
	 * Enter a parse tree produced by the `Whole`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterWhole?: (ctx: WholeContext) => void;
	/**
	 * Exit a parse tree produced by the `Whole`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitWhole?: (ctx: WholeContext) => void;

	/**
	 * Enter a parse tree produced by the `SqRoot`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSqRoot?: (ctx: SqRootContext) => void;
	/**
	 * Exit a parse tree produced by the `SqRoot`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSqRoot?: (ctx: SqRootContext) => void;

	/**
	 * Enter a parse tree produced by the `MulDiv`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMulDiv?: (ctx: MulDivContext) => void;
	/**
	 * Exit a parse tree produced by the `MulDiv`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMulDiv?: (ctx: MulDivContext) => void;

	/**
	 * Enter a parse tree produced by the `Parenthesis`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParenthesis?: (ctx: ParenthesisContext) => void;
	/**
	 * Exit a parse tree produced by the `Parenthesis`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParenthesis?: (ctx: ParenthesisContext) => void;

	/**
	 * Enter a parse tree produced by the `Mult`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMult?: (ctx: MultContext) => void;
	/**
	 * Exit a parse tree produced by the `Mult`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMult?: (ctx: MultContext) => void;

	/**
	 * Enter a parse tree produced by the `Min`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMin?: (ctx: MinContext) => void;
	/**
	 * Exit a parse tree produced by the `Min`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMin?: (ctx: MinContext) => void;

	/**
	 * Enter a parse tree produced by the `Max`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMax?: (ctx: MaxContext) => void;
	/**
	 * Exit a parse tree produced by the `Max`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMax?: (ctx: MaxContext) => void;

	/**
	 * Enter a parse tree produced by the `AddSub`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddSub?: (ctx: AddSubContext) => void;
	/**
	 * Exit a parse tree produced by the `AddSub`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddSub?: (ctx: AddSubContext) => void;

	/**
	 * Enter a parse tree produced by the `Number`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by the `Number`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by the `Pi`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPi?: (ctx: PiContext) => void;
	/**
	 * Exit a parse tree produced by the `Pi`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPi?: (ctx: PiContext) => void;

	/**
	 * Enter a parse tree produced by the `Euler`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEuler?: (ctx: EulerContext) => void;
	/**
	 * Exit a parse tree produced by the `Euler`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEuler?: (ctx: EulerContext) => void;

	/**
	 * Enter a parse tree produced by the `Substitution`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSubstitution?: (ctx: SubstitutionContext) => void;
	/**
	 * Exit a parse tree produced by the `Substitution`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSubstitution?: (ctx: SubstitutionContext) => void;

	/**
	 * Enter a parse tree produced by `CalculatorParser.calculator`.
	 * @param ctx the parse tree
	 */
	enterCalculator?: (ctx: CalculatorContext) => void;
	/**
	 * Exit a parse tree produced by `CalculatorParser.calculator`.
	 * @param ctx the parse tree
	 */
	exitCalculator?: (ctx: CalculatorContext) => void;

	/**
	 * Enter a parse tree produced by `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalculatorParser.trailingComment`.
	 * @param ctx the parse tree
	 */
	enterTrailingComment?: (ctx: TrailingCommentContext) => void;
	/**
	 * Exit a parse tree produced by `CalculatorParser.trailingComment`.
	 * @param ctx the parse tree
	 */
	exitTrailingComment?: (ctx: TrailingCommentContext) => void;

	/**
	 * Enter a parse tree produced by `CalculatorParser.compileUnit`.
	 * @param ctx the parse tree
	 */
	enterCompileUnit?: (ctx: CompileUnitContext) => void;
	/**
	 * Exit a parse tree produced by `CalculatorParser.compileUnit`.
	 * @param ctx the parse tree
	 */
	exitCompileUnit?: (ctx: CompileUnitContext) => void;
}

