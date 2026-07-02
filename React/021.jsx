// React function: Digital clock

import { useState, useEffect } from "react";

function App() {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {

        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);

    }, []);

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

            <h2>Digital Clock ⏰</h2>

            <h1>{time}</h1>

        </div>
    );
}

export default App;