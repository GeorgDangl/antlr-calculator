// Generated from d:/Git/antlr-calculator/src/Calculator.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CalculatorParser}.
 */
public interface CalculatorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#calculator}.
	 * @param ctx the parse tree
	 */
	void enterCalculator(CalculatorParser.CalculatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#calculator}.
	 * @param ctx the parse tree
	 */
	void exitCalculator(CalculatorParser.CalculatorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Tan}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterTan(CalculatorParser.TanContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Tan}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitTan(CalculatorParser.TanContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Cosh}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterCosh(CalculatorParser.CoshContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Cosh}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitCosh(CalculatorParser.CoshContext ctx);
	/**
	 * Enter a parse tree produced by the {@code SqRoot}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterSqRoot(CalculatorParser.SqRootContext ctx);
	/**
	 * Exit a parse tree produced by the {@code SqRoot}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitSqRoot(CalculatorParser.SqRootContext ctx);
	/**
	 * Enter a parse tree produced by the {@code NegExponent}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterNegExponent(CalculatorParser.NegExponentContext ctx);
	/**
	 * Exit a parse tree produced by the {@code NegExponent}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitNegExponent(CalculatorParser.NegExponentContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Exponent}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExponent(CalculatorParser.ExponentContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Exponent}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExponent(CalculatorParser.ExponentContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Arctan2}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterArctan2(CalculatorParser.Arctan2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code Arctan2}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitArctan2(CalculatorParser.Arctan2Context ctx);
	/**
	 * Enter a parse tree produced by the {@code Max}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterMax(CalculatorParser.MaxContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Max}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitMax(CalculatorParser.MaxContext ctx);
	/**
	 * Enter a parse tree produced by the {@code MulDiv}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterMulDiv(CalculatorParser.MulDivContext ctx);
	/**
	 * Exit a parse tree produced by the {@code MulDiv}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitMulDiv(CalculatorParser.MulDivContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Arcsin}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterArcsin(CalculatorParser.ArcsinContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Arcsin}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitArcsin(CalculatorParser.ArcsinContext ctx);
	/**
	 * Enter a parse tree produced by the {@code UnaryPlus}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterUnaryPlus(CalculatorParser.UnaryPlusContext ctx);
	/**
	 * Exit a parse tree produced by the {@code UnaryPlus}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitUnaryPlus(CalculatorParser.UnaryPlusContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Arccot}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterArccot(CalculatorParser.ArccotContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Arccot}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitArccot(CalculatorParser.ArccotContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Arccos}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterArccos(CalculatorParser.ArccosContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Arccos}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitArccos(CalculatorParser.ArccosContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Euler}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterEuler(CalculatorParser.EulerContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Euler}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitEuler(CalculatorParser.EulerContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Arctan}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterArctan(CalculatorParser.ArctanContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Arctan}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitArctan(CalculatorParser.ArctanContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Parenthesis}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterParenthesis(CalculatorParser.ParenthesisContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Parenthesis}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitParenthesis(CalculatorParser.ParenthesisContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Abs}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterAbs(CalculatorParser.AbsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Abs}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitAbs(CalculatorParser.AbsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Number}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterNumber(CalculatorParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Number}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitNumber(CalculatorParser.NumberContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Substitution}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterSubstitution(CalculatorParser.SubstitutionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Substitution}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitSubstitution(CalculatorParser.SubstitutionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Sinh}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterSinh(CalculatorParser.SinhContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Sinh}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitSinh(CalculatorParser.SinhContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Round}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterRound(CalculatorParser.RoundContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Round}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitRound(CalculatorParser.RoundContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Trunc}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterTrunc(CalculatorParser.TruncContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Trunc}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitTrunc(CalculatorParser.TruncContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Pi}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterPi(CalculatorParser.PiContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Pi}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitPi(CalculatorParser.PiContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Tanh}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterTanh(CalculatorParser.TanhContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Tanh}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitTanh(CalculatorParser.TanhContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Floor}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterFloor(CalculatorParser.FloorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Floor}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitFloor(CalculatorParser.FloorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Ln}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterLn(CalculatorParser.LnContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Ln}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitLn(CalculatorParser.LnContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Mod}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterMod(CalculatorParser.ModContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Mod}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitMod(CalculatorParser.ModContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Log}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterLog(CalculatorParser.LogContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Log}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitLog(CalculatorParser.LogContext ctx);
	/**
	 * Enter a parse tree produced by the {@code AddSub}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterAddSub(CalculatorParser.AddSubContext ctx);
	/**
	 * Exit a parse tree produced by the {@code AddSub}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitAddSub(CalculatorParser.AddSubContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Cos}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterCos(CalculatorParser.CosContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Cos}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitCos(CalculatorParser.CosContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Deg}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterDeg(CalculatorParser.DegContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Deg}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitDeg(CalculatorParser.DegContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Sqrt}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterSqrt(CalculatorParser.SqrtContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Sqrt}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitSqrt(CalculatorParser.SqrtContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Cot}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterCot(CalculatorParser.CotContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Cot}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitCot(CalculatorParser.CotContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Range}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterRange(CalculatorParser.RangeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Range}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitRange(CalculatorParser.RangeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Whole}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterWhole(CalculatorParser.WholeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Whole}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitWhole(CalculatorParser.WholeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Unary}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterUnary(CalculatorParser.UnaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Unary}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitUnary(CalculatorParser.UnaryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Min}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterMin(CalculatorParser.MinContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Min}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitMin(CalculatorParser.MinContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Rad}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterRad(CalculatorParser.RadContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Rad}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitRad(CalculatorParser.RadContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Mult}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterMult(CalculatorParser.MultContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Mult}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitMult(CalculatorParser.MultContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Sqr}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterSqr(CalculatorParser.SqrContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Sqr}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitSqr(CalculatorParser.SqrContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Sin}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterSin(CalculatorParser.SinContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Sin}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitSin(CalculatorParser.SinContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Eex}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterEex(CalculatorParser.EexContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Eex}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitEex(CalculatorParser.EexContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Pow}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterPow(CalculatorParser.PowContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Pow}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitPow(CalculatorParser.PowContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Ceil}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterCeil(CalculatorParser.CeilContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Ceil}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitCeil(CalculatorParser.CeilContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Exp}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExp(CalculatorParser.ExpContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Exp}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExp(CalculatorParser.ExpContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Roundk}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterRoundk(CalculatorParser.RoundkContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Roundk}
	 * labeled alternative in {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitRoundk(CalculatorParser.RoundkContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#trailingComment}.
	 * @param ctx the parse tree
	 */
	void enterTrailingComment(CalculatorParser.TrailingCommentContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#trailingComment}.
	 * @param ctx the parse tree
	 */
	void exitTrailingComment(CalculatorParser.TrailingCommentContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#compileUnit}.
	 * @param ctx the parse tree
	 */
	void enterCompileUnit(CalculatorParser.CompileUnitContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#compileUnit}.
	 * @param ctx the parse tree
	 */
	void exitCompileUnit(CalculatorParser.CompileUnitContext ctx);
}