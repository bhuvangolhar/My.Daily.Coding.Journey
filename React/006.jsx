// React function: Increase count

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

            <p style={{ marginBottom: "20px" }}>
                Current count: {count}
            </p>

            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Add
            </button>

        </div>
    );
}

export default App;