import React from "react";
import './TaskCard.css';

interface TaskCardProps {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}

const TaskCard = (props:TaskCardProps) => {
  let temp : string = "";
  if(props.dueDate){
    temp = `Due on: ${props.dueDate}`;
  }else{
    temp = `Completed on: ${props.completedAtDate}`;
  }
  console.log(props);
  return (
    <div className='TaskItem'>
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>{temp}</p>
      <p>Assignee: {props.assigneeName}</p>
    </div>
  );
}

export default TaskCard;
