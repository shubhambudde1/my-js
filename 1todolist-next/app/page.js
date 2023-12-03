"use client";
import React, { useState } from "react";

function Page() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };
  const deleteHeader = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let renderTask = <h2> No task available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className="flex items-center justify-between">
          <div className="flex items-center justify-between mb-5 w-2/3">
            <hs className="text-2xl font-semibold">{t.title}</hs>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
          <button onClick={() => {deleteHeader(i)}} className="bg-red-400 text-white px-4 py-2 rounded font-bold mb-5">Delete</button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl text-center">
        budde shubham
      </h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter description here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5"
          type="submit"
        >
          Add Text
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}


export default Page;


