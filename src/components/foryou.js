import React from 'react'
import Footer from './Footer'
import { useState } from 'react'

export default function Foryou(props) {

  const [open, setopen] = useState('false')


  const openme =()=>{
    setopen(!open)
    console.log(open)
  }


    if (!props.show) {
        return null
      }

  return (
    <div>

<div  className='container mt-[40px]  ml-[30px]'>
  
<header>
  
  {/* one */}

<div className=' grid grid-cols-12 mb-[30px]' >



   {/* ---------1----  one logo --------  */}


<div className=' relative image-contrainer col-span-2'>


  

<img className='image w-[50px] h-[50px]' src='https://avatars.githubusercontent.com/u/887802?s=64&v=4' />
<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="absolute  text-green-400 top-[40px]  left-[43px] octicon octicon-feed-tag circle feed-item-heading-icon color-fg-success position-absolute bottom-0">
    <path d="M7.22 6.5a.72.72 0 11-1.44 0 .72.72 0 011.44 0z"></path><path fill-rule="evenodd" d="M8 16A8 8 0 108 0a8 8 0 000 16zM4 8.379V5a1 1 0 011-1h3.379a1.5 1.5 0 011.06.44l3.213 3.211a1.2 1.2 0 010 1.698l-3.303 3.303a1.2 1.2 0 01-1.698 0L4.44 9.439A1.5 1.5 0 014 8.38z"></path>
</svg>




</div>


 {/* -----------2---- text logo ---------  */}

<div className='col-span-8'>
<span className='mt-[10px]  relative top-[23px] font-bold  text-lg '>
Automattic published a release
 · 
21h</span>


</div>

 



{/* three ---------- */}
<div className='col-span-2 relative'>

<span  onClick={openme}>
<svg aria-label="feed item heading menu" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-kebab-horizontal feed-item-heading-menu-button m-1 mx-3">
    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>
</span>

  {/* ----------- absolute section ----------  */}


{open && <div className='  right-[90px] z-[100]  bg-[aliceblue] absolute border-2 border-b-slate-600  w-[300px]  h-[150px]'>
  
<div className= ' mb-[20px] mt-[20px]'>
  <p className='mb-[20px]'>
  You're seeing this because you starred Automattic/mongoose
  </p>

<hr/>

 {/* ------- section 2 in absolute --------  */}
<div>
  <p> 

<span className='w-[80px] grid grid-cols-2 mt-[10px] text-lg font-bold  ml-[10px]'>
<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon relative w-[50px] top-[10px] octicon-report mr-2">
    <path fill-rule="evenodd" d="M1.75 1.5a.25.25 0 00-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h6.5a.25.25 0 00.25-.25v-9.5a.25.25 0 00-.25-.25H1.75zM0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0114.25 13H8.06l-2.573 2.573A1.457 1.457 0 013 14.543V13H1.75A1.75 1.75 0 010 11.25v-9.5zM9 9a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
<span>
Report
</span>


</span>

  </p>
</div>



</div>

</div> 
}




</div>

</div>









</header>

{/* ----------- headerend -------  */}




 {/* --------- card section  start--------- */}

 <div className='container mb-[30px]   '>
  
  <div className='grid grid-cols-12  border-2 border-[D0D7DE]  w-[479px] h-[450px] mt-[10px]'>
  

  {/* --- first section in card---  */}
  
<div className='first-container w-[100%]  border-b-2 mt-[20px] ml-[30px] mb-[20px]'>
  
  {/* one */}
  <div className=' grid grid-cols-12 w-[340px]  '>
    
    <img className=' inline-block w-[40px]  col-span-3  object-cover  h-[40px]' src="https://avatars.githubusercontent.com/u/887802?s=40&v=4" alt=""/>

<h3 className='col-span-9  font-bold text-lg  relative left-[-20px]'>Automattic / mongoose</h3>


  </div>

{/* two  */}

<div className='mt-[33px] font-bold text-2xl'>
  
<h1>6.3.0</h1>

</div>


{/* three */}

<div className=' mt-[30px] w-[400px] font-bold text-2xl'>
  
<h1>6.3.0 / 2022-04-14</h1>

</div>




</div>

  {/* first section end */}


<hr/>

  
  </div>
  
  </div>







</div>




<Footer/>

    </div>
  )
}
