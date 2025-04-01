import { useRef,useState } from "react"


const initial_todo_items = [
    {id:1,name:"item one", completed:false},
    {id:2,name:"item two", completed:false},
    {id:3,name:"item three", completed:true},
    {id:4,name:"item four", completed:false},
    {id:5,name:"item five", completed:false}
    ];
     


function Home() {

  const [tasks, setTasks] = useState([]);
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

  function clearFields() {
    let msgText = "clearFields";
    console.log(msgText);
    setNewTask("");
  }

    return (
      <>
        <div className="div-main">
          <h2>To-Do List</h2>
          <div> 
          <input className="user-input" type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}></input> {" "}
          <button className="add-btn" onClick={addTask}>Add</button> {" "}
          <a onClick={clearFields}>Clear</a><br/>
          </div>
          <p></p>
          <div className="div-tasks">
              {tasks.map((task, index) =>
                <li key={index}>
                  <span>{task}</span> {" "}
                  <button className="delete-btn"onClick={() => deleteTask(index)}>x</button>
                </li>
              )}
          </div>
        </div>
      </>
    );
  }
  
  export default Home;
  