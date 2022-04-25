import React from "react";

const DigitButtons = (props) => {
  const { updateOperation, equate } = props;
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
    <div className="digits">
      {createDigitButtons()}
      <button onClick={() => updateOperation("0")}>0</button>
      <button onClick={() => updateOperation(".")}>.</button>
      <button onClick={equate}>=</button>
    </div>
  );
};

export default DigitButtons;
