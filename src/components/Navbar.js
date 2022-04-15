import React, { useState } from "react";
import Modal from 'react-modal';


const customStyles = {
  content: {
    background:'white',
    width:'500px',
    boxShadow: '10px ',
    height:'400px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


export default function Navbar() {
  const [more, setmore] = useState(false);
const [open ,setopen] = useState(false)
  const [show, setshow] = useState(false);

  const [avatarshow,setavatar] = useState(false);

  const changeme = () => setmore(true);
  console.log("clicked me", more);

  const showme = () => setshow(!show);
  console.log("clicked show", show);





  const openModal=()=> {
    setopen(!open);
  }


// close modal
function closeModal() {
  setopen(false);
}



  return (
    <div className="page-containe bg-gray-600 h-[105px]   ">
      <div className="container1 grid grid-cols-12">
        {/* left section */}

        <div
          className={`  duration-75  transition-all  ease-in-out delay-150 left-section ${
            more ? "col-span-6" : "col-span-4"
          } col-span-4 grid grid-cols-12 ml-[40px] mt-[20px]`}
        >
          <p className="mt-[10px]  col-span-3">
            <svg
              className="octicon octicon-mark-github v-align-middle bg-white h-[50px] w-[50px]  rounded-2xl"
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </p>
          <div
            onClick={changeme}
            className={`input-container rounded-lg ${
              more ? "text-black bg-white" : "bg-black text-white"
            }  text-white bg-black grid grid-cols-6  col-span-9 border-2 border-black `}
          >
            <input
              className={` col-span-4 outline-none ${
                more ? "bg-white" : "bg-black"
              } `}
              placeholder="serach input"
              type="text"
            />

            <p className="icon-container relative top-2">{/* icone */}</p>
          </div>
        </div>

        {/* middle section */}

        <div
          onClick={() => setmore(false)}
          className={`middle-section ${
            more ? "col-span-3" : "col-span-5"
          }  flex justify-center items-center mt-[10px] `}
        >
          <ul className=" mt-[14px]  text-lg  font-bold grid grid-cols-4 w-[100%] mt-10px text-white">
            <li>pull request</li>
            <li>issues</li>
            <li>marketplace</li>
            <li>Home</li>
          </ul>
        </div>

        {/* 
right section */}

        <div className="right-section col-span-3 h-[100%]">
          <div className="  h-[100%] align-middle w-[100%] grid grid-cols-12">
            {/* one  */}
            <div className="align-middle relative col-span-4  justify-between mt-auto mb-auto">
              <p className="group  mt-[20px]">
                <i className="fa-solid  text-xl text-white fa-bell"></i>
              </p>

              <div className=" group absolute  group-hover:visible text-white ">
                <p className=" bg-black invisible group-hover:visible">
                  hello maher
                </p>
              </div>
            </div>

            {/* two */}
            <div className="col-span-4 m-auto">
              <p onClick={showme} className="mt-[20px] relative">
                <i className="fa-solid  text-xl text-white fa-circle-arrow-down"></i>

                <div
                  className={`  ${
                    show ? "" : "hidden"
                  }  text-left absolute   top-[50px]  bg-slate-200  right-[5px]  w-[175px] h-[200px]`}
                >
                  <ul className="mt-[7px]  font-bold text-lg  ml-[8px]">
                    <li className="mt-[10px]">New repository</li>
                    <li className="mt-[10px]">import repository</li>
                    <li className="mt-[10px]">new gist</li>
                    <li className="mt-[10px]">new oganization</li>
                    <li className="mt-[10px]">new project</li>
                  </ul>
                </div>
              </p>
            </div>

            {/* three */}

            <div className=" relative col-span-4 relative top-2 grid grid-cols-2  m-auto">
              <p>
                <img  onClick={()=>setavatar(!avatarshow)}
                  className="avatar rounded-2xl h-16   coverage w-16"
                  src="https://th.bing.com/th/id/OIP.3TVPW-wuYOo--tYKAhP0aQHaEK?pid=ImgDet&rs=1"
                  alt=""
                />
              </p>

              <p className="mt-5">
                <i className="fa-solid    text-xl text-white fa-circle-arrow-down"></i>
              </p>

{/* hidden absolute div */}

<div className={ `absolute ${avatarshow ? '' : 'hidden'}  right-[50px] top-[80px]  w-[220px] h-[300px]  bg-green-200`}>
  
<header className ='   font-medium text-lg mt-[15px]'>
  <h4>signed as</h4>
  <h5>gomemahero@gmail.com</h5>
</header>

<hr/>

<div>
<h4 onClick={openModal} className='border-2 border-blue-700'>show Modal </h4>

<div className='modal-container'>
<Modal
      isOpen={open}
      portalClassName="modal-sm modal-dialog modal-dialog-centered"
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
 
 <div className ='bg-[#f6f8fa] h-[50px]'>
   

<header className='header      grid grid-cols-2      '>
  
  <div className=' mt-[3px]  ml-[10px] font-bold text-lg start'>
    Edit Status
  </div>

<div onClick={openModal} className=' mt-[3px]  mr-[40px] close-icon-container  place-self-end'>
<i class="fa-solid  text-lg fa-xmark"></i>
</div>


</header>

{/* 
main section */}

<div className='main-container  mt-[50px]'>
  
<div className='input-section  h-[57px] border-2 border-slate-300 grid grid-cols-12'>

<div className='icon-sub text-center align-middle relative col-span-2'>
  <p className='h-[22px] w-[20px]  absolute  top-[10px]   left-2 bg-black  rounded-2xl' ></p>
</div>

<input  className='col-span-10       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      
      invalid:border-pink-500 ' placeholder='      search Here' type="" name="" />



</div>



</div>




</div>
<hr/>

</Modal>

</div>
</div>


</div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
