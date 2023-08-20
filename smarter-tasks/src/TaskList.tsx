import Task from "./Task";
import { TaskItem } from "./types";
interface Props {
  tasks: TaskItem[]
  deleteTaskButton: (id: number) => void
}

const TaskList = (props: Props) => {
  return props.tasks.map((task, idx) => (
    <li className="list-none">
      <Task
        key={task.title}
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
        deleteTaskItem={() => { props.deleteTaskButton(idx) }}
      />
    </li>
  ));
};





export default TaskList;