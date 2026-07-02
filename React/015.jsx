// React function: Password visibility

import { useState } from "react";

function App() {

    const [showPassword, setShowPassword] = useState(false);

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

            <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
            />

            <br /><br />

            <button
                onClick={() => {
                    setShowPassword(!showPassword);
                }}
            >
                {showPassword ? "Hide Password" : "Show Password"}
            </button>

        </div>
    );
}

export default App;