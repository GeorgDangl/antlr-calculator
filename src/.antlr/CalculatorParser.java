// Generated from d:/Git/antlr-calculator/src/Calculator.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class CalculatorParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, NUMBER=15, FLOAT=16, 
		DIGIT=17, MOD=18, WHOLE=19, MUL=20, DIV=21, ADD=22, SUB=23, PI=24, EXPONENT=25, 
		NEGEXPONENT=26, EULER=27, SQRT=28, SQR=29, FLOOR=30, CEIL=31, ABS=32, 
		ROUNDK=33, ROUND=34, TRUNC=35, SIN=36, COS=37, TAN=38, COT=39, SINH=40, 
		COSH=41, TANH=42, ARCSIN=43, ARCCOS=44, ARCTAN=45, ARCTAN2=46, ARCCOT=47, 
		EXP=48, LN=49, EEX=50, LOG=51, RAD=52, DEG=53, MIN=54, MAX=55, WS=56, 
		COM=57, SUBSTITUTION=58, SEMICOLON=59, INVALID=60;
	public static final int
		RULE_calculator = 0, RULE_expression = 1, RULE_trailingComment = 2, RULE_compileUnit = 3;
	private static String[] makeRuleNames() {
		return new String[] {
			"calculator", "expression", "trailingComment", "compileUnit"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", "'('", "')'", "'^'", "'**'", "'%'", "'~'", "'//'", "'['", 
			"']'", "'{'", "'}'", "'()'", "'..'", null, null, null, null, null, "'*'", 
			"'/'", "'+'", "'-'", null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, "NUMBER", "FLOAT", "DIGIT", "MOD", "WHOLE", "MUL", 
			"DIV", "ADD", "SUB", "PI", "EXPONENT", "NEGEXPONENT", "EULER", "SQRT", 
			"SQR", "FLOOR", "CEIL", "ABS", "ROUNDK", "ROUND", "TRUNC", "SIN", "COS", 
			"TAN", "COT", "SINH", "COSH", "TANH", "ARCSIN", "ARCCOS", "ARCTAN", "ARCTAN2", 
			"ARCCOT", "EXP", "LN", "EEX", "LOG", "RAD", "DEG", "MIN", "MAX", "WS", 
			"COM", "SUBSTITUTION", "SEMICOLON", "INVALID"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Calculator.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CalculatorParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CalculatorContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public CompileUnitContext compileUnit() {
			return getRuleContext(CompileUnitContext.class,0);
		}
		public TrailingCommentContext trailingComment() {
			return getRuleContext(TrailingCommentContext.class,0);
		}
		public CalculatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculator; }
	}

	public final CalculatorContext calculator() throws RecognitionException {
		CalculatorContext _localctx = new CalculatorContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_calculator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(8);
			expression(0);
			setState(10);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0) {
				{
				setState(9);
				match(T__0);
				}
			}

			setState(13);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMICOLON) {
				{
				setState(12);
				trailingComment();
				}
			}

			setState(15);
			compileUnit();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionContext extends ParserRuleContext {
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	 
		public ExpressionContext() { }
		public void copyFrom(ExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TanContext extends ExpressionContext {
		public TerminalNode TAN() { return getToken(CalculatorParser.TAN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TanContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CoshContext extends ExpressionContext {
		public TerminalNode COSH() { return getToken(CalculatorParser.COSH, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public CoshContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SqRootContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public SqRootContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NegExponentContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode NEGEXPONENT() { return getToken(CalculatorParser.NEGEXPONENT, 0); }
		public NegExponentContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExponentContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode EXPONENT() { return getToken(CalculatorParser.EXPONENT, 0); }
		public ExponentContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class Arctan2Context extends ExpressionContext {
		public TerminalNode ARCTAN2() { return getToken(CalculatorParser.ARCTAN2, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode SEMICOLON() { return getToken(CalculatorParser.SEMICOLON, 0); }
		public Arctan2Context(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MaxContext extends ExpressionContext {
		public ExpressionContext expression;
		public List<ExpressionContext> expr = new ArrayList<ExpressionContext>();
		public TerminalNode MAX() { return getToken(CalculatorParser.MAX, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> SEMICOLON() { return getTokens(CalculatorParser.SEMICOLON); }
		public TerminalNode SEMICOLON(int i) {
			return getToken(CalculatorParser.SEMICOLON, i);
		}
		public MaxContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MulDivContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode MUL() { return getToken(CalculatorParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(CalculatorParser.DIV, 0); }
		public MulDivContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ArcsinContext extends ExpressionContext {
		public TerminalNode ARCSIN() { return getToken(CalculatorParser.ARCSIN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ArcsinContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class UnaryPlusContext extends ExpressionContext {
		public TerminalNode ADD() { return getToken(CalculatorParser.ADD, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public UnaryPlusContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ArccotContext extends ExpressionContext {
		public TerminalNode ARCCOT() { return getToken(CalculatorParser.ARCCOT, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ArccotContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ArccosContext extends ExpressionContext {
		public TerminalNode ARCCOS() { return getToken(CalculatorParser.ARCCOS, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ArccosContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EulerContext extends ExpressionContext {
		public TerminalNode EULER() { return getToken(CalculatorParser.EULER, 0); }
		public EulerContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ArctanContext extends ExpressionContext {
		public TerminalNode ARCTAN() { return getToken(CalculatorParser.ARCTAN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ArctanContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParenthesisContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ParenthesisContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AbsContext extends ExpressionContext {
		public TerminalNode ABS() { return getToken(CalculatorParser.ABS, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AbsContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NumberContext extends ExpressionContext {
		public TerminalNode NUMBER() { return getToken(CalculatorParser.NUMBER, 0); }
		public NumberContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SubstitutionContext extends ExpressionContext {
		public TerminalNode SUBSTITUTION() { return getToken(CalculatorParser.SUBSTITUTION, 0); }
		public SubstitutionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SinhContext extends ExpressionContext {
		public TerminalNode SINH() { return getToken(CalculatorParser.SINH, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public SinhContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class RoundContext extends ExpressionContext {
		public TerminalNode ROUND() { return getToken(CalculatorParser.ROUND, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public RoundContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TruncContext extends ExpressionContext {
		public TerminalNode TRUNC() { return getToken(CalculatorParser.TRUNC, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TruncContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PiContext extends ExpressionContext {
		public TerminalNode PI() { return getToken(CalculatorParser.PI, 0); }
		public PiContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TanhContext extends ExpressionContext {
		public TerminalNode TANH() { return getToken(CalculatorParser.TANH, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TanhContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FloorContext extends ExpressionContext {
		public TerminalNode FLOOR() { return getToken(CalculatorParser.FLOOR, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public FloorContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class LnContext extends ExpressionContext {
		public TerminalNode LN() { return getToken(CalculatorParser.LN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public LnContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ModContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode MOD() { return getToken(CalculatorParser.MOD, 0); }
		public ModContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class LogContext extends ExpressionContext {
		public TerminalNode LOG() { return getToken(CalculatorParser.LOG, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public LogContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AddSubContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode ADD() { return getToken(CalculatorParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(CalculatorParser.SUB, 0); }
		public AddSubContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CosContext extends ExpressionContext {
		public TerminalNode COS() { return getToken(CalculatorParser.COS, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public CosContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DegContext extends ExpressionContext {
		public TerminalNode DEG() { return getToken(CalculatorParser.DEG, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public DegContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SqrtContext extends ExpressionContext {
		public TerminalNode SQRT() { return getToken(CalculatorParser.SQRT, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public SqrtContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CotContext extends ExpressionContext {
		public TerminalNode COT() { return getToken(CalculatorParser.COT, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public CotContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class RangeContext extends ExpressionContext {
		public Token start;
		public Token end;
		public List<TerminalNode> SUBSTITUTION() { return getTokens(CalculatorParser.SUBSTITUTION); }
		public TerminalNode SUBSTITUTION(int i) {
			return getToken(CalculatorParser.SUBSTITUTION, i);
		}
		public RangeContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class WholeContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode WHOLE() { return getToken(CalculatorParser.WHOLE, 0); }
		public WholeContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class UnaryContext extends ExpressionContext {
		public TerminalNode SUB() { return getToken(CalculatorParser.SUB, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public UnaryContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MinContext extends ExpressionContext {
		public ExpressionContext expression;
		public List<ExpressionContext> expr = new ArrayList<ExpressionContext>();
		public TerminalNode MIN() { return getToken(CalculatorParser.MIN, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> SEMICOLON() { return getTokens(CalculatorParser.SEMICOLON); }
		public TerminalNode SEMICOLON(int i) {
			return getToken(CalculatorParser.SEMICOLON, i);
		}
		public MinContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class RadContext extends ExpressionContext {
		public TerminalNode RAD() { return getToken(CalculatorParser.RAD, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public RadContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MultContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public MultContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SqrContext extends ExpressionContext {
		public TerminalNode SQR() { return getToken(CalculatorParser.SQR, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public SqrContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SinContext extends ExpressionContext {
		public TerminalNode SIN() { return getToken(CalculatorParser.SIN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public SinContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EexContext extends ExpressionContext {
		public TerminalNode EEX() { return getToken(CalculatorParser.EEX, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public EexContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PowContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public PowContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CeilContext extends ExpressionContext {
		public TerminalNode CEIL() { return getToken(CalculatorParser.CEIL, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public CeilContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExpContext extends ExpressionContext {
		public TerminalNode EXP() { return getToken(CalculatorParser.EXP, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class RoundkContext extends ExpressionContext {
		public TerminalNode ROUNDK() { return getToken(CalculatorParser.ROUNDK, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode SEMICOLON() { return getToken(CalculatorParser.SEMICOLON, 0); }
		public RoundkContext(ExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 2;
		enterRecursionRule(_localctx, 2, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				_localctx = new UnaryContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(18);
				match(SUB);
				setState(19);
				expression(48);
				}
				break;
			case 2:
				{
				_localctx = new UnaryPlusContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(20);
				match(ADD);
				setState(21);
				expression(47);
				}
				break;
			case 3:
				{
				_localctx = new FloorContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(22);
				match(FLOOR);
				setState(23);
				expression(46);
				}
				break;
			case 4:
				{
				_localctx = new CeilContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(24);
				match(CEIL);
				setState(25);
				expression(45);
				}
				break;
			case 5:
				{
				_localctx = new AbsContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(26);
				match(ABS);
				setState(27);
				expression(44);
				}
				break;
			case 6:
				{
				_localctx = new RoundkContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(28);
				match(ROUNDK);
				setState(29);
				match(T__1);
				setState(30);
				expression(0);
				setState(31);
				match(SEMICOLON);
				setState(32);
				expression(0);
				setState(33);
				match(T__2);
				}
				break;
			case 7:
				{
				_localctx = new RoundContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(35);
				match(ROUND);
				setState(36);
				expression(42);
				}
				break;
			case 8:
				{
				_localctx = new TruncContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(37);
				match(TRUNC);
				setState(38);
				expression(41);
				}
				break;
			case 9:
				{
				_localctx = new SinContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(39);
				match(SIN);
				setState(40);
				expression(40);
				}
				break;
			case 10:
				{
				_localctx = new CosContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(41);
				match(COS);
				setState(42);
				expression(39);
				}
				break;
			case 11:
				{
				_localctx = new TanContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(43);
				match(TAN);
				setState(44);
				expression(38);
				}
				break;
			case 12:
				{
				_localctx = new CotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(45);
				match(COT);
				setState(46);
				expression(37);
				}
				break;
			case 13:
				{
				_localctx = new SinhContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(47);
				match(SINH);
				setState(48);
				expression(36);
				}
				break;
			case 14:
				{
				_localctx = new CoshContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(49);
				match(COSH);
				setState(50);
				expression(35);
				}
				break;
			case 15:
				{
				_localctx = new TanhContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(51);
				match(TANH);
				setState(52);
				expression(34);
				}
				break;
			case 16:
				{
				_localctx = new ArcsinContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(53);
				match(ARCSIN);
				setState(54);
				expression(33);
				}
				break;
			case 17:
				{
				_localctx = new ArccosContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(55);
				match(ARCCOS);
				setState(56);
				expression(32);
				}
				break;
			case 18:
				{
				_localctx = new ArctanContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(57);
				match(ARCTAN);
				setState(58);
				expression(31);
				}
				break;
			case 19:
				{
				_localctx = new Arctan2Context(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(59);
				match(ARCTAN2);
				setState(60);
				match(T__1);
				setState(61);
				expression(0);
				setState(62);
				match(SEMICOLON);
				setState(63);
				expression(0);
				setState(64);
				match(T__2);
				}
				break;
			case 20:
				{
				_localctx = new ArccotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(66);
				match(ARCCOT);
				setState(67);
				expression(29);
				}
				break;
			case 21:
				{
				_localctx = new ExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(68);
				match(EXP);
				setState(69);
				expression(28);
				}
				break;
			case 22:
				{
				_localctx = new LnContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(70);
				match(LN);
				setState(71);
				expression(27);
				}
				break;
			case 23:
				{
				_localctx = new EexContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(72);
				match(EEX);
				setState(73);
				expression(26);
				}
				break;
			case 24:
				{
				_localctx = new LogContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(74);
				match(LOG);
				setState(75);
				expression(25);
				}
				break;
			case 25:
				{
				_localctx = new RadContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(76);
				match(RAD);
				setState(77);
				expression(24);
				}
				break;
			case 26:
				{
				_localctx = new DegContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(78);
				match(DEG);
				setState(79);
				expression(23);
				}
				break;
			case 27:
				{
				_localctx = new SqrtContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(80);
				match(SQRT);
				setState(81);
				expression(22);
				}
				break;
			case 28:
				{
				_localctx = new SqrContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(82);
				match(SQR);
				setState(83);
				expression(21);
				}
				break;
			case 29:
				{
				_localctx = new ParenthesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(84);
				match(T__1);
				setState(85);
				expression(0);
				setState(86);
				match(T__2);
				}
				break;
			case 30:
				{
				_localctx = new ParenthesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(88);
				match(T__8);
				setState(89);
				expression(0);
				setState(90);
				match(T__9);
				}
				break;
			case 31:
				{
				_localctx = new ParenthesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(92);
				match(T__10);
				setState(93);
				expression(0);
				setState(94);
				match(T__11);
				}
				break;
			case 32:
				{
				_localctx = new MultContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(96);
				match(T__1);
				setState(97);
				expression(0);
				setState(98);
				match(T__2);
				setState(99);
				expression(9);
				}
				break;
			case 33:
				{
				_localctx = new MinContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(101);
				match(MIN);
				setState(102);
				match(T__1);
				setState(103);
				((MinContext)_localctx).expression = expression(0);
				((MinContext)_localctx).expr.add(((MinContext)_localctx).expression);
				setState(108);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==SEMICOLON) {
					{
					{
					setState(104);
					match(SEMICOLON);
					setState(105);
					((MinContext)_localctx).expression = expression(0);
					((MinContext)_localctx).expr.add(((MinContext)_localctx).expression);
					}
					}
					setState(110);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(111);
				match(T__2);
				}
				break;
			case 34:
				{
				_localctx = new MaxContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(113);
				match(MAX);
				setState(114);
				match(T__1);
				setState(115);
				((MaxContext)_localctx).expression = expression(0);
				((MaxContext)_localctx).expr.add(((MaxContext)_localctx).expression);
				setState(120);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==SEMICOLON) {
					{
					{
					setState(116);
					match(SEMICOLON);
					setState(117);
					((MaxContext)_localctx).expression = expression(0);
					((MaxContext)_localctx).expr.add(((MaxContext)_localctx).expression);
					}
					}
					setState(122);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(123);
				match(T__2);
				}
				break;
			case 35:
				{
				_localctx = new NumberContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(125);
				match(NUMBER);
				}
				break;
			case 36:
				{
				_localctx = new PiContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(126);
				match(PI);
				setState(128);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
				case 1:
					{
					setState(127);
					match(T__12);
					}
					break;
				}
				}
				break;
			case 37:
				{
				_localctx = new EulerContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(130);
				match(EULER);
				}
				break;
			case 38:
				{
				_localctx = new RangeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(131);
				((RangeContext)_localctx).start = match(SUBSTITUTION);
				setState(132);
				match(T__13);
				setState(133);
				((RangeContext)_localctx).end = match(SUBSTITUTION);
				}
				break;
			case 39:
				{
				_localctx = new SubstitutionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(134);
				match(SUBSTITUTION);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(168);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(166);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
					case 1:
						{
						_localctx = new ExponentContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(137);
						if (!(precpred(_ctx, 20))) throw new FailedPredicateException(this, "precpred(_ctx, 20)");
						setState(138);
						match(EXPONENT);
						setState(139);
						expression(21);
						}
						break;
					case 2:
						{
						_localctx = new NegExponentContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(140);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						setState(141);
						match(NEGEXPONENT);
						setState(142);
						expression(20);
						}
						break;
					case 3:
						{
						_localctx = new PowContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(143);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(144);
						((PowContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==T__3 || _la==T__4) ) {
							((PowContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(145);
						expression(19);
						}
						break;
					case 4:
						{
						_localctx = new ModContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(146);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(147);
						_la = _input.LA(1);
						if ( !(_la==T__5 || _la==MOD) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(148);
						expression(18);
						}
						break;
					case 5:
						{
						_localctx = new WholeContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(149);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(150);
						match(WHOLE);
						setState(151);
						expression(17);
						}
						break;
					case 6:
						{
						_localctx = new SqRootContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(152);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(153);
						((SqRootContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==T__6 || _la==T__7) ) {
							((SqRootContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(154);
						expression(16);
						}
						break;
					case 7:
						{
						_localctx = new MulDivContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(155);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(156);
						((MulDivContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==MUL || _la==DIV) ) {
							((MulDivContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(157);
						expression(15);
						}
						break;
					case 8:
						{
						_localctx = new AddSubContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(158);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(159);
						((AddSubContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==ADD || _la==SUB) ) {
							((AddSubContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(160);
						expression(7);
						}
						break;
					case 9:
						{
						_localctx = new MultContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(161);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(162);
						match(T__1);
						setState(163);
						expression(0);
						setState(164);
						match(T__2);
						}
						break;
					}
					} 
				}
				setState(170);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TrailingCommentContext extends ParserRuleContext {
		public TerminalNode SEMICOLON() { return getToken(CalculatorParser.SEMICOLON, 0); }
		public TrailingCommentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_trailingComment; }
	}

	public final TrailingCommentContext trailingComment() throws RecognitionException {
		TrailingCommentContext _localctx = new TrailingCommentContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_trailingComment);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(171);
			match(SEMICOLON);
			setState(175);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(172);
					matchWildcard();
					}
					} 
				}
				setState(177);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CompileUnitContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(CalculatorParser.EOF, 0); }
		public CompileUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compileUnit; }
	}

	public final CompileUnitContext compileUnit() throws RecognitionException {
		CompileUnitContext _localctx = new CompileUnitContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_compileUnit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(178);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 1:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 20);
		case 1:
			return precpred(_ctx, 19);
		case 2:
			return precpred(_ctx, 18);
		case 3:
			return precpred(_ctx, 17);
		case 4:
			return precpred(_ctx, 16);
		case 5:
			return precpred(_ctx, 15);
		case 6:
			return precpred(_ctx, 14);
		case 7:
			return precpred(_ctx, 6);
		case 8:
			return precpred(_ctx, 10);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001<\u00b5\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0001\u0000\u0001\u0000\u0003"+
		"\u0000\u000b\b\u0000\u0001\u0000\u0003\u0000\u000e\b\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0005\u0001k\b\u0001\n\u0001\f\u0001n\t\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0005\u0001"+
		"w\b\u0001\n\u0001\f\u0001z\t\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0003\u0001\u0081\b\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001\u0088\b\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0005\u0001\u00a7\b\u0001"+
		"\n\u0001\f\u0001\u00aa\t\u0001\u0001\u0002\u0001\u0002\u0005\u0002\u00ae"+
		"\b\u0002\n\u0002\f\u0002\u00b1\t\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u00af\u0001\u0002\u0004\u0000\u0002\u0004\u0006\u0000\u0005\u0001"+
		"\u0000\u0004\u0005\u0002\u0000\u0006\u0006\u0012\u0012\u0001\u0000\u0007"+
		"\b\u0001\u0000\u0014\u0015\u0001\u0000\u0016\u0017\u00e5\u0000\b\u0001"+
		"\u0000\u0000\u0000\u0002\u0087\u0001\u0000\u0000\u0000\u0004\u00ab\u0001"+
		"\u0000\u0000\u0000\u0006\u00b2\u0001\u0000\u0000\u0000\b\n\u0003\u0002"+
		"\u0001\u0000\t\u000b\u0005\u0001\u0000\u0000\n\t\u0001\u0000\u0000\u0000"+
		"\n\u000b\u0001\u0000\u0000\u0000\u000b\r\u0001\u0000\u0000\u0000\f\u000e"+
		"\u0003\u0004\u0002\u0000\r\f\u0001\u0000\u0000\u0000\r\u000e\u0001\u0000"+
		"\u0000\u0000\u000e\u000f\u0001\u0000\u0000\u0000\u000f\u0010\u0003\u0006"+
		"\u0003\u0000\u0010\u0001\u0001\u0000\u0000\u0000\u0011\u0012\u0006\u0001"+
		"\uffff\uffff\u0000\u0012\u0013\u0005\u0017\u0000\u0000\u0013\u0088\u0003"+
		"\u0002\u00010\u0014\u0015\u0005\u0016\u0000\u0000\u0015\u0088\u0003\u0002"+
		"\u0001/\u0016\u0017\u0005\u001e\u0000\u0000\u0017\u0088\u0003\u0002\u0001"+
		".\u0018\u0019\u0005\u001f\u0000\u0000\u0019\u0088\u0003\u0002\u0001-\u001a"+
		"\u001b\u0005 \u0000\u0000\u001b\u0088\u0003\u0002\u0001,\u001c\u001d\u0005"+
		"!\u0000\u0000\u001d\u001e\u0005\u0002\u0000\u0000\u001e\u001f\u0003\u0002"+
		"\u0001\u0000\u001f \u0005;\u0000\u0000 !\u0003\u0002\u0001\u0000!\"\u0005"+
		"\u0003\u0000\u0000\"\u0088\u0001\u0000\u0000\u0000#$\u0005\"\u0000\u0000"+
		"$\u0088\u0003\u0002\u0001*%&\u0005#\u0000\u0000&\u0088\u0003\u0002\u0001"+
		")\'(\u0005$\u0000\u0000(\u0088\u0003\u0002\u0001()*\u0005%\u0000\u0000"+
		"*\u0088\u0003\u0002\u0001\'+,\u0005&\u0000\u0000,\u0088\u0003\u0002\u0001"+
		"&-.\u0005\'\u0000\u0000.\u0088\u0003\u0002\u0001%/0\u0005(\u0000\u0000"+
		"0\u0088\u0003\u0002\u0001$12\u0005)\u0000\u00002\u0088\u0003\u0002\u0001"+
		"#34\u0005*\u0000\u00004\u0088\u0003\u0002\u0001\"56\u0005+\u0000\u0000"+
		"6\u0088\u0003\u0002\u0001!78\u0005,\u0000\u00008\u0088\u0003\u0002\u0001"+
		" 9:\u0005-\u0000\u0000:\u0088\u0003\u0002\u0001\u001f;<\u0005.\u0000\u0000"+
		"<=\u0005\u0002\u0000\u0000=>\u0003\u0002\u0001\u0000>?\u0005;\u0000\u0000"+
		"?@\u0003\u0002\u0001\u0000@A\u0005\u0003\u0000\u0000A\u0088\u0001\u0000"+
		"\u0000\u0000BC\u0005/\u0000\u0000C\u0088\u0003\u0002\u0001\u001dDE\u0005"+
		"0\u0000\u0000E\u0088\u0003\u0002\u0001\u001cFG\u00051\u0000\u0000G\u0088"+
		"\u0003\u0002\u0001\u001bHI\u00052\u0000\u0000I\u0088\u0003\u0002\u0001"+
		"\u001aJK\u00053\u0000\u0000K\u0088\u0003\u0002\u0001\u0019LM\u00054\u0000"+
		"\u0000M\u0088\u0003\u0002\u0001\u0018NO\u00055\u0000\u0000O\u0088\u0003"+
		"\u0002\u0001\u0017PQ\u0005\u001c\u0000\u0000Q\u0088\u0003\u0002\u0001"+
		"\u0016RS\u0005\u001d\u0000\u0000S\u0088\u0003\u0002\u0001\u0015TU\u0005"+
		"\u0002\u0000\u0000UV\u0003\u0002\u0001\u0000VW\u0005\u0003\u0000\u0000"+
		"W\u0088\u0001\u0000\u0000\u0000XY\u0005\t\u0000\u0000YZ\u0003\u0002\u0001"+
		"\u0000Z[\u0005\n\u0000\u0000[\u0088\u0001\u0000\u0000\u0000\\]\u0005\u000b"+
		"\u0000\u0000]^\u0003\u0002\u0001\u0000^_\u0005\f\u0000\u0000_\u0088\u0001"+
		"\u0000\u0000\u0000`a\u0005\u0002\u0000\u0000ab\u0003\u0002\u0001\u0000"+
		"bc\u0005\u0003\u0000\u0000cd\u0003\u0002\u0001\td\u0088\u0001\u0000\u0000"+
		"\u0000ef\u00056\u0000\u0000fg\u0005\u0002\u0000\u0000gl\u0003\u0002\u0001"+
		"\u0000hi\u0005;\u0000\u0000ik\u0003\u0002\u0001\u0000jh\u0001\u0000\u0000"+
		"\u0000kn\u0001\u0000\u0000\u0000lj\u0001\u0000\u0000\u0000lm\u0001\u0000"+
		"\u0000\u0000mo\u0001\u0000\u0000\u0000nl\u0001\u0000\u0000\u0000op\u0005"+
		"\u0003\u0000\u0000p\u0088\u0001\u0000\u0000\u0000qr\u00057\u0000\u0000"+
		"rs\u0005\u0002\u0000\u0000sx\u0003\u0002\u0001\u0000tu\u0005;\u0000\u0000"+
		"uw\u0003\u0002\u0001\u0000vt\u0001\u0000\u0000\u0000wz\u0001\u0000\u0000"+
		"\u0000xv\u0001\u0000\u0000\u0000xy\u0001\u0000\u0000\u0000y{\u0001\u0000"+
		"\u0000\u0000zx\u0001\u0000\u0000\u0000{|\u0005\u0003\u0000\u0000|\u0088"+
		"\u0001\u0000\u0000\u0000}\u0088\u0005\u000f\u0000\u0000~\u0080\u0005\u0018"+
		"\u0000\u0000\u007f\u0081\u0005\r\u0000\u0000\u0080\u007f\u0001\u0000\u0000"+
		"\u0000\u0080\u0081\u0001\u0000\u0000\u0000\u0081\u0088\u0001\u0000\u0000"+
		"\u0000\u0082\u0088\u0005\u001b\u0000\u0000\u0083\u0084\u0005:\u0000\u0000"+
		"\u0084\u0085\u0005\u000e\u0000\u0000\u0085\u0088\u0005:\u0000\u0000\u0086"+
		"\u0088\u0005:\u0000\u0000\u0087\u0011\u0001\u0000\u0000\u0000\u0087\u0014"+
		"\u0001\u0000\u0000\u0000\u0087\u0016\u0001\u0000\u0000\u0000\u0087\u0018"+
		"\u0001\u0000\u0000\u0000\u0087\u001a\u0001\u0000\u0000\u0000\u0087\u001c"+
		"\u0001\u0000\u0000\u0000\u0087#\u0001\u0000\u0000\u0000\u0087%\u0001\u0000"+
		"\u0000\u0000\u0087\'\u0001\u0000\u0000\u0000\u0087)\u0001\u0000\u0000"+
		"\u0000\u0087+\u0001\u0000\u0000\u0000\u0087-\u0001\u0000\u0000\u0000\u0087"+
		"/\u0001\u0000\u0000\u0000\u00871\u0001\u0000\u0000\u0000\u00873\u0001"+
		"\u0000\u0000\u0000\u00875\u0001\u0000\u0000\u0000\u00877\u0001\u0000\u0000"+
		"\u0000\u00879\u0001\u0000\u0000\u0000\u0087;\u0001\u0000\u0000\u0000\u0087"+
		"B\u0001\u0000\u0000\u0000\u0087D\u0001\u0000\u0000\u0000\u0087F\u0001"+
		"\u0000\u0000\u0000\u0087H\u0001\u0000\u0000\u0000\u0087J\u0001\u0000\u0000"+
		"\u0000\u0087L\u0001\u0000\u0000\u0000\u0087N\u0001\u0000\u0000\u0000\u0087"+
		"P\u0001\u0000\u0000\u0000\u0087R\u0001\u0000\u0000\u0000\u0087T\u0001"+
		"\u0000\u0000\u0000\u0087X\u0001\u0000\u0000\u0000\u0087\\\u0001\u0000"+
		"\u0000\u0000\u0087`\u0001\u0000\u0000\u0000\u0087e\u0001\u0000\u0000\u0000"+
		"\u0087q\u0001\u0000\u0000\u0000\u0087}\u0001\u0000\u0000\u0000\u0087~"+
		"\u0001\u0000\u0000\u0000\u0087\u0082\u0001\u0000\u0000\u0000\u0087\u0083"+
		"\u0001\u0000\u0000\u0000\u0087\u0086\u0001\u0000\u0000\u0000\u0088\u00a8"+
		"\u0001\u0000\u0000\u0000\u0089\u008a\n\u0014\u0000\u0000\u008a\u008b\u0005"+
		"\u0019\u0000\u0000\u008b\u00a7\u0003\u0002\u0001\u0015\u008c\u008d\n\u0013"+
		"\u0000\u0000\u008d\u008e\u0005\u001a\u0000\u0000\u008e\u00a7\u0003\u0002"+
		"\u0001\u0014\u008f\u0090\n\u0012\u0000\u0000\u0090\u0091\u0007\u0000\u0000"+
		"\u0000\u0091\u00a7\u0003\u0002\u0001\u0013\u0092\u0093\n\u0011\u0000\u0000"+
		"\u0093\u0094\u0007\u0001\u0000\u0000\u0094\u00a7\u0003\u0002\u0001\u0012"+
		"\u0095\u0096\n\u0010\u0000\u0000\u0096\u0097\u0005\u0013\u0000\u0000\u0097"+
		"\u00a7\u0003\u0002\u0001\u0011\u0098\u0099\n\u000f\u0000\u0000\u0099\u009a"+
		"\u0007\u0002\u0000\u0000\u009a\u00a7\u0003\u0002\u0001\u0010\u009b\u009c"+
		"\n\u000e\u0000\u0000\u009c\u009d\u0007\u0003\u0000\u0000\u009d\u00a7\u0003"+
		"\u0002\u0001\u000f\u009e\u009f\n\u0006\u0000\u0000\u009f\u00a0\u0007\u0004"+
		"\u0000\u0000\u00a0\u00a7\u0003\u0002\u0001\u0007\u00a1\u00a2\n\n\u0000"+
		"\u0000\u00a2\u00a3\u0005\u0002\u0000\u0000\u00a3\u00a4\u0003\u0002\u0001"+
		"\u0000\u00a4\u00a5\u0005\u0003\u0000\u0000\u00a5\u00a7\u0001\u0000\u0000"+
		"\u0000\u00a6\u0089\u0001\u0000\u0000\u0000\u00a6\u008c\u0001\u0000\u0000"+
		"\u0000\u00a6\u008f\u0001\u0000\u0000\u0000\u00a6\u0092\u0001\u0000\u0000"+
		"\u0000\u00a6\u0095\u0001\u0000\u0000\u0000\u00a6\u0098\u0001\u0000\u0000"+
		"\u0000\u00a6\u009b\u0001\u0000\u0000\u0000\u00a6\u009e\u0001\u0000\u0000"+
		"\u0000\u00a6\u00a1\u0001\u0000\u0000\u0000\u00a7\u00aa\u0001\u0000\u0000"+
		"\u0000\u00a8\u00a6\u0001\u0000\u0000\u0000\u00a8\u00a9\u0001\u0000\u0000"+
		"\u0000\u00a9\u0003\u0001\u0000\u0000\u0000\u00aa\u00a8\u0001\u0000\u0000"+
		"\u0000\u00ab\u00af\u0005;\u0000\u0000\u00ac\u00ae\t\u0000\u0000\u0000"+
		"\u00ad\u00ac\u0001\u0000\u0000\u0000\u00ae\u00b1\u0001\u0000\u0000\u0000"+
		"\u00af\u00b0\u0001\u0000\u0000\u0000\u00af\u00ad\u0001\u0000\u0000\u0000"+
		"\u00b0\u0005\u0001\u0000\u0000\u0000\u00b1\u00af\u0001\u0000\u0000\u0000"+
		"\u00b2\u00b3\u0005\u0000\u0000\u0001\u00b3\u0007\u0001\u0000\u0000\u0000"+
		"\t\n\rlx\u0080\u0087\u00a6\u00a8\u00af";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}