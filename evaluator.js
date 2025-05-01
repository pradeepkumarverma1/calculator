export class Eval {
    constructor(ast) {
        this._ast = ast;
    }

    solve(node = this._ast) {
        switch (node.type) {
            case 'Literal':
                return node.value;

            case 'BinaryExp':
                const left = this.solve(node.left);
                const right = this.solve(node.right);

                switch (node.operator) {
                    case '+': return left + right;
                    case '-': return left - right;
                    case '*': return left * right;
                    case '/': return left / right;
                    default: throw new Error(`Unexpected operator ${node.operator}`);
                }

            default: throw new Error(`Unexpected node ${node.type}`);
        }
    }
}