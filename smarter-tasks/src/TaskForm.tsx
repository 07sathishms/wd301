import React from "react";
import { TaskItem } from "./type";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
    title: string;
    duedate: string,
    description: string
  }
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
          title: "",
          duedate: "",
          description: ""
        }

      }
      addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newTask = {
          title: this.state.title,
          duedate: this.state.duedate,
          description: this.state.description
        };
        this.props.addTask(newTask);
        this.setState({ title: "", duedate: "",
        description: "" });
      };
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value ,
});
  }
dateChanged:React.ChangeEventHandler<HTMLInputElement>  = (event) => {
  console.log(`${event.target.value}`);
  this.setState({ duedate: event.target.value ,
});
}
descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  console.log(`${event.target.value}`);
  this.setState({ description: event.target.value ,
});
  };
  
  render(){
    return (
        <form onSubmit={this.addTask}>
        <input id="todoTitle" type="text" value={this.state.title} onChange={this.titleChanged}/>
        <input id="todoDueDate" type="date" value={this.state.duedate} onChange={this.dateChanged}/>
        <input id="todoDescription" type="text" value={this.state.description} onChange={this.descriptionChanged}/>
        <button id="addTaskButton" type="submit">Add item</button>
      </form>     
    )
  }
}
 export default TaskForm;