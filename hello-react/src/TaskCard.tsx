import React from "react";
import './TaskCard.css';

interface TaskCardProps {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}

const TaskCard: React.FC<TaskCardProps> = (props: TaskCardProps) => {
  console.log(props);
  return (
    <div className='TaskItem'>
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>{props.dueDate}</p>
      <p>{props.completedAtDate}</p>
      <p>{props.assigneeName}</p>
    </div>
  );
}

export default TaskCard;
