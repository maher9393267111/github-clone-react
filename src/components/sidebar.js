import React from 'react'
import Data from './data'
// <i class="fa-solid fa-user"></i>
export default function sidebar() {

  console.log(Data)
  return (
  
    <div className='col-span-3 h-[100vh]  overflow-y-scroll '>

  {/* // ----this ----      */}

  


      <div className ='container mt-[30px]'>
       
<header className='header-container ml-[20px]'>


 {/* text div  */}
<div className='sec-one grid grid-cols-2 ml-[6px]'>
  <div className='text-cont text-center'>
  <h4 className='ml-[15px]  font-bold text-lg h4  w-[50%] '> Recent Repository</h4>
  </div>
 
  <div className='btn-container  mr-[10px]'>
  <button type="submit " className=' btn p-[3px]  text-white  bg-green-500 text-lg font-bold'>New</button>

  </div>

</div>

 {/* input div*/}

<div className='input-contaner mt-[20px]'>
  
<input  className='col-span-10 h-[40px]  rounded-md text-white font-semibold  bg-[#c2cad1]      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      
      invalid:border-pink-500 ' placeholder='    find  repository' type="" name="" />


</div>


<div>
  
</div>



</header>


{/* map profiles */}

<div className='profile-container '>
  
{Data.map((item) => {
          return <div className='grid grid-cols-12 ml-[15px] mb-[17px]'  key={item.name} > 
          
          <div className ='col-span-3'>
            {item.icon}
          </div>

          <div className='col-span-9 text-lg      font-normal'>
            {item.name}
          </div>
          
          
           </div>

            
        })}


</div>


      </div>
      
      
      
      
      
      
      
      
      </div>
  )
}
