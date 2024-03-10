import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

export default function TodoItem({ task, deleteTask, toggleCompleted }) {

    const handleChange = () => {
        toggleCompleted(task.id);
    }

    return (
        <div className='todo-item'>
           <input className="check" type='checkbox' checked={task.completed} onChange={() => {handleChange();console.log('check');}} />
           <p>{task.text}</p>
           <button className="add" onClick={() => deleteTask(task.id)}><FontAwesomeIcon icon={faX} /></button> 
        </div>
    );
}