import TaskCard from "./TaskCard";

function App(){
  return(
    <div>
      <div> 
         <h1>Pending</h1>
         <TaskCard title="Build the website with static content" 
         date="Due on: 10th April"
         name="Assignee: Rohit S"/>
         <TaskCard title="Add a blog"
          date="Due on: 22nd March"
          name="Assignee: Rohit M"/>
         </div>
    <div>
      <h1>Done</h1>
      <TaskCard title="Design the mockup"
      date="Due on: 10th April"
      name="Assignee: Rohit M"

      />
      <TaskCard title="Get the approval from principal"
       date="Due on: 20th April"
       name="Assignee: Ajay S"/>
         
    </div>
      </div>
  )
}
export default App;