/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { FaTrashAlt, FaCheckSquare, FaRegTimesCircle } from 'react-icons/fa';
import { Task } from '../interfaces/Task';

interface Props {
task: Task;
deleteTask: ({ id }:Task) => void
updateTask: ({ id }:Task) => void
}

const TaskCard = ({ task, deleteTask, updateTask }:Props) => (
  <div className="card card-body mt-2">
    <div className="row">
      <div className="col">
        <h4
          style={{ textDecoration: task.completed ? 'line-through' : '' }}
        >
          {task.title}
        </h4>
      </div>
      <div className="col">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => updateTask(task)}
        >
          {task.completed ? <FaCheckSquare /> : <FaRegTimesCircle />}
        </button>
      </div>
      <div className="col">
        <button type="button" className="btn btn-danger" onClick={() => deleteTask(task)}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  </div>
);

export default TaskCard;
