// React function: Dice roller

import { useState } from "react";

function App() {

    const [dice, setDice] = useState(1);

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

            <h2 style={{ marginBottom: "20px" }}>
                Dice Number: {dice}
            </h2>

            <button
                onClick={() => {
                    setDice(Math.floor(Math.random() * 6) + 1);
                }}
            >
                Roll
            </button>

        </div>
    );
}

export default App;