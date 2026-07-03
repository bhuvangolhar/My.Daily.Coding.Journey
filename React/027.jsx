// React function: Registration form

import { useState } from "react";

function App() {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
                placeholder="Enter your full name"
                value={name}
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Enter your phone or email"
                value={username}
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Confirm the password"
                value={confirmPassword}
                onChange={(event) => {
                    setConfirmPassword(event.target.value);
                }}
            />

            <br /><br />

            <button
                onClick={() => {
                    alert("Registration Successful 🎊");
                }}
            >
                Sign Up
            </button>

        </div>
    );
}

export default App;