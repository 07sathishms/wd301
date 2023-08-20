import Task from "./Task";
import { TaskItem } from "./types";
interface Props {
  tasks: TaskItem[]
  removeTask: (id: number) => void
}
const TaskList = (props: Props) => {

  const { tasks, removeTask } = props

  return tasks.map((task, idx) => (
    <li className="list-none">
      <Task
  key={idx}
  task={task}
  id={idx.toString()}
  removeTask={() => removeTask(idx)}
/>

    </li>
  ));
};
export default TaskList;