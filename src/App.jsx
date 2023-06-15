import React from 'react'
import Navbar from './component/Navbar'
import Body from './component/body'
import "./index.scss"

function App() {
  return (
    // Making containers so that it looks good when it minimize
    <div className='flex align-middle justify-center'>
      <div className='max-w-[2000px] overflow-hidden relative h-[100vh] overflow-y-auto overflow-x-hidden shadow-lg'>
        <Navbar />
        <Body />
      </div>
    </div>
  )
}

export default App