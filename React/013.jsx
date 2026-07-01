// React function: Coin toss

import { useState } from "react";

function App() {

    const [result, setResult] = useState("Heads");

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

            <h2 style={{ marginBottom: "20px" }}>
                Coin Result: {result}
            </h2>

            <button
                onClick={() => {
                    let toss = Math.floor(Math.random() * 2);

                    if (toss == 0) {
                        setResult("Heads");
                    } else {
                        setResult("Tails");
                    }
                }}
            >
                Toss
            </button>

        </div>
    );
}

export default App;