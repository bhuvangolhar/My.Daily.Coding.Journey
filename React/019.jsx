// React function: Temperature converter

import { useState } from "react";

function App() {

    const [celsius, setCelsius] = useState("");
    const [fahrenheit, setFahrenheit] = useState("");

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
                placeholder="Enter temperature in Celsius"
                value={celsius}
                onChange={(event) => {
                    setCelsius(event.target.value);
                }}
            />

            <br /><br />

            <button
                onClick={() => {
                    setFahrenheit((celsius * 9 / 5 + 32).toFixed(2));
                }}
            >
                Convert
            </button>

            <p style={{ marginTop: "20px" }}>
                Fahrenheit: {fahrenheit}
            </p>

        </div>
    );
}

export default App;