// React function: Hide and show text

import { useState } from "react";

function App() {

    const [visible, setVisible] = useState(true);

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

            {visible && (
                <h2 style={{ marginBottom: "20px" }}>
                    React makes UI development easier ⚛️
                </h2>
            )}

            <button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                Toggle
            </button>

        </div>
    );
}

export default App;