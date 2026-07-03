// React function: Todo list

import { useState } from "react";

function App() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

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
                placeholder="Create a task"
                value={task}
                onChange={(event) => {
                    setTask(event.target.value);
                }}
            />

            <button
                style={{ marginLeft: "10px" }}
                onClick={() => {

                    if (task !== "") {

                        setTasks([...tasks, task]);
                        setTask("");

                    }

                }}
            >
                Add
            </button>

            <ul>

                {tasks.map((item, index) => (

                    <li key={index}>{item}</li>

                ))}

            </ul>

        </div>
    );
}

export default App;