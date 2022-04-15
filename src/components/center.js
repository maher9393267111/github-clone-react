import React from 'react'
import {useState} from 'react'
import Following from './following'
import Foryou from './foryou'
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
export default function Center() {

  const [page, setPage] = useState('following')


  const [but,setbut] = useState('one')




  return (
    <div className= '   mt-[30px]  mb-[66px]  relative  ml-auto container    col-span-6'>


{/* header to switch between */}

<header className= ' ml-[30px] grid  grid-cols-12'>
<h3 className={ `col-span-3 mb-[20px]  pb-5 ${but==='one' ? 'border-b-orange-400 border-b-4':''} text-center`} onClick={() =>{  setPage('following')
setbut('one')
  }



}>following</h3>
 <h3 className={ `col-span-3 mb-[20px]  text-center ${but==='two' ? 'border-b-orange-400 border-b-4':''} `}  onClick={() => {setPage('foryou')
setbut('two')

}}>for you</h3>

 <div className='feedback mb-[20px] mr-[20px] pb-5 text-lg text-green-400 col-span-6  place-self-end'>
   <p>send Feedback</p>
 </div>

</header>

<hr/>




{/* component one  */}
<Following show={page === 'following'}/>



{/* componnet two */}
<Foryou show={page === 'foryou'}/>

    </div>
  )
}
