// React function: Character counter

import { useState } from "react";

function App() {

    const [text, setText] = useState("");

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
                placeholder="Type something..."
                value={text}
                onChange={(event) => {
                    setText(event.target.value);
                }}
            />

            <p style={{ marginTop: "20px" }}>
                Characters: {text.length}
            </p>

        </div>
    );
}

export default App;