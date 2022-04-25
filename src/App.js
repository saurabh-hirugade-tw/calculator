import "./styles.css";
import { useState } from "react";
import { evaluate } from "mathjs";
import DigitButtons from "./components/DigitButtons";

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
      <DigitButtons updateOperation={updateOperation} equate={equate} />
    </div>
  );
}

export default App;
