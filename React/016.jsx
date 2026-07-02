// React function: Image toggle

import { useState } from "react";

function App() {

    const [image, setImage] = useState("sun.png");

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

            <img
                src={image}
                alt="Image"
                width="250"
                style={{ marginBottom: "20px" }}
            />

            <br />

            <button
                onClick={() => {
                    if (image == "sun.png") {
                        setImage("moon.png");
                    } else {
                        setImage("sun.png");
                    }
                }}
            >
                Toggle Image
            </button>

        </div>
    );
}

export default App;