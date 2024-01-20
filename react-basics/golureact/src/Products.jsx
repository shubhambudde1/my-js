import React, { useState } from 'react'

function Products({age, data}) {
    const [a, b] = useState(false);
    var [c, d] = useState(0);
  return (
    
    <div className='text-white w-full h-screen bg-zinc-600 p-60 '>
        <h4 className={`${a === false ? "text-red-600" : "text-blue-600"}`}>{a === false ? "hello" : "hey"}</h4>
        <button onClick={() => b(!a)}>change</button>
        <h2>{c}</h2>
        <button onClick={() => d(c+1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click me</button>

    </div>
  )
}


export default Products



 

