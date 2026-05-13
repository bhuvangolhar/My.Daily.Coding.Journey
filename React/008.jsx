// React function: Reset count

import { useState } from "react";

function App() {

    const [count, setCount] = useState(25);

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

            <p style={{ marginBottom: "20px" }}>
                Total score: {count}
            </p>

            <button
                style={{
                    borderRadius: "5px",
                    padding: "10px 10px",
                    marginBottom: "20px"
                }}
                onClick={() => {
                    setCount(0);
                }}
            >
                Reset
            </button>

            <br />

            <button
                style={{
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    marginRight: "10px"
                }}
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                ➕
            </button>

            <button
                style={{
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px"
                }}
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                ➖
            </button>

        </div>
    );
}

export default App;