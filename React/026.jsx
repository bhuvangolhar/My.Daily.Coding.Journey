// React function: Login form

import { useState } from "react";

function App() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />

            <br /><br />

            <button
                onClick={() => {
                    alert("Login Successful 🎉");
                }}
            >
                Sign In
            </button>

        </div>
    );
}

export default App;