/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Task } from '../interfaces/Task';

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  <div className="col-sm-6">
    <h4
      style={{ textDecoration: task.done ? 'line-through' : '' }}
    >
      {task.newTask}
    </h4>
    {/* <div className="col">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => updateTask(i)}
            >
              {task.done ? <FaCheckSquare /> : <FaRegTimesCircle />}
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-danger" onClick={() => deleteTask(i)}>
              <FaTrashAlt />
            </button>
          </div> */}
  </div>;
};

export default TaskCard;
