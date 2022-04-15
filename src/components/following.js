import React from 'react'
import Footer from './Footer'
export default function Following(props) {

    if (!props.show) {
        return null
      }

  return (
    <div className='Home ml-[33px] '>

<div className=' leading-normal max-w-[500px] h-[250px] mt-[30px]   border-2 border-[D0D7DE] text-start'>
    
<h1 className=' mt-[20px]  mx-auto  mr-4  ml-4 font-bold'>
Discover interesting projects and people to populate your personal news feed.
</h1>


<h2 className='mt-[20px]  mr-5 ml-5'>
Your news feed helps you keep up with recent activity on repositories you watch or star and people you follow.
</h2>





<button className="border ml-[50px] mt-[25px] border-red-600 text-red-600 font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300"> explore Github</button>


</div>



 {/* footer  */}

<Footer/>


    </div>
  )
}
