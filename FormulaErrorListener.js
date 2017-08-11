"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormulaErrorListener = (function () {
    function FormulaErrorListener() {
        this._isValid = true;
        this._errorLocation = null;
    }
    Object.defineProperty(FormulaErrorListener.prototype, "isValid", {
        get: function () {
            return this._isValid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaErrorListener.prototype, "errorLocation", {
        get: function () {
            return this._errorLocation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaErrorListener.prototype, "errorMessage", {
        get: function () {
            return this._errorMessage;
        },
        enumerable: true,
        configurable: true
    });
    FormulaErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
        this._isValid = false;
        this._errorLocation = column;
        this._errorMessage = msg;
    };
    /**
     * Method stub - does nothing
     * @param recognizer
     * @param dfa
     * @param startIndex
     * @param stopIndex
     * @param exact
     * @param ambigAlts
     * @param configs
     */
    FormulaErrorListener.prototype.reportAmbiguity = function (recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
    };
    ;
    /**
     * Method stub - does nothing
     * @param recognizer
     * @param dfa
     * @param startIndex
     * @param stopIndex
     * @param conflictingAlts
     * @param configs
     */
    FormulaErrorListener.prototype.reportAttemptingFullContext = function (recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
    };
    ;
    /**
     * Method stub - does nothing
     * @param recognizer
     * @param dfa
     * @param startIndex
     * @param stopIndex
     * @param prediction
     * @param configs
     */
    FormulaErrorListener.prototype.reportContextSensitivity = function (recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    };
    ;
    return FormulaErrorListener;
}());
exports.FormulaErrorListener = FormulaErrorListener;
//# sourceMappingURL=FormulaErrorListener.js.map