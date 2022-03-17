/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// import { FaCheckSquare, FaRegTimesCircle, FaTrashAlt } from 'react-icons/fa';
import { Task } from '../interfaces/Task';
import TaskCard from './TaskCard';

interface Props {
  tasks: Task[]
  deleteTask: (task:Task) => void
}

const TaskList = ({ tasks, deleteTask }:Props) => (
  <>
    {tasks.map((task) => (
      <div className="col-md-4">
        <TaskCard task={task} deleteTask={() => deleteTask(task)} />
      </div>
    ))}
  </>
);

export default TaskList;
