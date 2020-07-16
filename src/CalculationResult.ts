export class CalculationResult {
    public isValid: boolean = false;
    public errorPosition: number | null = null;
    public errorMessage: string | null = null;
    public result: number = NaN;
}