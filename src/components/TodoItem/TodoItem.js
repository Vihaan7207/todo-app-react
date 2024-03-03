import './TodoItem.css';

export default function TodoItem({ task, deleteTask, toggleCompleted }) {

    const handleChange = () => {
        toggleCompleted(task.id);
    }

    return (
        <div>
           <input type='checkbox' checked={task.completed} onChange={handleChange} />
           <p>{task.text}</p>
           <button onClick={() => deleteTask(task.id)}>Delete</button> 
        </div>
    );
}