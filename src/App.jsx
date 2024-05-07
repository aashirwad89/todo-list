"use client"
import React, { useState } from 'react'

function App() {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
   e.preventDefault()
   setmainTask([...mainTask, {title, desc}]);
   settitle("");
   setdesc("");
   console.log(mainTask);
  };

  const  deleteHandler = (i) =>{
           let copyTask = [...mainTask]
           copyTask.splice(i,1);
           setmainTask(copyTask);
  }

  let renderTask = <h2>No Task Available</h2>;

  if(mainTask.length>0){
    renderTask = mainTask.map((t, i ) => {
      return (
       <li key={i} className='flex items-center justify-between mb-5 '>
         <div className='flex items-center justify-between w-2/3'>
       <h5 className='text-2xl font-bold'>{t.title}</h5>
       <p className='text-xl '>{t.desc}</p>
      </div>
      <button onClick={() => {
        deleteHandler(i);
      }}
       className='bg-red-700 text-white px-4 rounded-md font-semibold py-2 '>Delete Task</button>
       </li>
      );
     })
  }
  
  
  return (
    <>
    <h1 className='bg-black text-white text-6xl p-5 font-bold text-center'>My Todo List</h1>
    <form onSubmit={submitHandler}>
      <input type="text" className='text-2xl  border-zinc-500 p-2 m-3 border-2 rounded '
      placeholder='Enter Your Task Here'
      value={title}
      onChange={(e) => {
      settitle(e.target.value)
      }}
        />
        <input type="text" className='text-2xl  border-zinc-500 p-2 m-3 border-2 rounded '
      placeholder='Enter Description Here'
      value={desc}
      onChange={(e) => {
        setdesc(e.target.value)
        }}
        />
        <button className='border-zinc-800 text-xl m-5 px-4 py-2 font-bold border-2 rounded-xl bg-black text-white'>Add Task</button>
    </form>
    <hr />
    <div className='p-8 bg-slate-200 text-black'>
    <ul>{renderTask}</ul>
    </div>
  
    </>
  )
}

export default App
