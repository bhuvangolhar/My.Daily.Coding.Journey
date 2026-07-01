// React function: Random number generator

import { useState } from "react";

function App() {

    const [number, setNumber] = useState(0);

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
                Random Number: {number}
            </h2>

            <button
                onClick={() => {
                    setNumber(Math.floor(Math.random() * 100) + 1);
                }}
            >
                Generate
            </button>

        </div>
    );
}

export default App;