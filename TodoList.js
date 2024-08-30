import React, { useState } from "react";
import "./TodoList.css";

export default function TodoList() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [Task, setTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([...Task,{title,desc}])
      setDesc("")
      setTitle("")

    };
    const deleteTask = (index) => {
        let copy = [...Task];
        copy.splice(index, 1);
        setTask(copy);
    }
    let handleTask =<h5 className="m-2">No Task Found..</h5>
        
    if (Task.length > 0) {
        handleTask =
        Task.map((task, index) => {
            return (
              <div
                key={index}
                className="flex justify-between mb-2
               bg-slate-800 w-full text-white">
                <li className="">
                  <h3 className="text-sm">Title : {task.title}</h3>
                  <h3>Description : {task.desc}</h3>
                </li>
                <button onClick={()=>deleteTask(index)} className="bg-black border-2 rounded-l-lg text-white w-16 h-10">
                  Delete
                </button>
              </div>
            );
        })
     
       
    }
    

  return (
    <>
      <h1
        className="text-white
           bg-black text-center
           text-xl bold 
            ">
        TodoList
      </h1>
      <div className="bg-slate-400 h-screen flex flex-col p-10  al border-2 border-black">
        <form className=" flex  flex-col gap-1" onSubmit={handleSubmit}>
          <label className="text-xl" htmlFor="inputField ">
            Enter Task Name :{" "}
          </label>
          <input
            id="inputField "
            type="text"
            className="border-2
                       border-black
                       text-black 
                       p-2
                       w-64
                       
                       "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Task Here.."></input>

          <label className="text-xl" htmlFor="descField">
            Enter Task Description :
          </label>
          <input
            id="descField "
            type="text"
            className="border-2
                       border-black
                       text-black 
                       p-2 h-15
                       "
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter Task Description Here.."></input>
          <button className=" border-2 rounded-lg bg-black text-white m-6 h-10 w-20 block mx-auto ">
            Submit
          </button>
        </form>
        <div className="w-full min-h-64 max-h-full m-5 border-2 border-black">
          <ul>{handleTask}</ul>
        </div>
      </div>
    </>
  );
}
