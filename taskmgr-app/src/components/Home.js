import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

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
        <div className="App">
          <header className="App-header">
          <h2>To-Do List</h2>
          <div>
          <input className="mb-3"type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}></input> {" "}
          <Button onClick={addTask} variant="success">Add</Button> {" "}
          <a className="clear-btn" onClick={clearFields}>Clear</a><br/>
          </div>
          <ToggleButtonGroup type="checkbox" value={filter} onChange={toggleTaskCompletion}>
      <ToggleButton variant="outline-light" onClick={(e) => {e.preventDefault(); setFilter("all")}}id="tbg-btn-1" value={"all"}>
        All
      </ToggleButton>
      <ToggleButton variant="outline-success" onClick={(e) => {e.preventDefault(); setFilter("complete"); }} id="tbg-btn-2" value={"complete"}>
        Complete
      </ToggleButton>
      <ToggleButton variant="outline-danger" onClick={(e) => {e.preventDefault(); setFilter("incomplete"); }} id="tbg-btn-3" value={"incomplete"}>
        Incomplete
      </ToggleButton>
    </ToggleButtonGroup>
          <p></p>
          <ListGroup variant="flush">          
              {filteredTasks.map((task) =>
                  <ListGroup.Item
                    key={task.id} 
                    style={{ marginBottom: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: "#ffffff"
                    }}>
                    <Form.Check
                     type="switch"
                     id={`task-switch-${task.id}`}
                     checked={task.completed}
                     onChange={() => toggleTaskCompletion(task.id)}
                     label=""
                     style={{ display: "inline-block", marginRight: "10px"}}/>

                  <span key={task.id} style={{'text-decoration':(task.completed)?"line-through":""}}>{task.name}</span> {" "}
                  <Button variant="danger"onClick={() => deleteTask(task.id)}>X</Button>
                  </ListGroup.Item>
              )}
          </ListGroup>
          </header>
        </div>
      </>
    );
  }
  
  export default Home;
 