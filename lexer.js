export class Tokenize {
    tokens = [];
    i = 0;

    constructor(input) {
        this.input = input;
    }

    /**
     * Generates a list of tokens from the input string.
     * 
     * This method iterates over the input string, identifying and categorizing
     * each character as a number, operator, or whitespace. It then constructs
     * a list of tokens, where each token represents a single number or operator.
     * 
     * @return {Array} A list of tokens, where each token is an object with 'type' and 'value' properties.
     */
    generateToken() {

        /**
         * Clear any previous tokens
         */
        this.tokens = [];

        while (this.i < this.input.length) {

            const char = this.input[this.i];

            /**
             * Ignore the whitespaces
             */
            if (/\s+/.test(char)) {
                this.i++;
                continue;
            }

            if (/[0-9]/.test(char)) {

                let num = char;

                /**
                 * Iterates over the input string to extract a number, 
                 * appending any subsequent digits or decimal points.
                 */
                while (/[0-9.]/.test(this.input[this.i + 1])) {
                    ++this.i;
                    num += this.input[this.i];
                }

                this.addToken('NUM', parseFloat(num));

            }
            else if (char == '+') this.addToken('PLUS', char);
            else if (char == '-') this.addToken('MINUS', char);
            else if (char == '*') this.addToken('MUL', char);
            else if (char == '/') this.addToken('DIV', char);
            else throw new Error(`Unexpected identifier ${char}`);

            this.i++;
        }

        return this.tokens;
    }

    /**
     * Adds a token to the list of tokens.
     * 
     * @param {string} tokenType The type of the token (e.g., 'NUM', 'PLUS', 'MINUS', etc.).
     * @param {*} tokenValue The value of the token.
     */
    addToken(tokenType, tokenValue) {
        this.tokens.push({ type: tokenType, value: tokenValue });
    }
}

