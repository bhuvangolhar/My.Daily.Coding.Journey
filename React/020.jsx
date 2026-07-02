// React function: Simple calculator

import { useState } from "react";

function App() {

    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [result, setResult] = useState("");

    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                overflow: "hidden",
                paddingTop: "20px",
                paddingLeft: "20px"
            }}
        >

            <input
                type="number"
                placeholder="Enter the first integer"
                value={first}
                onChange={(event) => {
                    setFirst(event.target.value);
                }}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Enter the second integer"
                value={second}
                onChange={(event) => {
                    setSecond(event.target.value);
                }}
            />

            <br /><br />

            <button
                onClick={() => {
                    setResult(Number(first) + Number(second));
                }}
            >
                +
            </button>

            <button
                style={{ marginLeft: "10px" }}
                onClick={() => {
                    setResult(Number(first) - Number(second));
                }}
            >
                -
            </button>

            <button
                style={{ marginLeft: "10px" }}
                onClick={() => {
                    setResult(Number(first) * Number(second));
                }}
            >
                ×
            </button>

            <button
                style={{ marginLeft: "10px" }}
                onClick={() => {
                    setResult(Number(first) / Number(second));
                }}
            >
                ÷
            </button>

            <p style={{ marginTop: "20px" }}>
                Result: {result}
            </p>

        </div>
    );
}

export default App;