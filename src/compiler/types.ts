export type TokenType = 
  | 'IDENTIFIER'
  | 'STRING'
  | 'NUMBER'
  | 'KEYWORD'
  | 'OPERATOR'
  | 'PUNCTUATION'
  | 'EQUALS'
  | 'DOT'
  | 'PARENTHESIS'
  | 'BRACE'
  | 'BRACKET'
  | 'COMMA'
  | 'SEMICOLON'
  | 'EOF';

export interface Token {
  type: TokenType;
  value: string;
  line: number;
  column: number;
}

export interface ASTNode {
  type: 
    | 'Program'
    | 'VariableDeclaration'
    | 'FunctionDeclaration'
    | 'ExpressionStatement'
    | 'CallExpression'
    | 'MemberExpression'
    | 'Identifier'
    | 'Literal'
    | 'BlockStatement'
    | 'ReturnStatement'
    | 'BinaryExpression'
    | 'ObjectExpression'
    | 'ArrayExpression'
    | 'Property';
  value?: string;
  name?: string;
  kind?: 'const' | 'let' | 'var';
  params?: ASTNode[];
  body?: ASTNode | ASTNode[];
  callee?: ASTNode;
  arguments?: ASTNode[];
  object?: ASTNode;
  property?: ASTNode;
  properties?: ASTNode[];
  elements?: ASTNode[];
  operator?: string;
  left?: ASTNode;
  right?: ASTNode;
  line: number;
  column: number;
}

export interface AnalysisResult {
  nodeType: string;
  description: string;
  line: number;
  column: number;
  code: string;
}

export interface ThreeAddressCode {
  result: string;
  op1?: string;
  op2?: string;
  operator?: string;
}