// React function: Background theme toggle

import { useState } from "react";

function App() {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                overflow: "hidden",
                paddingTop: "20px",
                paddingLeft: "20px",
                backgroundColor: darkMode ? "#1f1f1f" : "white",
                color: darkMode ? "white" : "black"
            }}
        >

            <h2 style={{ marginBottom: "20px" }}>
                React Theme Toggle 🌙
            </h2>

            <button
                onClick={() => {
                    setDarkMode(!darkMode);
                }}
            >
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

        </div>
    );
}

export default App;