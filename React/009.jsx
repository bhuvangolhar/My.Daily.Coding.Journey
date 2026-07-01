// React function: Complete counter

import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

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

            <h2>Counter Application 🔢</h2>

            <p style={{ marginBottom: "20px" }}>
                Current count: {count}
            </p>

            <button
                style={{
                    marginRight: "10px"
                }}
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increase
            </button>

            <button
                style={{
                    marginRight: "10px"
                }}
                onClick={() => {
                    setCount(0);
                }}
            >
                Reset
            </button>

            <button
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                Decrease
            </button>

        </div>
    );
}

export default App;