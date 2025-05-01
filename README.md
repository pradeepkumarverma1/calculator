# Arithmetic JS Calculator

The **Arithmetic Calculator** will help you calculate mathematical expressions with operations such as Addition, Subtraction, Multiplication, and Division. It uses a custom-built **Lexer**, **Parser**, and **Evaluator** to provide accurate results and flexibility.

## Live Preview

You can check out the live preview here: [https://pradeepkumarverma1.github.io/calculator/](https://pradeepkumarverma1.github.io/calculator/)

## Screenshot
![Capture](https://github.com/pradeepkumarverma1/calculator/assets/132253060/5cc254b3-20ac-4e78-9881-80477d54ead7)

## 🚀 Features

### ✔️ **Custom Lexer**
- Replaced the original evaluator with a **custom-built lexer**.
- Lexer now handles tokenization of mathematical expressions, breaking them down into **operators**, **numbers**, and **identifiers**.

### ✔️ **Custom Parser**
- Developed a **custom parser** that constructs an Abstract Syntax Tree (AST) from the tokenized input.
- Supports basic **mathematical expressions** with **operator precedence**:
  - **Multiplication** and **division** have higher precedence than **addition** and **subtraction**.


### ✔️ **Custom Evaluator**
- Evaluator traverses the AST and calculates the result based on operator precedence.

---

### 🔮 **Upcoming Features**

#### 1. **Full Parentheses Support**
- The parser and evaluator will be further extended to handle **parentheses** in mathematical expressions for full **order of operations** support (e.g., `(2 + 3) * 2`).

#### 2. **Fix the issue with appending the '-' sign**: The expression `3 * - 2` is currently not handled properly. Need to resolve this.
  
---

## Getting Started

### Prerequisites

- Web browser (Chrome, Firefox, Safari, etc.)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pradeepkumarverma1/calculator.git
