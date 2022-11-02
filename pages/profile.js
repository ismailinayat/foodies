import React from 'react'
import Sidebar from '../components/Sidebar'
import Featured from '../components/Featured'
import Followers from '../components/Followers'
function Page5() {
  return (
    <div className='page1'>

        <div className="page1__left">
            <Sidebar></Sidebar>
        </div>

        <div className="page1__mid">

           <Followers></Followers>
           
        </div>

        <div className="page1__feature">
            <div className='placeholder'>
            </div>
            <Featured></Featured>
        </div>
    </div>
  )
}


export default Page5