/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { FaTrashAlt } from 'react-icons/fa';
import { Task } from '../interfaces/Task';

interface Props {
task: Task;
deleteTask: (task:Task) => void
}

const TaskCard = ({ task, deleteTask }:Props) => {
  // const updateTask = (id:number) => {
  //   setTasks(tasks.map((t) => (task.id === id
  //     ? { ...task, completed: !task.completed } : task)));
  // };
  console.log('working');

  return (
    <div className="card card-body mt-2">
      <div className="row">
        <h4
          style={{ textDecoration: task.completed ? 'line-through' : '' }}
        >
          {task.title}
        </h4>
        <div className="col">
          <button
            type="button"
            className="btn btn-secondary"
          >
            completed
            {/* {task.completed ? <FaCheckSquare /> : <FaRegTimesCircle />} */}
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
};

export default TaskCard;
