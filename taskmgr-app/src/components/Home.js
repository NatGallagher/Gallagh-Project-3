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
  const [todolist, setTodoList] = useState(null);

  function handleInputChange(event){
    setNewTask(event.target.value);
  }

  function addTask(){

    if (newTask.trim().length == 0) {
      alert("Please enter a task");
      return true;
    }

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

  const handleAll = (e) => {

    e.preventDefault();

    const filteredlist = tasks;
      
    setTodoList(filteredlist);
  }

   const handleComplete = (e) => {

    e.preventDefault();

    const filteredlist = tasks.filter((item)=>{
        return item.completed
    })

    setTodoList(filteredlist);
  }

   const handleIncomplete = (e) => {

      e.preventDefault();
  
      const filteredlist = tasks.filter((item)=>{
          return !item.completed
      })

      setTodoList(filteredlist);
  }

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
          <a href="#" onClick={handleAll}>all</a> {" | "}
            <a href="#" onClick={handleComplete}>complete</a> {" | "}
            <a href="#" onClick={handleIncomplete}>in-complete</a> 
          </div>
          <p></p>
          <div className="div-tasks">
              {tasks.map((task, index) =>
                <div key={index}>
                  <input type="checkbox" checked={task.completed}></input> {" "}
                  <span>{task}</span> {" "}
                  <button className="delete-btn"onClick={() => deleteTask(index)}>x</button>
                </div>
              )}
          </div>
        </div>
      </>
    );
  }
  
  export default Home;
  