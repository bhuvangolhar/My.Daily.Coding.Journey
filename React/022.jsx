// React function: Stopwatch

import { useState, useEffect } from "react";

function App() {

    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {

        let timer;

        if (running) {
            timer = setInterval(() => {
                setSeconds((previous) => previous + 1);
            }, 1000);
        }

        return () => clearInterval(timer);

    }, [running]);

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

            <h2>Stopwatch ⏱️</h2>

            <h1>{seconds} s</h1>

            <button
                onClick={() => {
                    setRunning(true);
                }}
            >
                Start
            </button>

            <button
                style={{ marginLeft: "10px" }}
                onClick={() => {
                    setRunning(false);
                }}
            >
                Stop
            </button>

            <button
                style={{ marginLeft: "10px" }}
                onClick={() => {
                    setRunning(false);
                    setSeconds(0);
                }}
            >
                Reset
            </button>

        </div>
    );
}

export default App;