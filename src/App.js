
function App() {

  const createDigitButtons = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  return (
    <div className="App">
      <div className="output">
        <div className="result">{}</div>
        <div className="operation">{}</div>
      </div>
      <div className="operators">
        <button >Clear</button>
        <button >Del</button>
        <button>/</button>
        <button>*</button>
        <button>+</button>
        <button>-</button>
      </div>
      <div className="digits">
      {createDigitButtons()}
      <button>0</button>
      <button>.</button>
      <button>=</button>
    </div>
    </div>
  );
}

export default App;
