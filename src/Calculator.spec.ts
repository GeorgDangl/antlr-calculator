import { Calculator } from './Calculator';

describe('Calculator', () => {
  describe('with expression:', () => {
    var expectations: { formula: string; expectedResult: number } | null;

    beforeEach(() => {
      expectations = null;
    });

    afterEach(() => {
      // Common code used in all tests
      expect(expectations).not.toBeNull();
      if (expectations !== null) {
        var calculationResult = Calculator.calculate(expectations.formula);
        expect(calculationResult.isValid).toBeTruthy();
        expect(calculationResult.errorPosition).toBeNull();
        expect(calculationResult.errorMessage).toBeNull();
        expect(calculationResult.result).toBeCloseTo(
          expectations.expectedResult
        );
      }
    });

    it('Floor', () => {
      expectations = { formula: 'floor(2,6)', expectedResult: 2 };
    });

    it('Ceil', () => {
      expectations = { formula: 'ceil(2,4)', expectedResult: 3 };
    });

    it('Abs', () => {
      expectations = { formula: 'abs(-3)', expectedResult: 3 };
    });

    it('Roundk', () => {
      expectations = { formula: 'roundk(5,475;2)', expectedResult: 5.48 };
    });

    it('Round', () => {
      expectations = { formula: 'round(3,6)', expectedResult: 4 };
    });

    it('Trunc', () => {
      expectations = { formula: 'trunc(3,47)', expectedResult: 3 };
    });

    it('Sin', () => {
      expectations = { formula: 'sin(0,5*PI)', expectedResult: 1 };
    });

    it('Cos', () => {
      expectations = { formula: 'cos(0)', expectedResult: 1 };
    });

    it('Tan', () => {
      expectations = { formula: 'tan(0,25*pi)', expectedResult: 1 };
    });

    it('Cot', () => {
      expectations = { formula: 'cot(0,25*pi)', expectedResult: 1 };
    });

    it('Sinh', () => {
      expectations = { formula: 'sinh(0)', expectedResult: 0 };
    });

    it('Cosh', () => {
      expectations = { formula: 'cosh(0)', expectedResult: 1 };
    });

    it('Tanh', () => {
      expectations = { formula: 'tanh(10000000)', expectedResult: 1 };
    });

    it('Arcsin', () => {
      expectations = { formula: 'arcsin(1)', expectedResult: 0.5 * Math.PI };
    });

    it('Arccos', () => {
      expectations = { formula: 'arccos(1)', expectedResult: 0 };
    });

    it('Arctan', () => {
      expectations = {
        formula: 'arctan(10000000)',
        expectedResult: 0.5 * Math.PI
      };
    });

    it('Arctan2_1', () => {
      expectations = { formula: 'arctan2(0;-0)', expectedResult: Math.PI };
    });

    it('Arctan2_2', () => {
      expectations = { formula: 'arctan2(0;0)', expectedResult: 0 };
    });

    it('Arccot', () => {
      expectations = { formula: 'arccot(0)', expectedResult: 0.5 * Math.PI };
    });

    it('Exp', () => {
      expectations = { formula: '2^3', expectedResult: 8 };
    });

    it('Ln', () => {
      expectations = { formula: 'ln(e)', expectedResult: 1 };
    });

    it('Eex', () => {
      expectations = { formula: 'eex2', expectedResult: 100 };
    });

    it('Log', () => {
      expectations = { formula: 'log(100)', expectedResult: 2 };
    });

    it('Rad', () => {
      expectations = { formula: 'rad(180)', expectedResult: Math.PI };
    });

    it('Deg', () => {
      expectations = { formula: 'deg(0,5*pi)', expectedResult: 90 };
    });

    it('Sqrt', () => {
      expectations = { formula: 'sqrt(25)', expectedResult: 5 };
    });

    it('Sqr', () => {
      expectations = { formula: 'sqr(5)', expectedResult: 25 };
    });

    it('Pow_1', () => {
      expectations = { formula: '3**3', expectedResult: 27 };
    });

    it('Pow_2', () => {
      expectations = { formula: '3^3', expectedResult: 27 };
    });

    it('Mod_1', () => {
      expectations = { formula: '4mod3', expectedResult: 1 };
    });

    it('Mod_2', () => {
      expectations = { formula: '4 % 3', expectedResult: 1 };
    });

    it('Whole', () => {
      expectations = { formula: '3div2', expectedResult: 1 };
    });

    it('SqRoot_1', () => {
      expectations = { formula: '2//16', expectedResult: 4 };
    });

    it('SqRoot_2', () => {
      expectations = { formula: '2~16', expectedResult: 4 };
    });

    it('MulDiv_1', () => {
      expectations = { formula: '3*2', expectedResult: 6 };
    });

    it('MulDiv_2', () => {
      expectations = { formula: '4/2', expectedResult: 2 };
    });

    it('AddSub_1', () => {
      expectations = { formula: '2+3', expectedResult: 5 };
    });

    it('AddSub_2', () => {
      expectations = { formula: '2-3', expectedResult: -1 };
    });

    it('Number', () => {
      expectations = { formula: '7,36', expectedResult: 7.36 };
    });

    it('Parenthesis', () => {
      expectations = { formula: '(4)', expectedResult: 4 };
    });

    it('Pi', () => {
      expectations = { formula: 'pi', expectedResult: Math.PI };
    });

    it('Exponent', () => {
      expectations = { formula: '3e+2', expectedResult: 300 };
    });

    it('NegExponent', () => {
      expectations = { formula: '3e-2', expectedResult: 0.03 };
    });

    it('Euler', () => {
      expectations = { formula: 'e', expectedResult: Math.E };
    });

    it('Unary', () => {
      expectations = { formula: '-2', expectedResult: -2 };
    });

    it('UnaryPlus', () => {
      expectations = { formula: '+3', expectedResult: 3 };
    });

    it('Multiplication without sign', () => {
      expectations = { formula: '2(3)', expectedResult: 6 };
    });
  });

  describe('with correct formulas:', () => {
    var expectations: { formula: string | null; expectedResult: number } | null;

    beforeEach(() => {
      expectations = null;
    });

    afterEach(() => {
      // Common code used in all tests
      expect(expectations).not.toBeNull();
      if (expectations !== null) {
        var calculationResult = Calculator.calculate(
          <string>expectations.formula
        );
        expect(calculationResult.isValid).toBeTruthy(
          calculationResult.errorMessage
        );
        expect(calculationResult.errorPosition).toBeNull();
        expect(calculationResult.errorMessage).toBeNull();
        if (calculationResult.result > 1e300) {
          // The 0.99 * Number.MAX_VALUE test isn't getting that close==)
          if (expectations.expectedResult !== 0) {
            var relation = Math.abs(
              expectations.expectedResult / calculationResult.result
            );
            expect(relation).toBeCloseTo(1);
          } else {
            fail();
          }
        } else {
          expect(calculationResult.result).toBeCloseTo(
            expectations.expectedResult,
            1
          );
        }
      }
    });

    it('Floor without parentheses', () => {
      expectations = { formula: 'floor3.4', expectedResult: 3 };
    });

    it('Calc_Spaces_01', () => {
      expectations = { formula: ' 0', expectedResult: 0 };
    });

    it('Calc_Spaces_02', () => {
      expectations = { formula: '0 ', expectedResult: 0 };
    });

    it('Calc_Spaces_03', () => {
      expectations = { formula: ' 0 ', expectedResult: 0 };
    });

    it('Calc_Spaces_04', () => {
      expectations = { formula: ' 1', expectedResult: 1 };
    });

    it('Calc_Spaces_05', () => {
      expectations = { formula: ' 1 ', expectedResult: 1 };
    });

    it('Calc_Spaces_06', () => {
      expectations = { formula: '1 ', expectedResult: 1 };
    });

    it('Calc_Spaces_07', () => {
      expectations = { formula: '1 +1', expectedResult: 2 };
    });

    it('Calc_Spaces_08', () => {
      expectations = { formula: '10 +1', expectedResult: 11 };
    });

    it('Calc_Spaces_09', () => {
      expectations = { formula: '1 + 12 ', expectedResult: 13 };
    });

    it('Calc_Spaces_10', () => {
      expectations = { formula: '1*12+14* 7', expectedResult: 110 };
    });

    it('Calc_Spaces_11', () => {
      expectations = { formula: '1 * 12 + 14 * 7', expectedResult: 110 };
    });

    it('Calc_Comments_01', () => {
      expectations = {
        formula: '1+/*Hello please ignore me*/7',
        expectedResult: 8
      };
    });

    it('Calc_Comments_02', () => {
      expectations = {
        formula: '7^/*Hello please ignore me*/7',
        expectedResult: 823543
      };
    });

    it('Calc_Comments_03', () => {
      expectations = {
        formula: '7/*Hello please ignore me*/^7',
        expectedResult: 823543
      };
    });

    it('Calc_Comments_04', () => {
      expectations = {
        formula: '/*454*//*dfdfd*/(/**/sqr(/*mouse*/-/*house*/5))',
        expectedResult: 25
      };
    });

    it('Calc_Comments_05', () => {
      expectations = {
        formula: "1+'Hello please ignore me'7",
        expectedResult: 8
      };
    });

    it('Calc_Comments_06', () => {
      expectations = {
        formula: "7^'Hello please ignore me'7",
        expectedResult: 823543
      };
    });

    it('Calc_Comments_07', () => {
      expectations = {
        formula: "7'Hello please ignore me'^7",
        expectedResult: 823543
      };
    });

    it('Calc_Comments_08', () => {
      expectations = {
        formula: "'454''dfdfd'(''sqr('mouse'-'house'5))",
        expectedResult: 25
      };
    });

    it('Calc_Comments_09', () => {
      expectations = {
        formula: '1+"Hello please ignore me"7',
        expectedResult: 8
      };
    });

    it('Calc_Comments_10', () => {
      expectations = {
        formula: '7^"Hello please ignore me"7',
        expectedResult: 823543
      };
    });

    it('Calc_Comments_11', () => {
      expectations = {
        formula: '7"Hello please ignore me"^7',
        expectedResult: 823543
      };
    });

    it('Calc_Comments_12', () => {
      expectations = {
        formula: '"454""dfdfd"(""sqr("mouse"-"house"5))',
        expectedResult: 25
      };
    });

    it('Calc_SevenTimesSeven', () => {
      expectations = { formula: '7^7', expectedResult: 823543 };
    });

    it('Calc_SingleZero', () => {
      expectations = { formula: '0', expectedResult: 0 };
    });

    it('Calc_SingleZeroParenthesed', () => {
      expectations = { formula: '(0)', expectedResult: 0 };
    });

    it('Calc_SingleOne', () => {
      expectations = { formula: '1', expectedResult: 1 };
    });

    it('Calc_SingleOneParenthesed', () => {
      expectations = { formula: '(1)', expectedResult: 1 };
    });

    it('Parentheses_Round', () => {
      expectations = { formula: '(3-2)*5', expectedResult: 5 };
    });

    it('Parentheses_Round_WithoutParentheses', () => {
      expectations = { formula: '3-2*5', expectedResult: -7 };
    });

    it('Parentheses_Square', () => {
      expectations = { formula: '[3-2]*5', expectedResult: 5 };
    });

    it('Parentheses_Square_WithoutParentheses', () => {
      expectations = { formula: '3-2*5', expectedResult: -7 };
    });

    it('Parentheses_Curly', () => {
      expectations = { formula: '{3-2}*5', expectedResult: 5 };
    });

    it('Parentheses_Curly_WithoutParentheses', () => {
      expectations = { formula: '3-2*5', expectedResult: -7 };
    });

    it('CanMixParentheses', () => {
      expectations = { formula: '(2+4)*[5-3]', expectedResult: 12 };
    });

    it('Calc_SingleNine', () => {
      expectations = { formula: '9', expectedResult: 9 };
    });

    it('Calc_EmptyString', () => {
      expectations = { formula: '', expectedResult: 0 };
    });

    it('Calc_NullString', () => {
      expectations = { formula: null, expectedResult: 0 };
    });

    it('Calc_OnePlusOne', () => {
      expectations = { formula: '1+1', expectedResult: 2 };
    });

    it('Calc_OneTimesOne', () => {
      expectations = { formula: '1*1', expectedResult: 1 };
    });

    it('Calc_ZeroTimesOne', () => {
      expectations = { formula: '0*1', expectedResult: 0 };
    });

    it('Calc_OneMinusOne', () => {
      expectations = { formula: '1-1', expectedResult: 0 };
    });

    it('Calc_OneToThePowerOfOne', () => {
      expectations = { formula: '1^1', expectedResult: 1 };
    });

    it('Calc_OneToThePowerOfZero', () => {
      expectations = { formula: '1^0', expectedResult: 1 };
    });

    it('Calc_FourToThePowerOfFour', () => {
      expectations = { formula: '4^4', expectedResult: 256 };
    });

    it('Calc_TenToThePowerOfThree', () => {
      expectations = { formula: '10^3', expectedResult: 1000 };
    });

    it('Calc_TenExponentThree', () => {
      expectations = { formula: '8e+3', expectedResult: 8000 };
    });

    it('Calc_TenExponentUppercaseThree', () => {
      expectations = { formula: '10E+3', expectedResult: 10000 };
    });

    it('Calc_TenNegativeExponentUppercaseThree', () => {
      expectations = { formula: '10E-3', expectedResult: 0.01 };
    });

    it('Calc_ThousandNegativeExponentUppercaseThree', () => {
      expectations = { formula: '1000E-3', expectedResult: 1 };
    });

    it('Calc_PiCaseVariant_01', () => {
      expectations = { formula: 'pi', expectedResult: Math.PI };
    });

    it('Calc_PiCaseVariant_02', () => {
      expectations = { formula: 'Pi', expectedResult: Math.PI };
    });

    it('Calc_PiCaseVariant_03', () => {
      expectations = { formula: 'pI', expectedResult: Math.PI };
    });

    it('Calc_PiCaseVariant_04', () => {
      expectations = { formula: 'PI', expectedResult: Math.PI };
    });

    it('Calc_DoubleAlmostMaxValueExponent', () => {
      expectations = {
        formula: (0.99 * Number.MAX_VALUE).toString(),
        expectedResult: 0.99 * Number.MAX_VALUE
      };
    });

    it('Calc_DoubleAlmostMinValueExponent', () => {
      expectations = {
        formula: (0.99 * Number.MIN_VALUE).toString(),
        expectedResult: 0.99 * Number.MIN_VALUE
      };
    });

    it('Calc_Sin42', () => {
      expectations = { formula: 'SIN(43)', expectedResult: Math.sin(43) };
    });

    it('Calc_2Plus2', () => {
      expectations = { formula: '2+2', expectedResult: 4 };
    });

    it('Calc_2Plus3Plus4', () => {
      expectations = { formula: '2+3+4', expectedResult: 9 };
    });

    it('Calc_2Minus5Plus4', () => {
      expectations = { formula: '2-5+4', expectedResult: 1 };
    });

    it('Calc_2PlusOpenParen2Minus3CloseParen', () => {
      expectations = { formula: '2+(2-3)', expectedResult: 1 };
    });

    it('Calc_2Times2Plus8Plus3', () => {
      expectations = { formula: '2*2+8+3', expectedResult: 15 };
    });

    it('Calc_2Divided4Plus1', () => {
      expectations = { formula: '2/4+1', expectedResult: 1.5 };
    });

    it('Calc_2Pow3Plus2DoubleStar3', () => {
      expectations = { formula: '2^3+2**3', expectedResult: 16 };
    });

    it('Calc_1Plus3Times4Pow2', () => {
      expectations = { formula: '1+3*4^2', expectedResult: 49 };
    });

    it('Calc_2Tilde4', () => {
      expectations = { formula: '2~4', expectedResult: 2 };
    });

    it('Calc_3Rooted4', () => {
      expectations = { formula: '3//4', expectedResult: 1.5874010519682 };
    });

    it('Calc_12Mod2Pow2', () => {
      expectations = { formula: '13Mod2^2', expectedResult: 1 };
    });

    it('Calc_12Plus2Pow7div3', () => {
      expectations = { formula: '12+2*7div3', expectedResult: 16 };
    });

    it('Calc_7div3', () => {
      expectations = { formula: '7div2', expectedResult: 3 };
    });

    it('Calc_2Powpi', () => {
      expectations = { formula: '2*pi', expectedResult: 6.28318530717959 };
    });

    it('Calc_3TimesE', () => {
      expectations = { formula: '3*e', expectedResult: 8.15484548537714 };
    });

    it('Calc_sqrtOpenParen4CloseParen', () => {
      expectations = {
        formula: 'sqrt(4)',
        expectedResult: 2
      };
    });

    it('Calc_sqrOpenParen7CloseParen', () => {
      expectations = { formula: 'sqr(7)', expectedResult: 49 };
    });

    it('Calc_floorOpenParen3Comma76CloseParen', () => {
      expectations = { formula: 'floor(3,76)', expectedResult: 3 };
    });

    it('Calc_ceilOpenParen6Comma75445545458CloseParen', () => {
      expectations = { formula: 'ceil(6,75445545458)', expectedResult: 7 };
    });

    it('Calc_absOpenParensqrOpenParenMinus5CloseParenCloseParen', () => {
      expectations = { formula: 'abs(sqr(-5))', expectedResult: 25 };
    });

    it('Calc_roundkOpenParen12Comma346Semicolon2CloseParen', () => {
      expectations = { formula: 'roundk(12,346;2)', expectedResult: 12.35 };
    });

    it('Calc_roundOpenParen4Comma665CloseParen', () => {
      expectations = { formula: 'round(4,665)', expectedResult: 5 };
    });

    it('Calc_truncOpenParen3Comma76CloseParen', () => {
      expectations = { formula: 'trunc(3,76)', expectedResult: 3 };
    });

    it('Calc_truncOpenParenMinus3Comma76CloseParen', () => {
      expectations = { formula: 'trunc(-3,76)', expectedResult: -3 };
    });

    it('Calc_sinOpenParen13Comma488CloseParen', () => {
      expectations = {
        formula: 'sin(13,488)',
        expectedResult: 0.796587678143574
      };
    });

    it('Calc_cosOpenParen13Comma488CloseParen', () => {
      expectations = {
        formula: 'cos(13,488)',
        expectedResult: 0.604523011166514
      };
    });

    it('Calc_tanOpenParen13Comma488CloseParen', () => {
      expectations = { formula: 'tan(13,488)', expectedResult: 1.317712747785 };
    });

    it('Calc_cotOpenParen13Comma488CloseParen', () => {
      expectations = {
        formula: 'cot(13,488)',
        expectedResult: 0.758890738274208
      };
    });

    it('Calc_sinhOpenParen13Comma488CloseParen', () => {
      expectations = {
        formula: 'sinh(13,488)',
        expectedResult: 360357.840971781
      };
    });

    it('Calc_coshOpenParen13Comma488CloseParen', () => {
      expectations = {
        formula: 'cosh(13,488)',
        expectedResult: 360357.840973168
      };
    });

    it('Calc_tanhOpenParen13Comma488CloseParen', () => {
      expectations = {
        formula: 'tanh(13,488)',
        expectedResult: 0.99999999999615
      };
    });

    it('Calc_arcsinOpenParen0Comma3TimespiCloseParen', () => {
      expectations = {
        formula: 'arcsin(0,3*pi)',
        expectedResult: 1.22996707330454
      };
    });

    it('Calc_arccosOpenParen0Comma3TimespiCloseParen', () => {
      expectations = {
        formula: 'arccos(0,3*pi)',
        expectedResult: 0.340829253490361
      };
    });

    it('Calc_arctanOpenParen13Comma488CloseParen', () => {
      expectations = {
        formula: 'arctan(13,488)',
        expectedResult: 1.49679174688414
      };
    });

    it('Calc_arctan2OpenParen1Semicolon1CloseParen', () => {
      expectations = {
        formula: 'arctan2(1;1)',
        expectedResult: 0.785398163397448
      };
    });

    it('Calc_arccotOpenParen0Comma4TimespiCloseParen', () => {
      expectations = {
        formula: 'arccot(0,4*pi)',
        expectedResult: 0.672159233738554
      };
    });

    it('Calc_expOpenParen13Comma488CloseParen', () => {
      expectations = {
        formula: 'exp(13,488)',
        expectedResult: 720715.681944949
      };
    });

    it('Calc_lnOpenParen13Comma488CloseParen', () => {
      expectations = { formula: 'ln(13,488)', expectedResult: 2.6018004012595 };
    });

    it('Calc_eexOpenParen3Comma488CloseParen', () => {
      expectations = {
        formula: 'eex(3,488)',
        expectedResult: 3076.09681474071
      };
    });

    it('Calc_logOpenParen13Comma488CloseParen', () => {
      expectations = {
        formula: 'log(13,488)',
        expectedResult: 1.12994755728067
      };
    });

    it('Calc_radOpenParen13Comma488CloseParen', () => {
      expectations = {
        formula: 'rad(13,488)',
        expectedResult: 0.235410009508995
      };
    });

    it('Calc_degOpenParen13Comma488CloseParen', () => {
      expectations = {
        formula: 'deg(13,488)',
        expectedResult: 772.805474072454
      };
    });

    it('Calc_NumberFormat_01', () => {
      expectations = { formula: '12,12', expectedResult: 12.12 };
    });

    it('Calc_NumberFormat_02', () => {
      expectations = { formula: '12.12', expectedResult: 12.12 };
    });

    it('Calc_NumberFormat_03', () => {
      expectations = { formula: '1,212', expectedResult: 1.212 };
    });

    it('Calc_NumberFormat_04', () => {
      expectations = { formula: '1.212', expectedResult: 1.212 };
    });

    it('Calc_NumberFormat_05', () => {
      expectations = { formula: '121,2', expectedResult: 121.2 };
    });

    it('Calc_NumberFormat_06', () => {
      expectations = { formula: '121.2', expectedResult: 121.2 };
    });

    it('UnaryMinus_01', () => {
      expectations = { formula: '-2', expectedResult: -2 };
    });

    it('UnaryMinus_02', () => {
      expectations = { formula: '(-2)', expectedResult: -2 };
    });

    it('UnaryMinus_03', () => {
      expectations = { formula: '-(-2)', expectedResult: 2 };
    });

    it('UnaryMinus_04', () => {
      expectations = { formula: '(-2)+1', expectedResult: -1 };
    });

    it('UnaryPlus_01', () => {
      expectations = { formula: '+2', expectedResult: 2 };
    });

    it('Min_WithSingleArgument', () => {
      expectations = { formula: 'min(2)', expectedResult: 2 };
    });

    it('Min_WithSingleArgument_IsExpression', () => {
      expectations = { formula: 'min(8*7)', expectedResult: 56 };
    });

    it('Min_WithTwoArguments', () => {
      expectations = { formula: 'min(1;2)', expectedResult: 1 };
    });

    it('Min_WithMultiple', () => {
      expectations = { formula: 'min(1;2;3;4;5)', expectedResult: 1 };
    });

    it('Min_WithTwoArguments_OneIsExpression', () => {
      expectations = { formula: 'min(1*3;2)', expectedResult: 2 };
    });

    it('Min_WithMultiple_OneIsExpression', () => {
      expectations = { formula: 'min(6;2^2;7;8;5)', expectedResult: 4 };
    });

    it('Max_WithSingleArgument', () => {
      expectations = { formula: 'max(2)', expectedResult: 2 };
    });

    it('Max_WithSingleArgument_IsExpression', () => {
      expectations = { formula: 'max(8*7)', expectedResult: 56 };
    });

    it('Max_WithTwoArguments', () => {
      expectations = { formula: 'max(1;2)', expectedResult: 2 };
    });

    it('Max_WithMultiple', () => {
      expectations = { formula: 'max(1;2;3;4;5)', expectedResult: 5 };
    });

    it('Max_WithTwoArguments_OneIsExpression', () => {
      expectations = { formula: 'max(1*3;2)', expectedResult: 3 };
    });

    it('Max_WithMultiple_OneIsExpression', () => {
      expectations = { formula: 'max(1;2^2;2;3;-5)', expectedResult: 4 };
    });
  });

  describe('with invalid formulas:', () => {
    var expectations: {
      formula: string;
      expectedErrorPosition: number | null;
    } | null;

    beforeEach(() => {
      expectations = null;
    });

    afterEach(() => {
      // Common code used in all tests
      expect(expectations).not.toBeNull();
      if (expectations !== null) {
        var calculationResult = Calculator.calculate(expectations.formula);
        expect(calculationResult.result).toBeNaN();
        expect(calculationResult.isValid).toBeFalsy();
        expect(calculationResult.errorPosition).toBe(
          expectations.expectedErrorPosition
        );
      }
    });

    it('SingleCharacter', () => {
      expectations = {
        formula: 'd',
        expectedErrorPosition: 0
      };
    });

    it('DivisionByZero', () => {
      expectations = {
        formula: '1/0',
        expectedErrorPosition: null
      };
    });

    it('MissingPartner_1', () => {
      expectations = {
        formula: '1+',
        expectedErrorPosition: 2
      };
    });

    it('MissingPartner_2', () => {
      expectations = {
        formula: '3+2+',
        expectedErrorPosition: 4
      };
    });

    it('WrongPartner', () => {
      expectations = {
        formula: '1+d',
        expectedErrorPosition: 2
      };
    });

    it('InvalidCharacterAtEnd', () => {
      expectations = {
        formula: '1+1d',
        expectedErrorPosition: 3
      };
    });

    it('Parentheses_Round_ClosedWithSquare', () => {
      expectations = { formula: '(3-2]*5', expectedErrorPosition: 4 };
    });

    it('Parentheses_Square_ClosedWithRound', () => {
      expectations = { formula: '[3-2)*5', expectedErrorPosition: 4 };
    });

    it('Parentheses_Curly_ClosedWithRound', () => {
      expectations = { formula: '{3-2)*5', expectedErrorPosition: 4 };
    });

    it('Parentheses_InvalidOrder (', () => {
      expectations = { formula: '(', expectedErrorPosition: 1 };
    });

    it('Parentheses_InvalidOrder (1+()', () => {
      expectations = { formula: '(1+()', expectedErrorPosition: 3 };
    });

    it('Parentheses_InvalidOrder (1+(2)', () => {
      expectations = { formula: '(1+(2)', expectedErrorPosition: 6 };
    });

    it('Parentheses_MixedTypes_01', () => {
      expectations = { formula: '(1+3-[4*5)]', expectedErrorPosition: 9 };
    });

    it('Parentheses_MixedTypes_02', () => {
      expectations = { formula: '(1+3-[4*5)]', expectedErrorPosition: 9 };
    });

    it('Parentheses_MultiplicationImplicitWithSquare', () => {
      // We support implicit multiplication only with default, round parentheses
      expectations = { formula: '[3-2]5', expectedErrorPosition: 5 };
    });

    it('Parentheses_MultiplicationImplicitWithCurly', () => {
      // We support implicit multiplication only with default, round parentheses
      expectations = { formula: '{3-2}5', expectedErrorPosition: 5 };
    });
  });

  describe('with division by zero', () => {
    it('test 01', () => {
      const formula = '1/0';
      var calculationResult = Calculator.calculate(formula);
      expect(calculationResult.result).toBeNaN();
      expect(calculationResult.isValid).toBeFalse();
    });

    it('test 02', () => {
      const formula = '-1/0';
      var calculationResult = Calculator.calculate(formula);
      expect(calculationResult.result).toBeNaN();
      expect(calculationResult.isValid).toBeFalse();
    });

    it('test 03', () => {
      const formula = 'floor(1/0)';
      var calculationResult = Calculator.calculate(formula);
      expect(calculationResult.result).toBeNaN();
      expect(calculationResult.isValid).toBeFalse();
    });
  });

  describe('with substitutions', () => {
    it('ErrorWhenSubstitutionCanNotBeResolved_NoneGiven', () => {
      const formula = '1+#1';
      const result = Calculator.calculate(formula);

      expect(result.isValid).toBeFalse();
      expect(result.result).toBeNaN();
      expect(result.errorPosition).toBe(2);
      expect(result.errorMessage).toContain('#1');
    });

    it('ErrorWhenSubstitutionCanNotBeResolved_ReturnsNull', () => {
      const formula = '1+#1';
      const result = Calculator.calculate(formula, (_) => null);

      console.log(result);

      expect(result.isValid).toBeFalse();
      expect(result.result).toBeNaN();
      expect(result.errorPosition).toBe(2);
      expect(result.errorMessage).toContain('#1');
    });

    it('CanCalculateSubstitution', () => {
      const formula = '1+#Z';
      const result = Calculator.calculate(formula, (_) => 3);

      expect(result.isValid).toBeTrue();
      expect(result.result).toBe(4);
    });

    it('CanCalculateSubstitution_02', () => {
      const formula = '1+#Z4+4';
      const result = Calculator.calculate(formula, (_) => 3);

      expect(result.isValid).toBeTrue();
      expect(result.result).toBe(8);
    });

    it('CanCalculateMultipleSubstitutions', () => {
      const formula = '#first + #second * #third';
      const result = Calculator.calculate(formula, (_) => 3);

      expect(result.isValid).toBeTrue();
      expect(result.result).toBe(12);
    });

    it('CanSubstituteCustomValues', () => {
      const formula = '#first + #second * #third';
      const result = Calculator.calculate(formula, (substitution) => {
        switch (substitution) {
          case '#first':
            return 2;
          case '#second':
            return 3;
          case '#third':
            return 4;
          default:
            throw new Error();
        }
      });

      expect(result.isValid).toBeTrue();
      expect(result.result).toBe(14);
    });

    it('CanSubstituteComplex', () => {
      const formula = 'log10*pi/#12d*e';
      const result = Calculator.calculate(formula, (_) => 3);

      expect(result.isValid).toBeTrue();
      expect(result.result).toBeCloseTo(2.846578, 5);
    });

    it('ReportsCorrectSubstitution', () => {
      const formula = '1+2+#3+4';
      let reportedSubstitution = '';
      const result = Calculator.calculate(formula, (subs) => {
        reportedSubstitution = subs;
        return null;
      });
      expect(reportedSubstitution).toBe('#3');
    });

    it('IgnoresSubstitutionLikeInComment_DoubleQuotes', () => {
      const formula = '1+2+"#3+"4';
      const actual = Calculator.calculate(formula);
      expect(actual.result).toBe(7);
      expect(actual.isValid).toBeTrue();
    });

    it('IgnoresSubstitutionLikeInComment_SingleQuotes', () => {
      const formula = "1+2+'#3+'4";
      const actual = Calculator.calculate(formula);
      expect(actual.result).toBe(7);
      expect(actual.isValid).toBeTrue();
    });

    it('IgnoresSubstitutionLikeInComment_CStyle', () => {
      const formula = '1+2+/*#3+*/4';
      const actual = Calculator.calculate(formula);
      expect(actual.result).toBe(7);
      expect(actual.isValid).toBeTrue();
    });
  });

  describe('with ranges', () => {
    it('ErrorWhenRangeCanNotBeResolved_NoneGiven', () => {
      const formula = '1+#1..#2';
      const result = Calculator.calculate(formula);

      expect(result.isValid).toBeFalse();
      expect(result.result).toBeNaN();
      expect(result.errorPosition).toBe(2);
      expect(result.errorMessage).toContain('#1..#2');
    });

    it('ErrorWhenRangeCanNotBeResolved_ReturnsNull', () => {
      const formula = '1+#1..#2';
      const result = Calculator.calculate(formula, null, (_) => null);

      console.log(result);

      expect(result.isValid).toBeFalse();
      expect(result.result).toBeNaN();
      expect(result.errorPosition).toBe(2);
      expect(result.errorMessage).toContain('#1..#2');
    });

    it('CanCalculateRange', () => {
      const formula = '1+#A..#Z';
      const result = Calculator.calculate(formula, null, (_) => 3);

      expect(result.isValid).toBeTrue();
      expect(result.result).toBe(4);
    });

    it('CanCalculateRange_02', () => {
      const formula = '1+#Z4..#Z8+4';
      const result = Calculator.calculate(formula, null, (_) => 3);

      expect(result.isValid).toBeTrue();
      expect(result.result).toBe(8);
    });

    it('CanCalculateMultipleRanges', () => {
      const formula = '#a..#b + #c..#d * #e..#f';
      const result = Calculator.calculate(formula, null, (_) => 3);

      expect(result.isValid).toBeTrue();
      expect(result.result).toBe(12);
    });

    it('CanSubstituteCustomValues', () => {
      const formula = '#a..#b + #c..#d * #e..#f';
      const result = Calculator.calculate(formula, null, (range) => {
        if (range.start === '#a' && range.end === '#b') {
          return 2;
        }

        if (range.start === '#c' && range.end === '#d') {
          return 3;
        }

        if (range.start === '#e' && range.end === '#f') {
          return 4;
        }

        throw new Error();
      });

      expect(result.isValid).toBeTrue();
      expect(result.result).toBe(14);
    });

    it('CanSubstituteRangeInComplex', () => {
      const formula = 'log10*pi/#12d..#14g*e';
      const result = Calculator.calculate(formula, null, (_) => 3);

      expect(result.isValid).toBeTrue();
      expect(result.result).toBeCloseTo(2.846578, 5);
    });

    it('ReportsCorrectRange', () => {
      const formula = '1+2+#3..#B+4';
      let reportedStart = '';
      let reportedEnd = '';
      const result = Calculator.calculate(formula, null, (range) => {
        reportedStart = range.start;
        reportedEnd = range.end;
        return null;
      });
      expect(reportedStart).toBe('#3');
      expect(reportedEnd).toBe('#B');
    });

    it('IgnoresRangeLikeInComment_DoubleQuotes', () => {
      const formula = '1+2+"#3..#4+"4';
      const actual = Calculator.calculate(formula);
      expect(actual.result).toBe(7);
      expect(actual.isValid).toBeTrue();
    });

    it('IgnoresRangeLikeInComment_SingleQuotes', () => {
      const formula = "1+2+'#3..#4+'4";
      const actual = Calculator.calculate(formula);
      expect(actual.result).toBe(7);
      expect(actual.isValid).toBeTrue();
    });

    it('IgnoresRangeLikeInComment_CStyle', () => {
      const formula = '1+2+/*#3..#4+*/4';
      const actual = Calculator.calculate(formula);
      expect(actual.result).toBe(7);
      expect(actual.isValid).toBeTrue();
    });
  });

  describe('with trailing comments after semicolon', () => {
    var expectations: {
      formula: string;
      expectedResult: number | null;
      shouldBeSuccess: boolean;
    };

    beforeEach(() => {
      expectations = null;
    });

    afterEach(() => {
      // Common code used in all tests
      expect(expectations).not.toBeNull();
      if (expectations !== null) {
        var calculationResult = Calculator.calculate(expectations.formula);
        if (expectations.expectedResult != null) {
          expect(calculationResult.result).toBe(expectations.expectedResult);
        }
        expect(calculationResult.isValid).toBe(expectations.shouldBeSuccess);
      }
    });

    it('CalculatesCorrectly_WithoutExtraText', () => {
      expectations = {
        formula: '1+1;',
        expectedResult: 2,
        shouldBeSuccess: true
      };
    });

    it('CalculatesCorrectly_WithSingleLetterExtraText', () => {
      expectations = {
        formula: '1+1;a',
        expectedResult: 2,
        shouldBeSuccess: true
      };
    });

    it('CalculatesCorrectly_WithExtraText', () => {
      expectations = {
        formula: '1+1;Hello World!',
        expectedResult: 2,
        shouldBeSuccess: true
      };
    });

    it('CalculatesCorrectly_WithExtraTextAndNewlines_01', () => {
      expectations = {
        formula: '1+1;Hello\rWorld!',
        expectedResult: 2,
        shouldBeSuccess: true
      };
    });

    it('CalculatesCorrectly_WithExtraTextAndNewlines_02', () => {
      expectations = {
        formula: '1+1;Hello\r\nWorld!',
        expectedResult: 2,
        shouldBeSuccess: true
      };
    });

    it('CalculatesCorrectly_WithExtraTextAndNewlines_03', () => {
      expectations = {
        formula: '1+1;Hello\nWorld!',
        expectedResult: 2,
        shouldBeSuccess: true
      };
    });

    it('CalculatesCorrectly_WithExtraTextWithManySymbols', () => {
      expectations = {
        formula: '1+1;012abcABC#öäüÄÖÜ!"§😀',
        expectedResult: 2,
        shouldBeSuccess: true
      };
    });

    it('CalculatesCorrectly_WithSemicolonInComment_DoubleQuotes', () => {
      expectations = {
        formula: '1"here;look"+1',
        expectedResult: 2,
        shouldBeSuccess: true
      };
    });

    it('CalculatesCorrectly_WithSemicolonInComment_SingleQuotes', () => {
      expectations = {
        formula: "1'here;look'+1",
        expectedResult: 2,
        shouldBeSuccess: true
      };
    });

    it('CalculatesCorrectly_WithSemicolonInComment_CStyle', () => {
      expectations = {
        formula: '1/*here;look*/+1',
        expectedResult: 2,
        shouldBeSuccess: true
      };
    });

    it('CalculatesCorrectly_WithSemicolonInCommentAndAtEndWithoutExtraText_DoubleQuotes', () => {
      expectations = {
        formula: '1"here;look"+1;',
        expectedResult: 2,
        shouldBeSuccess: true
      };
    });

    it('CalculatesCorrectly_WithSemicolonInCommentAndAtEndWithoutExtraText_SingleQuotes', () => {
      expectations = {
        formula: "1'here;look'+1;",
        expectedResult: 2,
        shouldBeSuccess: true
      };
    });

    it('CalculatesCorrectly_WithSemicolonInCommentAndAtEndWithoutExtraText_CStyle', () => {
      expectations = {
        formula: '1/*here;look*/+1;',
        expectedResult: 2,
        shouldBeSuccess: true
      };
    });

    it('CalculatesCorrectly_WithSemicolonInCommentAndAtEndWithExtraText_DoubleQuotes', () => {
      expectations = {
        formula: '1"here;look"+1;Hello World!',
        expectedResult: 2,
        shouldBeSuccess: true
      };
    });

    it('CalculatesCorrectly_WithSemicolonInCommentAndAtEndWithExtraText_SingleQuotes', () => {
      expectations = {
        formula: "1'here;look'+1;Hello World!",
        expectedResult: 2,
        shouldBeSuccess: true
      };
    });

    it('CalculatesCorrectly_WithSemicolonInCommentAndAtEndWithExtraText_CStyle', () => {
      expectations = {
        formula: '1/*here;look*/+1;Hello World!',
        expectedResult: 2,
        shouldBeSuccess: true
      };
    });

    it('DoesNotFailDueToFalselyDetectedSubstitutionAfterSemicolon_01', () => {
      expectations = {
        formula: '1+1;See #1',
        expectedResult: 2,
        shouldBeSuccess: true
      };
    });

    it('DoesNotFailDueToFalselyDetectedSubstitutionAfterSemicolon_02', () => {
      expectations = {
        formula: '1+1;See #1',
        expectedResult: 2,
        shouldBeSuccess: true
      };
    });
  });
});
