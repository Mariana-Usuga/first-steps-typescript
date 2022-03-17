/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-array-index-key */
// import { FaCheckSquare, FaRegTimesCircle, FaTrashAlt } from 'react-icons/fa';
import { Task } from '../interfaces/Task';
import TaskCard from './TaskCard';

interface Props {
  tasks: Task[]
}

const TaskList = ({ tasks }:Props) => (
  <>
    {tasks.map((task, i:number) => (
      <div key={i} className="card card-body mt-2">
        <div className="row">
          <TaskCard task={task} />
        </div>
      </div>
    ))}
  </>
);

export default TaskList;
