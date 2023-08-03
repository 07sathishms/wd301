import "./TaskCard.css";
import React from 'react'
interface TaskProp {
    title: string;
    duedate: string;
    description: string;
  }
  
class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{this.props.title}:  {this.props.duedate}
        </h2>
        <p className="text-sm text-slate-500">
        {this.props.description}
        </p>
      </div>
    );
  }
     


    }
  export default Task;