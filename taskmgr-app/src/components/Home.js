import { useRef,useState } from "react"


const initial_todo_items = [
    {id:1,name:"item one", completed:false},
    {id:2,name:"item two", completed:false},
    {id:3,name:"item three", completed:true},
    {id:4,name:"item four", completed:false},
    {id:5,name:"item five", completed:false}
    ];
     
const divDisplay = useRef("")

divDisplay.innerHTML = initial_todo_items.map(item => `<p>${item.name}</p>`).join('');


function Home() {
    return (
      <>
        <h2>To-Do List</h2> 
        <input></input> {" "}
        <button>Add</button> {" "}
        <a>Clear</a><br/>
        <p></p>
        <div ref={divDisplay}>
            
        </div>
      </>
    );
  }
  
  export default Home;
  