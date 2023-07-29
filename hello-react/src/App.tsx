import React from "react";
import TaskCard from "./TaskCard";

interface TaskProps {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}

function App(): JSX.Element {
  return (
    <div className="ml-20 flex items-center">
      <div className="text-xl rounded-md border-gray-400 bg-slate-100">
        <h1>Pending</h1>
        <TaskCard
          title="Build the website with static content"
          dueDate="Due on: 10th April"
          assigneeName="Assignee: Rohit S"
        />
        <TaskCard
          title="Add a blog"
          dueDate="Due on: 22nd March"
          assigneeName="Assignee: Rohit M"
        />
      </div>
      <div className="ml-20 text-xl rounded-md border-gray-400 bg-slate-100">
        <h1>Done</h1>
        <TaskCard
          title="Design the mockup"
          completedAtDate="Completed on: 10th April"
          assigneeName="Assignee: Rohit M"
        />
        <TaskCard
          title="Get the approval from principal"
          completedAtDate="Completed on: 20th April"
          assigneeName="Assignee: Ajay S"
        />
      </div>
    </div>
  );
}

export default App;
