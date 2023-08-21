import Task from "./Task";
import { TaskItem } from "./types";

interface TaskListProps {
  tasks: TaskItem[];
  deleteTask: (task: TaskItem) => void;
}

const TaskList = (props: TaskListProps) => {
  const { deleteTask } = props;
  const list = props.tasks.map((task) => (
    <li>
      <Task item={task} deleteTask={deleteTask} />
    </li>
  ));
  return (
    <>
      <ul>{list}</ul>
    </>
  );
};
export default TaskList;
