import React from "react";
import { useState } from "react";

export default function TodoApp() {
    const [tasks, setTasks] = useState(initialTasks);
    const [text, setText] = useState('');
    function handleAddTask() {
        setTasks(tasks.map([...tasks, {id: nextId++, title: text, done: false}]))
    }
    return (
        <div>
            <input type="text" />{' '}
            <button>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
const initialTasks = [];
let nextId = 1;