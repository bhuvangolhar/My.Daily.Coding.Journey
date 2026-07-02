// React function: BMI calculator

import { useState } from "react";

function App() {

    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState("");

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
                placeholder="Enter your weight (kg)"
                value={weight}
                onChange={(event) => {
                    setWeight(event.target.value);
                }}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Enter your height (m)"
                value={height}
                onChange={(event) => {
                    setHeight(event.target.value);
                }}
            />

            <br /><br />

            <button
                onClick={() => {
                    setBmi((weight / (height * height)).toFixed(2));
                }}
            >
                Calculate
            </button>

            <p style={{ marginTop: "20px" }}>
                BMI: {bmi}
            </p>

        </div>
    );
}

export default App;