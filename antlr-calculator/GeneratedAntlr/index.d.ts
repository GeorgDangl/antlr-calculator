import { Lexer, InputStream, Parser, CommonTokenStream, tree } from 'antlr4';

export declare class CalculatorLexer extends Lexer {
    constructor(inputStream: InputStream);
}

export declare class CalculatorParser extends Parser {
    constructor(commonTokenStream: CommonTokenStream);
    _listeners: any[];
    calculator(): any;
}

export declare class CalculatorVisitor extends tree.ParseTreeVisitor<number> {
}