// Generated from ./src/Calculator.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CalculatorListener } from "./CalculatorListener";
import { CalculatorVisitor } from "./CalculatorVisitor";


export class CalculatorParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly NUMBER = 10;
	public static readonly FLOAT = 11;
	public static readonly DIGIT = 12;
	public static readonly MOD = 13;
	public static readonly WHOLE = 14;
	public static readonly MUL = 15;
	public static readonly DIV = 16;
	public static readonly ADD = 17;
	public static readonly SUB = 18;
	public static readonly PI = 19;
	public static readonly EXPONENT = 20;
	public static readonly NEGEXPONENT = 21;
	public static readonly EULER = 22;
	public static readonly SQRT = 23;
	public static readonly SQR = 24;
	public static readonly FLOOR = 25;
	public static readonly CEIL = 26;
	public static readonly ABS = 27;
	public static readonly ROUNDK = 28;
	public static readonly ROUND = 29;
	public static readonly TRUNC = 30;
	public static readonly SIN = 31;
	public static readonly COS = 32;
	public static readonly TAN = 33;
	public static readonly COT = 34;
	public static readonly SINH = 35;
	public static readonly COSH = 36;
	public static readonly TANH = 37;
	public static readonly ARCSIN = 38;
	public static readonly ARCCOS = 39;
	public static readonly ARCTAN = 40;
	public static readonly ARCTAN2 = 41;
	public static readonly ARCCOT = 42;
	public static readonly EXP = 43;
	public static readonly LN = 44;
	public static readonly EEX = 45;
	public static readonly LOG = 46;
	public static readonly RAD = 47;
	public static readonly DEG = 48;
	public static readonly MIN = 49;
	public static readonly MAX = 50;
	public static readonly WS = 51;
	public static readonly COM = 52;
	public static readonly SUBSTITUTION = 53;
	public static readonly SEMICOLON = 54;
	public static readonly INVALID = 55;
	public static readonly RULE_calculator = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_trailingComment = 2;
	public static readonly RULE_compileUnit = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"calculator", "expression", "trailingComment", "compileUnit",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'('", "')'", "'^'", "'**'", "'%'", "'~'", "'//'", "'()'", 
		undefined, undefined, undefined, undefined, undefined, "'*'", "'/'", "'+'", 
		"'-'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "NUMBER", "FLOAT", "DIGIT", "MOD", "WHOLE", 
		"MUL", "DIV", "ADD", "SUB", "PI", "EXPONENT", "NEGEXPONENT", "EULER", 
		"SQRT", "SQR", "FLOOR", "CEIL", "ABS", "ROUNDK", "ROUND", "TRUNC", "SIN", 
		"COS", "TAN", "COT", "SINH", "COSH", "TANH", "ARCSIN", "ARCCOS", "ARCTAN", 
		"ARCTAN2", "ARCCOT", "EXP", "LN", "EEX", "LOG", "RAD", "DEG", "MIN", "MAX", 
		"WS", "COM", "SUBSTITUTION", "SEMICOLON", "INVALID",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CalculatorParser._LITERAL_NAMES, CalculatorParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CalculatorParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Calculator.g4"; }

	// @Override
	public get ruleNames(): string[] { return CalculatorParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CalculatorParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CalculatorParser._ATN, this);
	}
	// @RuleVersion(0)
	public calculator(): CalculatorContext {
		let _localctx: CalculatorContext = new CalculatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CalculatorParser.RULE_calculator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 8;
			this.expression(0);
			this.state = 10;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CalculatorParser.T__0) {
				{
				this.state = 9;
				this.match(CalculatorParser.T__0);
				}
			}

			this.state = 13;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CalculatorParser.SEMICOLON) {
				{
				this.state = 12;
				this.trailingComment();
				}
			}

			this.state = 15;
			this.compileUnit();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, CalculatorParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				_localctx = new UnaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 18;
				this.match(CalculatorParser.SUB);
				this.state = 19;
				this.expression(45);
				}
				break;

			case 2:
				{
				_localctx = new UnaryPlusContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 20;
				this.match(CalculatorParser.ADD);
				this.state = 21;
				this.expression(44);
				}
				break;

			case 3:
				{
				_localctx = new FloorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 22;
				this.match(CalculatorParser.FLOOR);
				this.state = 23;
				this.expression(43);
				}
				break;

			case 4:
				{
				_localctx = new CeilContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 24;
				this.match(CalculatorParser.CEIL);
				this.state = 25;
				this.expression(42);
				}
				break;

			case 5:
				{
				_localctx = new AbsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 26;
				this.match(CalculatorParser.ABS);
				this.state = 27;
				this.expression(41);
				}
				break;

			case 6:
				{
				_localctx = new RoundkContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 28;
				this.match(CalculatorParser.ROUNDK);
				this.state = 29;
				this.match(CalculatorParser.T__1);
				this.state = 30;
				this.expression(0);
				this.state = 31;
				this.match(CalculatorParser.SEMICOLON);
				this.state = 32;
				this.expression(0);
				this.state = 33;
				this.match(CalculatorParser.T__2);
				}
				break;

			case 7:
				{
				_localctx = new RoundContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 35;
				this.match(CalculatorParser.ROUND);
				this.state = 36;
				this.expression(39);
				}
				break;

			case 8:
				{
				_localctx = new TruncContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 37;
				this.match(CalculatorParser.TRUNC);
				this.state = 38;
				this.expression(38);
				}
				break;

			case 9:
				{
				_localctx = new SinContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 39;
				this.match(CalculatorParser.SIN);
				this.state = 40;
				this.expression(37);
				}
				break;

			case 10:
				{
				_localctx = new CosContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 41;
				this.match(CalculatorParser.COS);
				this.state = 42;
				this.expression(36);
				}
				break;

			case 11:
				{
				_localctx = new TanContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 43;
				this.match(CalculatorParser.TAN);
				this.state = 44;
				this.expression(35);
				}
				break;

			case 12:
				{
				_localctx = new CotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 45;
				this.match(CalculatorParser.COT);
				this.state = 46;
				this.expression(34);
				}
				break;

			case 13:
				{
				_localctx = new SinhContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 47;
				this.match(CalculatorParser.SINH);
				this.state = 48;
				this.expression(33);
				}
				break;

			case 14:
				{
				_localctx = new CoshContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 49;
				this.match(CalculatorParser.COSH);
				this.state = 50;
				this.expression(32);
				}
				break;

			case 15:
				{
				_localctx = new TanhContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 51;
				this.match(CalculatorParser.TANH);
				this.state = 52;
				this.expression(31);
				}
				break;

			case 16:
				{
				_localctx = new ArcsinContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 53;
				this.match(CalculatorParser.ARCSIN);
				this.state = 54;
				this.expression(30);
				}
				break;

			case 17:
				{
				_localctx = new ArccosContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 55;
				this.match(CalculatorParser.ARCCOS);
				this.state = 56;
				this.expression(29);
				}
				break;

			case 18:
				{
				_localctx = new ArctanContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 57;
				this.match(CalculatorParser.ARCTAN);
				this.state = 58;
				this.expression(28);
				}
				break;

			case 19:
				{
				_localctx = new Arctan2Context(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 59;
				this.match(CalculatorParser.ARCTAN2);
				this.state = 60;
				this.match(CalculatorParser.T__1);
				this.state = 61;
				this.expression(0);
				this.state = 62;
				this.match(CalculatorParser.SEMICOLON);
				this.state = 63;
				this.expression(0);
				this.state = 64;
				this.match(CalculatorParser.T__2);
				}
				break;

			case 20:
				{
				_localctx = new ArccotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 66;
				this.match(CalculatorParser.ARCCOT);
				this.state = 67;
				this.expression(26);
				}
				break;

			case 21:
				{
				_localctx = new ExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 68;
				this.match(CalculatorParser.EXP);
				this.state = 69;
				this.expression(25);
				}
				break;

			case 22:
				{
				_localctx = new LnContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 70;
				this.match(CalculatorParser.LN);
				this.state = 71;
				this.expression(24);
				}
				break;

			case 23:
				{
				_localctx = new EexContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 72;
				this.match(CalculatorParser.EEX);
				this.state = 73;
				this.expression(23);
				}
				break;

			case 24:
				{
				_localctx = new LogContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 74;
				this.match(CalculatorParser.LOG);
				this.state = 75;
				this.expression(22);
				}
				break;

			case 25:
				{
				_localctx = new RadContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 76;
				this.match(CalculatorParser.RAD);
				this.state = 77;
				this.expression(21);
				}
				break;

			case 26:
				{
				_localctx = new DegContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 78;
				this.match(CalculatorParser.DEG);
				this.state = 79;
				this.expression(20);
				}
				break;

			case 27:
				{
				_localctx = new SqrtContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 80;
				this.match(CalculatorParser.SQRT);
				this.state = 81;
				this.expression(19);
				}
				break;

			case 28:
				{
				_localctx = new SqrContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 82;
				this.match(CalculatorParser.SQR);
				this.state = 83;
				this.expression(18);
				}
				break;

			case 29:
				{
				_localctx = new ParenthesisContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 84;
				this.match(CalculatorParser.T__1);
				this.state = 85;
				this.expression(0);
				this.state = 86;
				this.match(CalculatorParser.T__2);
				}
				break;

			case 30:
				{
				_localctx = new MultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 88;
				this.match(CalculatorParser.T__1);
				this.state = 89;
				this.expression(0);
				this.state = 90;
				this.match(CalculatorParser.T__2);
				this.state = 91;
				this.expression(8);
				}
				break;

			case 31:
				{
				_localctx = new MinContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 93;
				this.match(CalculatorParser.MIN);
				this.state = 94;
				this.match(CalculatorParser.T__1);
				this.state = 95;
				(_localctx as MinContext)._expression = this.expression(0);
				(_localctx as MinContext)._expr.push((_localctx as MinContext)._expression);
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CalculatorParser.SEMICOLON) {
					{
					{
					this.state = 96;
					this.match(CalculatorParser.SEMICOLON);
					this.state = 97;
					(_localctx as MinContext)._expression = this.expression(0);
					(_localctx as MinContext)._expr.push((_localctx as MinContext)._expression);
					}
					}
					this.state = 102;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 103;
				this.match(CalculatorParser.T__2);
				}
				break;

			case 32:
				{
				_localctx = new MaxContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 105;
				this.match(CalculatorParser.MAX);
				this.state = 106;
				this.match(CalculatorParser.T__1);
				this.state = 107;
				(_localctx as MaxContext)._expression = this.expression(0);
				(_localctx as MaxContext)._expr.push((_localctx as MaxContext)._expression);
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CalculatorParser.SEMICOLON) {
					{
					{
					this.state = 108;
					this.match(CalculatorParser.SEMICOLON);
					this.state = 109;
					(_localctx as MaxContext)._expression = this.expression(0);
					(_localctx as MaxContext)._expr.push((_localctx as MaxContext)._expression);
					}
					}
					this.state = 114;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 115;
				this.match(CalculatorParser.T__2);
				}
				break;

			case 33:
				{
				_localctx = new NumberContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 117;
				this.match(CalculatorParser.NUMBER);
				}
				break;

			case 34:
				{
				_localctx = new PiContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 118;
				this.match(CalculatorParser.PI);
				this.state = 120;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 119;
					this.match(CalculatorParser.T__8);
					}
					break;
				}
				}
				break;

			case 35:
				{
				_localctx = new EulerContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 122;
				this.match(CalculatorParser.EULER);
				}
				break;

			case 36:
				{
				_localctx = new SubstitutionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 123;
				this.match(CalculatorParser.SUBSTITUTION);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 157;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 155;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						_localctx = new ExponentContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
						this.state = 126;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 127;
						this.match(CalculatorParser.EXPONENT);
						this.state = 128;
						this.expression(18);
						}
						break;

					case 2:
						{
						_localctx = new NegExponentContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
						this.state = 129;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 130;
						this.match(CalculatorParser.NEGEXPONENT);
						this.state = 131;
						this.expression(17);
						}
						break;

					case 3:
						{
						_localctx = new PowContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
						this.state = 132;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 133;
						(_localctx as PowContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CalculatorParser.T__3 || _la === CalculatorParser.T__4)) {
							(_localctx as PowContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 134;
						this.expression(16);
						}
						break;

					case 4:
						{
						_localctx = new ModContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
						this.state = 135;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 136;
						_la = this._input.LA(1);
						if (!(_la === CalculatorParser.T__5 || _la === CalculatorParser.MOD)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 137;
						this.expression(15);
						}
						break;

					case 5:
						{
						_localctx = new WholeContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
						this.state = 138;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 139;
						this.match(CalculatorParser.WHOLE);
						this.state = 140;
						this.expression(14);
						}
						break;

					case 6:
						{
						_localctx = new SqRootContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
						this.state = 141;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 142;
						(_localctx as SqRootContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CalculatorParser.T__6 || _la === CalculatorParser.T__7)) {
							(_localctx as SqRootContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 143;
						this.expression(13);
						}
						break;

					case 7:
						{
						_localctx = new MulDivContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
						this.state = 144;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 145;
						(_localctx as MulDivContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CalculatorParser.MUL || _la === CalculatorParser.DIV)) {
							(_localctx as MulDivContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 146;
						this.expression(12);
						}
						break;

					case 8:
						{
						_localctx = new AddSubContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
						this.state = 147;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 148;
						(_localctx as AddSubContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CalculatorParser.ADD || _la === CalculatorParser.SUB)) {
							(_localctx as AddSubContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 149;
						this.expression(6);
						}
						break;

					case 9:
						{
						_localctx = new MultContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
						this.state = 150;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 151;
						this.match(CalculatorParser.T__1);
						this.state = 152;
						this.expression(0);
						this.state = 153;
						this.match(CalculatorParser.T__2);
						}
						break;
					}
					}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trailingComment(): TrailingCommentContext {
		let _localctx: TrailingCommentContext = new TrailingCommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CalculatorParser.RULE_trailingComment);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.match(CalculatorParser.SEMICOLON);
			this.state = 164;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 161;
					this.matchWildcard();
					}
					}
				}
				this.state = 166;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compileUnit(): CompileUnitContext {
		let _localctx: CompileUnitContext = new CompileUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CalculatorParser.RULE_compileUnit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.match(CalculatorParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 17);

		case 1:
			return this.precpred(this._ctx, 16);

		case 2:
			return this.precpred(this._ctx, 15);

		case 3:
			return this.precpred(this._ctx, 14);

		case 4:
			return this.precpred(this._ctx, 13);

		case 5:
			return this.precpred(this._ctx, 12);

		case 6:
			return this.precpred(this._ctx, 11);

		case 7:
			return this.precpred(this._ctx, 5);

		case 8:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x039\xAC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x05\x02" +
		"\r\n\x02\x03\x02\x05\x02\x10\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03e\n\x03\f" +
		"\x03\x0E\x03h\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x07\x03q\n\x03\f\x03\x0E\x03t\v\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03{\n\x03\x03\x03\x03\x03\x05\x03\x7F\n\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x07\x03\x9E\n\x03\f\x03\x0E\x03\xA1\v\x03\x03\x04\x03\x04\x07\x04" +
		"\xA5\n\x04\f\x04\x0E\x04\xA8\v\x04\x03\x05\x03\x05\x03\x05\x03\xA6\x02" +
		"\x03\x04\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x07\x03\x02\x06\x07\x04" +
		"\x02\b\b\x0F\x0F\x03\x02\t\n\x03\x02\x11\x12\x03\x02\x13\x14\x02\xD9\x02" +
		"\n\x03\x02\x02\x02\x04~\x03\x02\x02\x02\x06\xA2\x03\x02\x02\x02\b\xA9" +
		"\x03\x02\x02\x02\n\f\x05\x04\x03\x02\v\r\x07\x03\x02\x02\f\v\x03\x02\x02" +
		"\x02\f\r\x03\x02\x02\x02\r\x0F\x03\x02\x02\x02\x0E\x10\x05\x06\x04\x02" +
		"\x0F\x0E\x03\x02\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x11\x03\x02\x02\x02" +
		"\x11\x12\x05\b\x05\x02\x12\x03\x03\x02\x02\x02\x13\x14\b\x03\x01\x02\x14" +
		"\x15\x07\x14\x02\x02\x15\x7F\x05\x04\x03/\x16\x17\x07\x13\x02\x02\x17" +
		"\x7F\x05\x04\x03.\x18\x19\x07\x1B\x02\x02\x19\x7F\x05\x04\x03-\x1A\x1B" +
		"\x07\x1C\x02\x02\x1B\x7F\x05\x04\x03,\x1C\x1D\x07\x1D\x02\x02\x1D\x7F" +
		"\x05\x04\x03+\x1E\x1F\x07\x1E\x02\x02\x1F \x07\x04\x02\x02 !\x05\x04\x03" +
		"\x02!\"\x078\x02\x02\"#\x05\x04\x03\x02#$\x07\x05\x02\x02$\x7F\x03\x02" +
		"\x02\x02%&\x07\x1F\x02\x02&\x7F\x05\x04\x03)\'(\x07 \x02\x02(\x7F\x05" +
		"\x04\x03()*\x07!\x02\x02*\x7F\x05\x04\x03\'+,\x07\"\x02\x02,\x7F\x05\x04" +
		"\x03&-.\x07#\x02\x02.\x7F\x05\x04\x03%/0\x07$\x02\x020\x7F\x05\x04\x03" +
		"$12\x07%\x02\x022\x7F\x05\x04\x03#34\x07&\x02\x024\x7F\x05\x04\x03\"5" +
		"6\x07\'\x02\x026\x7F\x05\x04\x03!78\x07(\x02\x028\x7F\x05\x04\x03 9:\x07" +
		")\x02\x02:\x7F\x05\x04\x03\x1F;<\x07*\x02\x02<\x7F\x05\x04\x03\x1E=>\x07" +
		"+\x02\x02>?\x07\x04\x02\x02?@\x05\x04\x03\x02@A\x078\x02\x02AB\x05\x04" +
		"\x03\x02BC\x07\x05\x02\x02C\x7F\x03\x02\x02\x02DE\x07,\x02\x02E\x7F\x05" +
		"\x04\x03\x1CFG\x07-\x02\x02G\x7F\x05\x04\x03\x1BHI\x07.\x02\x02I\x7F\x05" +
		"\x04\x03\x1AJK\x07/\x02\x02K\x7F\x05\x04\x03\x19LM\x070\x02\x02M\x7F\x05" +
		"\x04\x03\x18NO\x071\x02\x02O\x7F\x05\x04\x03\x17PQ\x072\x02\x02Q\x7F\x05" +
		"\x04\x03\x16RS\x07\x19\x02\x02S\x7F\x05\x04\x03\x15TU\x07\x1A\x02\x02" +
		"U\x7F\x05\x04\x03\x14VW\x07\x04\x02\x02WX\x05\x04\x03\x02XY\x07\x05\x02" +
		"\x02Y\x7F\x03\x02\x02\x02Z[\x07\x04\x02\x02[\\\x05\x04\x03\x02\\]\x07" +
		"\x05\x02\x02]^\x05\x04\x03\n^\x7F\x03\x02\x02\x02_`\x073\x02\x02`a\x07" +
		"\x04\x02\x02af\x05\x04\x03\x02bc\x078\x02\x02ce\x05\x04\x03\x02db\x03" +
		"\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02gi\x03" +
		"\x02\x02\x02hf\x03\x02\x02\x02ij\x07\x05\x02\x02j\x7F\x03\x02\x02\x02" +
		"kl\x074\x02\x02lm\x07\x04\x02\x02mr\x05\x04\x03\x02no\x078\x02\x02oq\x05" +
		"\x04\x03\x02pn\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03\x02\x02\x02rs\x03" +
		"\x02\x02\x02su\x03\x02\x02\x02tr\x03\x02\x02\x02uv\x07\x05\x02\x02v\x7F" +
		"\x03\x02\x02\x02w\x7F\x07\f\x02\x02xz\x07\x15\x02\x02y{\x07\v\x02\x02" +
		"zy\x03\x02\x02\x02z{\x03\x02\x02\x02{\x7F\x03\x02\x02\x02|\x7F\x07\x18" +
		"\x02\x02}\x7F\x077\x02\x02~\x13\x03\x02\x02\x02~\x16\x03\x02\x02\x02~" +
		"\x18\x03\x02\x02\x02~\x1A\x03\x02\x02\x02~\x1C\x03\x02\x02\x02~\x1E\x03" +
		"\x02\x02\x02~%\x03\x02\x02\x02~\'\x03\x02\x02\x02~)\x03\x02\x02\x02~+" +
		"\x03\x02\x02\x02~-\x03\x02\x02\x02~/\x03\x02\x02\x02~1\x03\x02\x02\x02" +
		"~3\x03\x02\x02\x02~5\x03\x02\x02\x02~7\x03\x02\x02\x02~9\x03\x02\x02\x02" +
		"~;\x03\x02\x02\x02~=\x03\x02\x02\x02~D\x03\x02\x02\x02~F\x03\x02\x02\x02" +
		"~H\x03\x02\x02\x02~J\x03\x02\x02\x02~L\x03\x02\x02\x02~N\x03\x02\x02\x02" +
		"~P\x03\x02\x02\x02~R\x03\x02\x02\x02~T\x03\x02\x02\x02~V\x03\x02\x02\x02" +
		"~Z\x03\x02\x02\x02~_\x03\x02\x02\x02~k\x03\x02\x02\x02~w\x03\x02\x02\x02" +
		"~x\x03\x02\x02\x02~|\x03\x02\x02\x02~}\x03\x02\x02\x02\x7F\x9F\x03\x02" +
		"\x02\x02\x80\x81\f\x13\x02\x02\x81\x82\x07\x16\x02\x02\x82\x9E\x05\x04" +
		"\x03\x14\x83\x84\f\x12\x02\x02\x84\x85\x07\x17\x02\x02\x85\x9E\x05\x04" +
		"\x03\x13\x86\x87\f\x11\x02\x02\x87\x88\t\x02\x02\x02\x88\x9E\x05\x04\x03" +
		"\x12\x89\x8A\f\x10\x02\x02\x8A\x8B\t\x03\x02\x02\x8B\x9E\x05\x04\x03\x11" +
		"\x8C\x8D\f\x0F\x02\x02\x8D\x8E\x07\x10\x02\x02\x8E\x9E\x05\x04\x03\x10" +
		"\x8F\x90\f\x0E\x02\x02\x90\x91\t\x04\x02\x02\x91\x9E\x05\x04\x03\x0F\x92" +
		"\x93\f\r\x02\x02\x93\x94\t\x05\x02\x02\x94\x9E\x05\x04\x03\x0E\x95\x96" +
		"\f\x07\x02\x02\x96\x97\t\x06\x02\x02\x97\x9E\x05\x04\x03\b\x98\x99\f\v" +
		"\x02\x02\x99\x9A\x07\x04\x02\x02\x9A\x9B\x05\x04\x03\x02\x9B\x9C\x07\x05" +
		"\x02\x02\x9C\x9E\x03\x02\x02\x02\x9D\x80\x03\x02\x02\x02\x9D\x83\x03\x02" +
		"\x02\x02\x9D\x86\x03\x02\x02\x02\x9D\x89\x03\x02\x02\x02\x9D\x8C\x03\x02" +
		"\x02\x02\x9D\x8F\x03\x02\x02\x02\x9D\x92\x03\x02\x02\x02\x9D\x95\x03\x02" +
		"\x02\x02\x9D\x98\x03\x02\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02" +
		"\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\x05\x03\x02\x02\x02\xA1\x9F\x03\x02" +
		"\x02\x02\xA2\xA6\x078\x02\x02\xA3\xA5\v\x02\x02\x02\xA4\xA3\x03\x02\x02" +
		"\x02\xA5\xA8\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA6\xA4\x03\x02\x02" +
		"\x02\xA7\x07\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAA\x07\x02\x02" +
		"\x03\xAA\t\x03\x02\x02\x02\v\f\x0Ffrz~\x9D\x9F\xA6";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalculatorParser.__ATN) {
			CalculatorParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalculatorParser._serializedATN));
		}

		return CalculatorParser.__ATN;
	}

}

export class CalculatorContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public compileUnit(): CompileUnitContext {
		return this.getRuleContext(0, CompileUnitContext);
	}
	public trailingComment(): TrailingCommentContext | undefined {
		return this.tryGetRuleContext(0, TrailingCommentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalculatorParser.RULE_calculator; }
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterCalculator) {
			listener.enterCalculator(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitCalculator) {
			listener.exitCalculator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitCalculator) {
			return visitor.visitCalculator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalculatorParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryContext extends ExpressionContext {
	public SUB(): TerminalNode { return this.getToken(CalculatorParser.SUB, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterUnary) {
			listener.enterUnary(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitUnary) {
			listener.exitUnary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitUnary) {
			return visitor.visitUnary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryPlusContext extends ExpressionContext {
	public ADD(): TerminalNode { return this.getToken(CalculatorParser.ADD, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterUnaryPlus) {
			listener.enterUnaryPlus(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitUnaryPlus) {
			listener.exitUnaryPlus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitUnaryPlus) {
			return visitor.visitUnaryPlus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloorContext extends ExpressionContext {
	public FLOOR(): TerminalNode { return this.getToken(CalculatorParser.FLOOR, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterFloor) {
			listener.enterFloor(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitFloor) {
			listener.exitFloor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitFloor) {
			return visitor.visitFloor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CeilContext extends ExpressionContext {
	public CEIL(): TerminalNode { return this.getToken(CalculatorParser.CEIL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterCeil) {
			listener.enterCeil(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitCeil) {
			listener.exitCeil(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitCeil) {
			return visitor.visitCeil(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AbsContext extends ExpressionContext {
	public ABS(): TerminalNode { return this.getToken(CalculatorParser.ABS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterAbs) {
			listener.enterAbs(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitAbs) {
			listener.exitAbs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitAbs) {
			return visitor.visitAbs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RoundkContext extends ExpressionContext {
	public ROUNDK(): TerminalNode { return this.getToken(CalculatorParser.ROUNDK, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SEMICOLON(): TerminalNode { return this.getToken(CalculatorParser.SEMICOLON, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterRoundk) {
			listener.enterRoundk(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitRoundk) {
			listener.exitRoundk(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitRoundk) {
			return visitor.visitRoundk(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RoundContext extends ExpressionContext {
	public ROUND(): TerminalNode { return this.getToken(CalculatorParser.ROUND, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterRound) {
			listener.enterRound(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitRound) {
			listener.exitRound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitRound) {
			return visitor.visitRound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TruncContext extends ExpressionContext {
	public TRUNC(): TerminalNode { return this.getToken(CalculatorParser.TRUNC, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterTrunc) {
			listener.enterTrunc(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitTrunc) {
			listener.exitTrunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitTrunc) {
			return visitor.visitTrunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SinContext extends ExpressionContext {
	public SIN(): TerminalNode { return this.getToken(CalculatorParser.SIN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterSin) {
			listener.enterSin(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitSin) {
			listener.exitSin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitSin) {
			return visitor.visitSin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CosContext extends ExpressionContext {
	public COS(): TerminalNode { return this.getToken(CalculatorParser.COS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterCos) {
			listener.enterCos(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitCos) {
			listener.exitCos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitCos) {
			return visitor.visitCos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TanContext extends ExpressionContext {
	public TAN(): TerminalNode { return this.getToken(CalculatorParser.TAN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterTan) {
			listener.enterTan(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitTan) {
			listener.exitTan(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitTan) {
			return visitor.visitTan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CotContext extends ExpressionContext {
	public COT(): TerminalNode { return this.getToken(CalculatorParser.COT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterCot) {
			listener.enterCot(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitCot) {
			listener.exitCot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitCot) {
			return visitor.visitCot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SinhContext extends ExpressionContext {
	public SINH(): TerminalNode { return this.getToken(CalculatorParser.SINH, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterSinh) {
			listener.enterSinh(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitSinh) {
			listener.exitSinh(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitSinh) {
			return visitor.visitSinh(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CoshContext extends ExpressionContext {
	public COSH(): TerminalNode { return this.getToken(CalculatorParser.COSH, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterCosh) {
			listener.enterCosh(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitCosh) {
			listener.exitCosh(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitCosh) {
			return visitor.visitCosh(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TanhContext extends ExpressionContext {
	public TANH(): TerminalNode { return this.getToken(CalculatorParser.TANH, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterTanh) {
			listener.enterTanh(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitTanh) {
			listener.exitTanh(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitTanh) {
			return visitor.visitTanh(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArcsinContext extends ExpressionContext {
	public ARCSIN(): TerminalNode { return this.getToken(CalculatorParser.ARCSIN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterArcsin) {
			listener.enterArcsin(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitArcsin) {
			listener.exitArcsin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitArcsin) {
			return visitor.visitArcsin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArccosContext extends ExpressionContext {
	public ARCCOS(): TerminalNode { return this.getToken(CalculatorParser.ARCCOS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterArccos) {
			listener.enterArccos(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitArccos) {
			listener.exitArccos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitArccos) {
			return visitor.visitArccos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArctanContext extends ExpressionContext {
	public ARCTAN(): TerminalNode { return this.getToken(CalculatorParser.ARCTAN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterArctan) {
			listener.enterArctan(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitArctan) {
			listener.exitArctan(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitArctan) {
			return visitor.visitArctan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Arctan2Context extends ExpressionContext {
	public ARCTAN2(): TerminalNode { return this.getToken(CalculatorParser.ARCTAN2, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SEMICOLON(): TerminalNode { return this.getToken(CalculatorParser.SEMICOLON, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterArctan2) {
			listener.enterArctan2(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitArctan2) {
			listener.exitArctan2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitArctan2) {
			return visitor.visitArctan2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArccotContext extends ExpressionContext {
	public ARCCOT(): TerminalNode { return this.getToken(CalculatorParser.ARCCOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterArccot) {
			listener.enterArccot(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitArccot) {
			listener.exitArccot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitArccot) {
			return visitor.visitArccot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpContext extends ExpressionContext {
	public EXP(): TerminalNode { return this.getToken(CalculatorParser.EXP, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterExp) {
			listener.enterExp(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitExp) {
			listener.exitExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitExp) {
			return visitor.visitExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LnContext extends ExpressionContext {
	public LN(): TerminalNode { return this.getToken(CalculatorParser.LN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterLn) {
			listener.enterLn(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitLn) {
			listener.exitLn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitLn) {
			return visitor.visitLn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EexContext extends ExpressionContext {
	public EEX(): TerminalNode { return this.getToken(CalculatorParser.EEX, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterEex) {
			listener.enterEex(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitEex) {
			listener.exitEex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitEex) {
			return visitor.visitEex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogContext extends ExpressionContext {
	public LOG(): TerminalNode { return this.getToken(CalculatorParser.LOG, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterLog) {
			listener.enterLog(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitLog) {
			listener.exitLog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitLog) {
			return visitor.visitLog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RadContext extends ExpressionContext {
	public RAD(): TerminalNode { return this.getToken(CalculatorParser.RAD, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterRad) {
			listener.enterRad(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitRad) {
			listener.exitRad(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitRad) {
			return visitor.visitRad(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DegContext extends ExpressionContext {
	public DEG(): TerminalNode { return this.getToken(CalculatorParser.DEG, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterDeg) {
			listener.enterDeg(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitDeg) {
			listener.exitDeg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitDeg) {
			return visitor.visitDeg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SqrtContext extends ExpressionContext {
	public SQRT(): TerminalNode { return this.getToken(CalculatorParser.SQRT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterSqrt) {
			listener.enterSqrt(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitSqrt) {
			listener.exitSqrt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitSqrt) {
			return visitor.visitSqrt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SqrContext extends ExpressionContext {
	public SQR(): TerminalNode { return this.getToken(CalculatorParser.SQR, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterSqr) {
			listener.enterSqr(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitSqr) {
			listener.exitSqr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitSqr) {
			return visitor.visitSqr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExponentContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EXPONENT(): TerminalNode { return this.getToken(CalculatorParser.EXPONENT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterExponent) {
			listener.enterExponent(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitExponent) {
			listener.exitExponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitExponent) {
			return visitor.visitExponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NegExponentContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public NEGEXPONENT(): TerminalNode { return this.getToken(CalculatorParser.NEGEXPONENT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterNegExponent) {
			listener.enterNegExponent(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitNegExponent) {
			listener.exitNegExponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitNegExponent) {
			return visitor.visitNegExponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterPow) {
			listener.enterPow(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitPow) {
			listener.exitPow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitPow) {
			return visitor.visitPow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ModContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MOD(): TerminalNode { return this.getToken(CalculatorParser.MOD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterMod) {
			listener.enterMod(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitMod) {
			listener.exitMod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitMod) {
			return visitor.visitMod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WholeContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public WHOLE(): TerminalNode { return this.getToken(CalculatorParser.WHOLE, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterWhole) {
			listener.enterWhole(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitWhole) {
			listener.exitWhole(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitWhole) {
			return visitor.visitWhole(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SqRootContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterSqRoot) {
			listener.enterSqRoot(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitSqRoot) {
			listener.exitSqRoot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitSqRoot) {
			return visitor.visitSqRoot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MulDivContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CalculatorParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(CalculatorParser.DIV, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterMulDiv) {
			listener.enterMulDiv(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitMulDiv) {
			listener.exitMulDiv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitMulDiv) {
			return visitor.visitMulDiv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesisContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterParenthesis) {
			listener.enterParenthesis(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitParenthesis) {
			listener.exitParenthesis(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitParenthesis) {
			return visitor.visitParenthesis(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterMult) {
			listener.enterMult(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitMult) {
			listener.exitMult(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitMult) {
			return visitor.visitMult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MinContext extends ExpressionContext {
	public _expression!: ExpressionContext;
	public _expr: ExpressionContext[] = [];
	public MIN(): TerminalNode { return this.getToken(CalculatorParser.MIN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CalculatorParser.SEMICOLON);
		} else {
			return this.getToken(CalculatorParser.SEMICOLON, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterMin) {
			listener.enterMin(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitMin) {
			listener.exitMin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitMin) {
			return visitor.visitMin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MaxContext extends ExpressionContext {
	public _expression!: ExpressionContext;
	public _expr: ExpressionContext[] = [];
	public MAX(): TerminalNode { return this.getToken(CalculatorParser.MAX, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CalculatorParser.SEMICOLON);
		} else {
			return this.getToken(CalculatorParser.SEMICOLON, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterMax) {
			listener.enterMax(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitMax) {
			listener.exitMax(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitMax) {
			return visitor.visitMax(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddSubContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(CalculatorParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(CalculatorParser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterAddSub) {
			listener.enterAddSub(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitAddSub) {
			listener.exitAddSub(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitAddSub) {
			return visitor.visitAddSub(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberContext extends ExpressionContext {
	public NUMBER(): TerminalNode { return this.getToken(CalculatorParser.NUMBER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PiContext extends ExpressionContext {
	public PI(): TerminalNode { return this.getToken(CalculatorParser.PI, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterPi) {
			listener.enterPi(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitPi) {
			listener.exitPi(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitPi) {
			return visitor.visitPi(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EulerContext extends ExpressionContext {
	public EULER(): TerminalNode { return this.getToken(CalculatorParser.EULER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterEuler) {
			listener.enterEuler(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitEuler) {
			listener.exitEuler(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitEuler) {
			return visitor.visitEuler(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubstitutionContext extends ExpressionContext {
	public SUBSTITUTION(): TerminalNode { return this.getToken(CalculatorParser.SUBSTITUTION, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterSubstitution) {
			listener.enterSubstitution(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitSubstitution) {
			listener.exitSubstitution(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitSubstitution) {
			return visitor.visitSubstitution(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TrailingCommentContext extends ParserRuleContext {
	public SEMICOLON(): TerminalNode { return this.getToken(CalculatorParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalculatorParser.RULE_trailingComment; }
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterTrailingComment) {
			listener.enterTrailingComment(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitTrailingComment) {
			listener.exitTrailingComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitTrailingComment) {
			return visitor.visitTrailingComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompileUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CalculatorParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalculatorParser.RULE_compileUnit; }
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterCompileUnit) {
			listener.enterCompileUnit(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitCompileUnit) {
			listener.exitCompileUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitCompileUnit) {
			return visitor.visitCompileUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


