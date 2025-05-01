export class Parser {
    constructor(tokens) {
        this.tokens = tokens;
        this.pos = 0;
    }

    currentToken() {
        return this.tokens[this.pos] || null;
    }

    previousToken() {
        return this.tokens[this.pos - 1] || null;
    }

    nextToken() {
        const token = this.currentToken();
        if (!token) throw new Error('Unexpected end of the input');

        this.pos++;
        return token;
    }

    parseToken() {
        return this.parseExpression();
    }

    parseExpression() {
        let node = this.parseTerms();

        while (this.currentToken() && (this.currentToken().value == '+' || this.currentToken().value == '-')) {

            const operator = this.nextToken();
            const right = this.parseTerms();

            node = {
                type: 'BinaryExp',
                operator: operator.value,
                left: node,
                right
            }
        }

        return node;
    }

    parseTerms() {
        let node = this.parseFactor(); // {type: 'Literal', value: 2}

        while (this.currentToken() && (this.currentToken().value == '*' || this.currentToken().value == '/')) {

            const operator = this.nextToken();
            const right = this.parseFactor();

            node = {
                type: 'BinaryExp',
                operator: operator.value,
                left: node, // {type: 'Literal', value: 2}
                right,
            }
        }

        return node;
    }

    parseFactor() {
        const token = this.currentToken();

        if (token.type === 'NUM') {
            this.nextToken();

            return {
                type: 'Literal',
                value: token.value,
            };
        }

        throw new Error(`Unexpected token type ${token.type} at position ${this.pos}`);
    }
}