import { useEffect, useState } from "react"


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
  const [filter, setFilter] = useState("all");

  function handleInputChange(event){
    setNewTask(event.target.value);
  }

  function addTask(){

    if (newTask.trim().length == 0) {
      alert("Please enter a task");
      return true;
    }

    const _newTask = {
      id: tasks.length + 1,
      name: newTask,
      completed: false
    }

    setTasks(prevval => [...prevval, _newTask]);
    setNewTask("");
  }

  function deleteTask(taskId) {

    if(!window.confirm("delete item?")){
      return false;
    }

    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    
  }

  function clearFields() {
    let msgText = "clearFields";
    console.log(msgText);
    setNewTask("");
  }



  function toggleTaskCompletion(taskId) {
    setTasks(prevTasks =>
      prevTasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "complete") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  useEffect(()=>{

    console.log("#App::Home page load")
    
    //setTodoList(tmplist)
    //or -- spread operator -- append/include latest data 
    setTasks([...tasks])
   
    //page load [] -- 1 time
    //-- always refresh page on state update -- setTodoList , updated caused a page refresh, = endless loop page refresh
    
  },[]) //[] - run only 1 time 

    return (
      <>
        <div className="div-main">
          <h2>To-Do List</h2>
          <div> 
          <input className="user-input" type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}></input> {" "}
          <button className="add-btn" onClick={addTask}>Add</button> {" "}
          <a className="clear-btn" onClick={clearFields}>Clear</a><br/>
          </div>
          <br/>
          <div className="div-filter">
          <a href="#" onClick={(e) => {e.preventDefault(); setFilter("all"); }}>all</a> {" | "}
          <a href="#" onClick={(e) => {e.preventDefault(); setFilter("complete"); }}>complete</a> {" | "}
          <a href="#" onClick={(e) => {e.preventDefault(); setFilter("incomplete"); }}>in-complete</a> 
          </div>
          <p></p>
          <div className="div-tasks">
              {filteredTasks.map((task) =>
                <div key={task.id} className="div-tasks-2">
                  <input type="checkbox" checked={task.completed} onChange={() => toggleTaskCompletion(task.id)}></input> {" "}
                  <span>{task.name}</span> {" "}
                  <button className="delete-btn" onClick={() => deleteTask(task.id)}>x</button>
                </div>
              )}
          </div>
        </div>
      </>
    );
  }
  
  export default Home;
 