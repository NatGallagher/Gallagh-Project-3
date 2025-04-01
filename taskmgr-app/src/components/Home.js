import { useRef,useState } from "react"


const initial_todo_items = [
    {id:1,name:"item one", completed:false},
    {id:2,name:"item two", completed:false},
    {id:3,name:"item three", completed:true},
    {id:4,name:"item four", completed:false},
    {id:5,name:"item five", completed:false}
    ];
     


function Home() {

  const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Feed Luna"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event){
    setNewTask(event.target.value);
  }

  function addTask(){
    setTasks(prevval => [...prevval, newTask]);
    setNewTask("");
  }

  function deleteTask(index) {

    if(!window.confirm("delete item?")){
      return false;
    }

    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    
  }

    return (
      <>
        <h2>To-Do List</h2> 
        <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}></input> {" "}
        <button onClick={addTask}>Add</button> {" "}
        <a>Clear</a><br/>
        <p></p>
        <div>
            {tasks.map((task, index) =>
              <li key={index}>
                <span>{task}</span>
                <button onClick={() => deleteTask(index)}>X</button>
              </li>
            )}
        </div>
      </>
    );
  }
  
  export default Home;
  