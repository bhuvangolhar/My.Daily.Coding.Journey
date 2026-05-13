// React function: Decrease count

import { useState } from "react";

function App() {

    const [count, setCount] = useState(1);

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
                Remaining count: {count}
            </p>

            <button
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                Reduce
            </button>

        </div>
    );
}

export default App;