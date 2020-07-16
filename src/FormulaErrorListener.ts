export class FormulaErrorListener {

    private _isValid = true;
    private _errorLocation: number | null = null;
    private _errorMessage: string | null = null;

    public get isValid() {
        return this._isValid;
    }

    public get errorLocation() {
        return this._errorLocation;
    }

    public get errorMessage() {
        return this._errorMessage;
    }

    public syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this._isValid = false;
        this._errorLocation = column;
        this._errorMessage = msg;
    }

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
    public reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
    };

    /**
     * Method stub - does nothing
     * @param recognizer
     * @param dfa
     * @param startIndex
     * @param stopIndex
     * @param conflictingAlts
     * @param configs
     */
    public reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
    };

    /**
     * Method stub - does nothing
     * @param recognizer
     * @param dfa
     * @param startIndex
     * @param stopIndex
     * @param prediction
     * @param configs
     */
    public reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    };
}