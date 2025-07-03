import React, { useState } from "react";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("❗ Enter valid numbers");
      return;
    }

    let res;
    switch (operation) {
      case "add":
        res = a + b;
        break;
      case "subtract":
        res = a - b;
        break;
      case "multiply":
        res = a * b;
        break;
      case "divide":
        res = b !== 0 ? a / b : "❗ Cannot divide by zero";
        break;
      default:
        res = "❓ Unknown operation";
    }
    setResult(res);
  };

  const clearAll = () => {
    setNum1("");
    setNum2("");
    setResult("");
    setOperation("add");
  };

  const styles = {
    calculator: {
      maxWidth: "400px",
      margin: "50px auto",
      padding: "20px",
      background: "#f9f9f9",
      border: "2px solid #ddd",
      borderRadius: "10px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      marginBottom: "20px",
      color: "#333",
    },
    input: {
      width: "calc(100% - 20px)",
      padding: "10px",
      margin: "8px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
    },
    select: {
      width: "calc(100% - 20px)",
      padding: "10px",
      margin: "8px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
    },
    buttonContainer: {
      marginTop: "15px",
    },
    button: {
      padding: "10px 20px",
      margin: "5px",
      fontSize: "16px",
      color: "#fff",
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    clearButton: {
      backgroundColor: "#6c757d",
    },
    result: {
      marginTop: "20px",
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
    },
  };

  return (
    <div style={styles.calculator}>
      <h2 style={styles.heading}>🧮 Simple Calculator</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={styles.input}
      />
      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        style={styles.select}
      >
        <option value="add">➕ Add</option>
        <option value="subtract">➖ Subtract</option>
        <option value="multiply">✖ Multiply</option>
        <option value="divide">➗ Divide</option>
      </select>
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={styles.input}
      />
      <div style={styles.buttonContainer}>
        <button onClick={calculate} style={styles.button}>
          =
        </button>
        <button
          onClick={clearAll}
          style={{ ...styles.button, ...styles.clearButton }}
        >
          Clear
        </button>
      </div>
      <div style={styles.result}>Result: {result}</div>
    </div>
  );
};

export default App;
