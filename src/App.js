import "./styles.css";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/", "*", "+", "-", "."];

  const evaluateResult = (expr) => {
    let newExpr;
    if (ops.includes(expr.slice(-1))) newExpr = expr.slice(0, -1);
    else newExpr = expr;
    return evaluate(newExpr).toString();
  };

  const updateOperation = (value) => {
    if (
      (operation === "" && ops.includes(value)) ||
      (ops.includes(operation.slice(-1)) && ops.includes(value))
    )
      return;
    setOperation(operation + value);
    if (!ops.includes(value)) {
      setResult(evaluateResult(operation + value));
    }
  };

  const equate = () => {
    const answer = evaluateResult(operation);
    setOperation(answer);
    setResult("");
  };

  const deleteLast = () => {
    if (operation !== "") {
      const value = operation.slice(0, -1);
      setOperation(value);
      setResult(evaluateResult(operation));
    }
    return;
  };

  const clearAll = () => {
    setOperation("");
    setResult("");
  };

  const createDigitButtons = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => updateOperation(i.toString())}>
          {i}
        </button>
      );
    }
    return digits;
  };

  return (
    <div className="calculator">
      <div className="output">
        <div className="result">{result}</div>
        <div className="operation">{operation}</div>
      </div>
      <div className="operators">
        <button onClick={clearAll}>Clear</button>
        <button onClick={deleteLast}>Del</button>
        <button onClick={() => updateOperation("/")}>/</button>
        <button onClick={() => updateOperation("*")}>*</button>
        <button onClick={() => updateOperation("+")}>+</button>
        <button onClick={() => updateOperation("-")}>-</button>
      </div>
      <div className="digits">
        {createDigitButtons()}
        <button onClick={() => updateOperation("0")}>0</button>
        <button onClick={() => updateOperation(".")}>.</button>
        <button onClick={equate}>=</button>
      </div>
    </div>
  );
}

export default App;
