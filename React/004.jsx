// React function: Background color change

import { useState } from "react";

function App() {

    const [color, setColor] = useState("white");
    const [message, setMessage] = useState("Change the background color 🎨");

    return (
        <div
            style={{
                backgroundColor: color,
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
                    setColor("black");
                    setMessage("");
                }}
            >
                Splash
            </button>

        </div>
    );
}

export default App;
