// React function: Text visibility toggle

import { useState } from "react";

function App() {

    const [message, setMessage] = useState("Click to see the magic 👀");
    const [button, setButton] = useState("whoosh");

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

            <p style={{ marginBottom: "20px" }}>{message}</p>

            <button
                onClick={() => {
                    setMessage("");
                    setButton("");
                }}
            >
                {button}
            </button>

        </div>
    );
}

export default App;
