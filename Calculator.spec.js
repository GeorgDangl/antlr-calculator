"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator_1 = require("./Calculator");
describe('Calculator', function () {
    describe('with expression:', function () {
        var expectations;
        beforeEach(function () {
            expectations = null;
        });
        afterEach(function () {
            // Common code used in all tests
            expect(expectations).not.toBeNull();
            var calculationResult = Calculator_1.Calculator.calculate(expectations.formula);
            expect(calculationResult.isValid).toBeTruthy();
            expect(calculationResult.errorPosition).toBeNull();
            expect(calculationResult.errorMessage).toBeNull();
            expect(calculationResult.result).toBeCloseTo(expectations.expectedResult);
        });
        it('Floor', function () {
            expectations = { formula: 'floor(2,6)', expectedResult: 2 };
        });
        it('Ceil', function () {
            expectations = { formula: 'ceil(2,4)', expectedResult: 3 };
        });
        it('Abs', function () {
            expectations = { formula: 'abs(-3)', expectedResult: 3 };
        });
        it('Roundk', function () {
            expectations = { formula: 'roundk(5,475;2)', expectedResult: 5.48 };
        });
        it('Round', function () {
            expectations = { formula: 'round(3,6)', expectedResult: 4 };
        });
        it('Trunc', function () {
            expectations = { formula: 'trunc(3,47)', expectedResult: 3 };
        });
        it('Sin', function () {
            expectations = { formula: 'sin(0,5*PI)', expectedResult: 1 };
        });
        it('Cos', function () {
            expectations = { formula: 'cos(0)', expectedResult: 1 };
        });
        it('Tan', function () {
            expectations = { formula: 'tan(0,25*pi)', expectedResult: 1 };
        });
        it('Cot', function () {
            expectations = { formula: 'cot(0,25*pi)', expectedResult: 1 };
        });
        it('Sinh', function () {
            expectations = { formula: 'sinh(0)', expectedResult: 0 };
        });
        it('Cosh', function () {
            expectations = { formula: 'cosh(0)', expectedResult: 1 };
        });
        it('Tanh', function () {
            expectations = { formula: 'tanh(10000000)', expectedResult: 1 };
        });
        it('Arcsin', function () {
            expectations = { formula: 'arcsin(1)', expectedResult: 0.5 * Math.PI };
        });
        it('Arccos', function () {
            expectations = { formula: 'arccos(1)', expectedResult: 0 };
        });
        it('Arctan', function () {
            expectations = { formula: 'arctan(10000000)', expectedResult: 0.5 * Math.PI };
        });
        it('Arctan2_1', function () {
            expectations = { formula: 'arctan2(0;-0)', expectedResult: Math.PI };
        });
        it('Arctan2_2', function () {
            expectations = { formula: 'arctan2(0;0)', expectedResult: 0 };
        });
        it('Arccot', function () {
            expectations = { formula: 'arccot(0)', expectedResult: 0.5 * Math.PI };
        });
        it('Exp', function () {
            expectations = { formula: '2^3', expectedResult: 8 };
        });
        it('Ln', function () {
            expectations = { formula: 'ln(e)', expectedResult: 1 };
        });
        it('Eex', function () {
            expectations = { formula: 'eex2', expectedResult: 100 };
        });
        it('Log', function () {
            expectations = { formula: 'log(100)', expectedResult: 2 };
        });
        it('Rad', function () {
            expectations = { formula: 'rad(180)', expectedResult: Math.PI };
        });
        it('Deg', function () {
            expectations = { formula: 'deg(0,5*pi)', expectedResult: 90 };
        });
        it('Sqrt', function () {
            expectations = { formula: 'sqrt(25)', expectedResult: 5 };
        });
        it('Sqr', function () {
            expectations = { formula: 'sqr(5)', expectedResult: 25 };
        });
        it('Pow_1', function () {
            expectations = { formula: '3**3', expectedResult: 27 };
        });
        it('Pow_2', function () {
            expectations = { formula: '3^3', expectedResult: 27 };
        });
        it('Mod_1', function () {
            expectations = { formula: '4mod3', expectedResult: 1 };
        });
        it('Mod_2', function () {
            expectations = { formula: '4 % 3', expectedResult: 1 };
        });
        it('Whole', function () {
            expectations = { formula: '3div2', expectedResult: 1 };
        });
        it('SqRoot_1', function () {
            expectations = { formula: '2//16', expectedResult: 4 };
        });
        it('SqRoot_2', function () {
            expectations = { formula: '2~16', expectedResult: 4 };
        });
        it('MulDiv_1', function () {
            expectations = { formula: '3*2', expectedResult: 6 };
        });
        it('MulDiv_2', function () {
            expectations = { formula: '4/2', expectedResult: 2 };
        });
        it('AddSub_1', function () {
            expectations = { formula: '2+3', expectedResult: 5 };
        });
        it('AddSub_2', function () {
            expectations = { formula: '2-3', expectedResult: -1 };
        });
        it('Number', function () {
            expectations = { formula: '7,36', expectedResult: 7.36 };
        });
        it('Parenthesis', function () {
            expectations = { formula: '(4)', expectedResult: 4 };
        });
        it('Pi', function () {
            expectations = { formula: 'pi', expectedResult: Math.PI };
        });
        it('Exponent', function () {
            expectations = { formula: '3e+2', expectedResult: 300 };
        });
        it('NegExponent', function () {
            expectations = { formula: '3e-2', expectedResult: 0.03 };
        });
        it('Euler', function () {
            expectations = { formula: 'e', expectedResult: Math.E };
        });
        it('Unary', function () {
            expectations = { formula: '-2', expectedResult: -2 };
        });
        it('UnaryPlus', function () {
            expectations = { formula: '+3', expectedResult: 3 };
        });
        it('Multiplication without sign', function () {
            expectations = { formula: '2(3)', expectedResult: 6 };
        });
    });
    describe('with correct formulas:', function () {
        var expectations;
        beforeEach(function () {
            expectations = null;
        });
        afterEach(function () {
            // Common code used in all tests
            expect(expectations).not.toBeNull();
            var calculationResult = Calculator_1.Calculator.calculate(expectations.formula);
            expect(calculationResult.isValid).toBeTruthy(calculationResult.errorMessage);
            expect(calculationResult.errorPosition).toBeNull();
            expect(calculationResult.errorMessage).toBeNull();
            if (calculationResult.result > 1e300) {
                // The 0.99 * Number.MAX_VALUE test isn't getting that close==)
                if (expectations.expectedResult !== 0) {
                    var relation = Math.abs(expectations.expectedResult / calculationResult.result);
                    expect(relation).toBeCloseTo(1);
                }
                else {
                    fail();
                }
            }
            else {
                expect(calculationResult.result).toBeCloseTo(expectations.expectedResult, 1);
            }
        });
        it('Floor without parentheses', function () { expectations = { formula: 'floor3.4', expectedResult: 3 }; });
        it('Calc_Spaces_01', function () { expectations = { formula: ' 0', expectedResult: 0 }; });
        it('Calc_Spaces_02', function () { expectations = { formula: '0 ', expectedResult: 0 }; });
        it('Calc_Spaces_03', function () { expectations = { formula: ' 0 ', expectedResult: 0 }; });
        it('Calc_Spaces_04', function () { expectations = { formula: ' 1', expectedResult: 1 }; });
        it('Calc_Spaces_05', function () { expectations = { formula: ' 1 ', expectedResult: 1 }; });
        it('Calc_Spaces_06', function () { expectations = { formula: '1 ', expectedResult: 1 }; });
        it('Calc_Spaces_07', function () { expectations = { formula: '1 +1', expectedResult: 2 }; });
        it('Calc_Spaces_08', function () { expectations = { formula: '10 +1', expectedResult: 11 }; });
        it('Calc_Spaces_09', function () { expectations = { formula: '1 + 12 ', expectedResult: 13 }; });
        it('Calc_Spaces_10', function () { expectations = { formula: '1*12+14* 7', expectedResult: 110 }; });
        it('Calc_Spaces_11', function () { expectations = { formula: '1 * 12 + 14 * 7', expectedResult: 110 }; });
        it('Calc_Comments_01', function () { expectations = { formula: '1+/*Hello please ignore me*/7', expectedResult: 8 }; });
        it('Calc_Comments_02', function () { expectations = { formula: '7^/*Hello please ignore me*/7', expectedResult: 823543 }; });
        it('Calc_Comments_03', function () { expectations = { formula: '7/*Hello please ignore me*/^7', expectedResult: 823543 }; });
        it('Calc_Comments_04', function () {
            expectations = {
                formula: '/*454*//*dfdfd*/(/**/sqr(/*mouse*/-/*house*/5))',
                expectedResult: 25
            };
        });
        it('Calc_Comments_05', function () { expectations = { formula: "1+'Hello please ignore me'7", expectedResult: 8 }; });
        it('Calc_Comments_06', function () { expectations = { formula: "7^'Hello please ignore me'7", expectedResult: 823543 }; });
        it('Calc_Comments_07', function () { expectations = { formula: "7'Hello please ignore me'^7", expectedResult: 823543 }; });
        it('Calc_Comments_08', function () {
            expectations = { formula: "'454''dfdfd'(''sqr('mouse'-'house'5))", expectedResult: 25 };
        });
        it('Calc_Comments_09', function () { expectations = { formula: '1+"Hello please ignore me"7', expectedResult: 8 }; });
        it('Calc_Comments_10', function () { expectations = { formula: '7^"Hello please ignore me"7', expectedResult: 823543 }; });
        it('Calc_Comments_11', function () { expectations = { formula: '7"Hello please ignore me"^7', expectedResult: 823543 }; });
        it('Calc_Comments_12', function () {
            expectations = {
                formula: '"454""dfdfd"(""sqr("mouse"-"house"5))',
                expectedResult: 25
            };
        });
        it('Calc_SevenTimesSeven', function () { expectations = { formula: '7^7', expectedResult: 823543 }; });
        it('Calc_SingleZero', function () { expectations = { formula: '0', expectedResult: 0 }; });
        it('Calc_SingleZeroParenthesed', function () { expectations = { formula: '(0)', expectedResult: 0 }; });
        it('Calc_SingleOne', function () { expectations = { formula: '1', expectedResult: 1 }; });
        it('Calc_SingleOneParenthesed', function () { expectations = { formula: '(1)', expectedResult: 1 }; });
        it('Calc_SingleNine', function () { expectations = { formula: '9', expectedResult: 9 }; });
        it('Calc_EmptyString', function () { expectations = { formula: '', expectedResult: 0 }; });
        it('Calc_NullString', function () { expectations = { formula: null, expectedResult: 0 }; });
        it('Calc_OnePlusOne', function () { expectations = { formula: '1+1', expectedResult: 2 }; });
        it('Calc_OneTimesOne', function () { expectations = { formula: '1*1', expectedResult: 1 }; });
        it('Calc_ZeroTimesOne', function () { expectations = { formula: '0*1', expectedResult: 0 }; });
        it('Calc_OneMinusOne', function () { expectations = { formula: '1-1', expectedResult: 0 }; });
        it('Calc_OneToThePowerOfOne', function () { expectations = { formula: '1^1', expectedResult: 1 }; });
        it('Calc_OneToThePowerOfZero', function () { expectations = { formula: '1^0', expectedResult: 1 }; });
        it('Calc_FourToThePowerOfFour', function () { expectations = { formula: '4^4', expectedResult: 256 }; });
        it('Calc_TenToThePowerOfThree', function () { expectations = { formula: '10^3', expectedResult: 1000 }; });
        it('Calc_TenExponentThree', function () { expectations = { formula: '8e+3', expectedResult: 8000 }; });
        it('Calc_TenExponentUppercaseThree', function () { expectations = { formula: '10E+3', expectedResult: 10000 }; });
        it('Calc_TenNegativeExponentUppercaseThree', function () { expectations = { formula: '10E-3', expectedResult: 0.01 }; });
        it('Calc_ThousandNegativeExponentUppercaseThree', function () { expectations = { formula: '1000E-3', expectedResult: 1 }; });
        it('Calc_PiCaseVariant_01', function () { expectations = { formula: 'pi', expectedResult: Math.PI }; });
        it('Calc_PiCaseVariant_02', function () { expectations = { formula: 'Pi', expectedResult: Math.PI }; });
        it('Calc_PiCaseVariant_03', function () { expectations = { formula: 'pI', expectedResult: Math.PI }; });
        it('Calc_PiCaseVariant_04', function () { expectations = { formula: 'PI', expectedResult: Math.PI }; });
        it('Calc_DoubleAlmostMaxValueExponent', function () {
            expectations = { formula: (0.99 * Number.MAX_VALUE).toString(), expectedResult: 0.99 * Number.MAX_VALUE };
        });
        it('Calc_DoubleAlmostMinValueExponent', function () {
            expectations = { formula: (0.99 * Number.MIN_VALUE).toString(), expectedResult: 0.99 * Number.MIN_VALUE };
        });
        it('Calc_Sin42', function () { expectations = { formula: 'SIN(43)', expectedResult: Math.sin(43) }; });
        it('Calc_2Plus2', function () { expectations = { formula: '2+2', expectedResult: 4 }; });
        it('Calc_2Plus3Plus4', function () { expectations = { formula: '2+3+4', expectedResult: 9 }; });
        it('Calc_2Minus5Plus4', function () { expectations = { formula: '2-5+4', expectedResult: 1 }; });
        it('Calc_2PlusOpenParen2Minus3CloseParen', function () { expectations = { formula: '2+(2-3)', expectedResult: 1 }; });
        it('Calc_2Times2Plus8Plus3', function () { expectations = { formula: '2*2+8+3', expectedResult: 15 }; });
        it('Calc_2Divided4Plus1', function () { expectations = { formula: '2/4+1', expectedResult: 1.5 }; });
        it('Calc_2Pow3Plus2DoubleStar3', function () { expectations = { formula: '2^3+2**3', expectedResult: 16 }; });
        it('Calc_1Plus3Times4Pow2', function () { expectations = { formula: '1+3*4^2', expectedResult: 49 }; });
        it('Calc_2Tilde4', function () { expectations = { formula: '2~4', expectedResult: 2 }; });
        it('Calc_3Rooted4', function () { expectations = { formula: '3//4', expectedResult: 1.5874010519682 }; });
        it('Calc_12Mod2Pow2', function () { expectations = { formula: '13Mod2^2', expectedResult: 1 }; });
        it('Calc_12Plus2Pow7div3', function () { expectations = { formula: '12+2*7div3', expectedResult: 16 }; });
        it('Calc_7div3', function () { expectations = { formula: '7div2', expectedResult: 3 }; });
        it('Calc_2Powpi', function () { expectations = { formula: '2*pi', expectedResult: 6.28318530717959 }; });
        it('Calc_3TimesE', function () { expectations = { formula: '3*e', expectedResult: 8.15484548537714 }; });
        it('Calc_sqrtOpenParen4CloseParen', function () {
            expectations = {
                formula: 'sqrt(4)',
                expectedResult: 2
            };
        });
        it('Calc_sqrOpenParen7CloseParen', function () { expectations = { formula: 'sqr(7)', expectedResult: 49 }; });
        it('Calc_floorOpenParen3Comma76CloseParen', function () { expectations = { formula: 'floor(3,76)', expectedResult: 3 }; });
        it('Calc_ceilOpenParen6Comma75445545458CloseParen', function () { expectations = { formula: 'ceil(6,75445545458)', expectedResult: 7 }; });
        it('Calc_absOpenParensqrOpenParenMinus5CloseParenCloseParen', function () { expectations = { formula: 'abs(sqr(-5))', expectedResult: 25 }; });
        it('Calc_roundkOpenParen12Comma346Semicolon2CloseParen', function () { expectations = { formula: 'roundk(12,346;2)', expectedResult: 12.35 }; });
        it('Calc_roundOpenParen4Comma665CloseParen', function () { expectations = { formula: 'round(4,665)', expectedResult: 5 }; });
        it('Calc_truncOpenParen3Comma76CloseParen', function () { expectations = { formula: 'trunc(3,76)', expectedResult: 3 }; });
        it('Calc_truncOpenParenMinus3Comma76CloseParen', function () { expectations = { formula: 'trunc(-3,76)', expectedResult: -3 }; });
        it('Calc_sinOpenParen13Comma488CloseParen', function () { expectations = { formula: 'sin(13,488)', expectedResult: 0.796587678143574 }; });
        it('Calc_cosOpenParen13Comma488CloseParen', function () { expectations = { formula: 'cos(13,488)', expectedResult: 0.604523011166514 }; });
        it('Calc_tanOpenParen13Comma488CloseParen', function () { expectations = { formula: 'tan(13,488)', expectedResult: 1.317712747785 }; });
        it('Calc_cotOpenParen13Comma488CloseParen', function () { expectations = { formula: 'cot(13,488)', expectedResult: 0.758890738274208 }; });
        it('Calc_sinhOpenParen13Comma488CloseParen', function () { expectations = { formula: 'sinh(13,488)', expectedResult: 360357.840971781 }; });
        it('Calc_coshOpenParen13Comma488CloseParen', function () { expectations = { formula: 'cosh(13,488)', expectedResult: 360357.840973168 }; });
        it('Calc_tanhOpenParen13Comma488CloseParen', function () { expectations = { formula: 'tanh(13,488)', expectedResult: 0.99999999999615 }; });
        it('Calc_arcsinOpenParen0Comma3TimespiCloseParen', function () { expectations = { formula: 'arcsin(0,3*pi)', expectedResult: 1.22996707330454 }; });
        it('Calc_arccosOpenParen0Comma3TimespiCloseParen', function () { expectations = { formula: 'arccos(0,3*pi)', expectedResult: 0.340829253490361 }; });
        it('Calc_arctanOpenParen13Comma488CloseParen', function () { expectations = { formula: 'arctan(13,488)', expectedResult: 1.49679174688414 }; });
        it('Calc_arctan2OpenParen1Semicolon1CloseParen', function () { expectations = { formula: 'arctan2(1;1)', expectedResult: 0.785398163397448 }; });
        it('Calc_arccotOpenParen0Comma4TimespiCloseParen', function () { expectations = { formula: 'arccot(0,4*pi)', expectedResult: 0.672159233738554 }; });
        it('Calc_expOpenParen13Comma488CloseParen', function () { expectations = { formula: 'exp(13,488)', expectedResult: 720715.681944949 }; });
        it('Calc_lnOpenParen13Comma488CloseParen', function () { expectations = { formula: 'ln(13,488)', expectedResult: 2.6018004012595 }; });
        it('Calc_eexOpenParen3Comma488CloseParen', function () { expectations = { formula: 'eex(3,488)', expectedResult: 3076.09681474071 }; });
        it('Calc_logOpenParen13Comma488CloseParen', function () { expectations = { formula: 'log(13,488)', expectedResult: 1.12994755728067 }; });
        it('Calc_radOpenParen13Comma488CloseParen', function () { expectations = { formula: 'rad(13,488)', expectedResult: 0.235410009508995 }; });
        it('Calc_degOpenParen13Comma488CloseParen', function () { expectations = { formula: 'deg(13,488)', expectedResult: 772.805474072454 }; });
        it('Calc_NumberFormat_01', function () { expectations = { formula: '12,12', expectedResult: 12.12 }; });
        it('Calc_NumberFormat_02', function () { expectations = { formula: '12.12', expectedResult: 12.12 }; });
        it('Calc_NumberFormat_03', function () { expectations = { formula: '1,212', expectedResult: 1.212 }; });
        it('Calc_NumberFormat_04', function () { expectations = { formula: '1.212', expectedResult: 1.212 }; });
        it('Calc_NumberFormat_05', function () { expectations = { formula: '121,2', expectedResult: 121.2 }; });
        it('Calc_NumberFormat_06', function () { expectations = { formula: '121.2', expectedResult: 121.2 }; });
        it('UnaryMinus_01', function () { expectations = { formula: '-2', expectedResult: -2 }; });
        it('UnaryMinus_02', function () { expectations = { formula: '(-2)', expectedResult: -2 }; });
        it('UnaryMinus_03', function () { expectations = { formula: '-(-2)', expectedResult: 2 }; });
        it('UnaryMinus_04', function () { expectations = { formula: '(-2)+1', expectedResult: -1 }; });
        it('UnaryPlus_01', function () { expectations = { formula: '+2', expectedResult: 2 }; });
        it('UnaryPlus_02', function () { expectations = { formula: '(+2)', expectedResult: 2 }; });
    });
    describe('with invalid formulas:', function () {
        var expectations;
        beforeEach(function () {
            expectations = null;
        });
        afterEach(function () {
            // Common code used in all tests
            expect(expectations).not.toBeNull();
            var calculationResult = Calculator_1.Calculator.calculate(expectations.formula);
            expect(calculationResult.result).toBeNaN();
            expect(calculationResult.isValid).toBeFalsy();
            expect(calculationResult.errorPosition).toBe(expectations.expectedErrorPosition);
        });
        it('SingleCharacter', function () {
            expectations = {
                formula: 'd',
                expectedErrorPosition: 0
            };
        });
        it('DivisionByZero', function () {
            expectations = {
                formula: '1/0',
                expectedErrorPosition: null
            };
        });
        it('MissingPartner_1', function () {
            expectations = {
                formula: '1+',
                expectedErrorPosition: 2
            };
        });
        it('MissingPartner_2', function () {
            expectations = {
                formula: '3+2+',
                expectedErrorPosition: 4
            };
        });
        it('WrongPartner', function () {
            expectations = {
                formula: '1+d',
                expectedErrorPosition: 2
            };
        });
        it('InvalidCharacterAtEnd', function () {
            expectations = {
                formula: '1+1d',
                expectedErrorPosition: 3
            };
        });
    });
});
//# sourceMappingURL=Calculator.spec.js.map