import React, { useState } from 'react'
import Products from './Products'

function App() {
  var [a, b] = useState(69);
  return (
    <div className='w-full max-h-screen bg-zinc-900 text-white'>
      <Products age ="25" data ={{age:25, name:"harsh"}}/>
      

    </div>
  );
}

export default App
