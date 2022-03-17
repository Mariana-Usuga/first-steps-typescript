/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// import { FaCheckSquare, FaRegTimesCircle, FaTrashAlt } from 'react-icons/fa';
import { Task } from '../interfaces/Task';
import TaskCard from './TaskCard';

interface Props {
  tasks: Task[]
  deleteTask: ({ id }:Task) => void
  updateTask: ({ id }:Task) => void
}

const TaskList = ({ tasks, deleteTask, updateTask }:Props) => (
  <>
    {tasks.map((task) => (
      <div className="col-md-8">
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={() => deleteTask(task)}
          updateTask={() => updateTask(task)}
        />
      </div>
    ))}
  </>
);

export default TaskList;
