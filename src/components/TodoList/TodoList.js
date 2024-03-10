import { useState } from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList() {

    const [tasks, setTasks] = useState([
        { id: 1, text: 'Do the dishes', completed: false },
        { id: 2, text: 'Take out the trash', completed: true },
        { id: 3, text: 'Fold the laundry', completed: true },
        { id: 4, text: 'Do homework', completed: false }
    ]);

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => {
            return task.id !== id;
        }));
    }

    const toggleCompleted = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed }
            }
            else {
                return task
            }
        }))
    }

    return (
        <div className='container'>
            <h1>Todo List </h1>
            <div className='todolist'>
                <div className='tasks'>
                    <table>
                        <tbody>
                            { tasks.map((task) => {
                                return <tr><TodoItem task={task} deleteTask={deleteTask} toggleCompleted={toggleCompleted} key={task.id} /></tr>
                            }) }
                        </tbody>
                    </table>
                </div>
                <div className="form">
                    <input></input>
                    <button onClick={() => console.log('click')}>Add</button>
                </div>
            </div>
        </div>
    );
}