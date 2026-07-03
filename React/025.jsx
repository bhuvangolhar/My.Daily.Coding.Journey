// React function: Color picker

import { useState } from "react";

function App() {

    const [color, setColor] = useState("#ffffff");

    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                backgroundColor: color,
                overflow: "hidden",
                paddingTop: "20px",
                paddingLeft: "20px"
            }}
        >

            <h2>Selected Color: {color}</h2>

            <input
                type="color"
                value={color}
                onChange={(event) => {
                    setColor(event.target.value);
                }}
            />

        </div>
    );
}

export default App;