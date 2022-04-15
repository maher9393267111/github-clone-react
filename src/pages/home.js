import React from 'react'
import Sidebar from '../components/sidebar'
import Center from '../components/center'
import Rightbar from '../components/rightBar'
export default function home() {
  return (
    <div className='home'>

<div className='container grid grid-cols-12'>
    




{/* // 🟩 sidebar component */}

<Sidebar/>




{/* //  🟩 center componnent  switch */}

<Center/>




{/* // 🟩 right side component */}

<Rightbar/>


</div>

    </div>
  )
}
