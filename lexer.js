let tokens = [];

const Tokenize = (input) => {

    tokens = [];

    let i = 0;
    while (i < input.length) {

        const char = input[i];

        /**
         * Ignore whitespaces
         */
        if (/\s+/.test(char)) {
            i++;
            continue;
        }


        if (/[0-9]/.test(char)) {

            let num = char;

            /**
             * Check for the successive digits, combine them and store
             */
            while (/[0-9.]/.test(input[i + 1])) {
                num += input[++i];
            }

            addToken('NUM', num);

        } else if (char == '+') {

            addToken('PLUS', char);
        } else if (char == '-') {

            addToken('MINUS', char);
        } else if (char == '*') {

            addToken('MUL', char);
        } else if (char == '/') {

            addToken('DIV', char);
        } else {
            throw new Error(`Unexpected Identifier ${char}`);
        }

        i++;

    }

    return tokens;
}

/**
 * Adds a new token to the tokens array.
 * 
 * @param {string} tokenType - The type of the token (e.g. 'NUM', 'PLUS', 'MINUS', etc.)
 * @param {string} tokenValue - The value of the token
 */
const addToken = (tokenType, tokenValue) => tokens.push({ type: tokenType, value: tokenValue });

export default Tokenize;