// React function: Click event

import { useState } from "react";

function App() {

    const [message, setMessage] = useState("Click below to continue ⬇️");

    return (
        <>
            <p>{message}</p>

            <button onClick={() => setMessage("Task completed successfully ☑️")}>
                Tap
            </button>
        </>
    );
}

export default App;
