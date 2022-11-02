import React from 'react'
import Sidebar from '../components/Sidebar'
import Featured from '../components/Featured'
import UserProfile from '../components/UserProfile'
function Page6() {
  return (
    <div className='page1'>

        <div className="page1__left">
            <Sidebar></Sidebar>
        </div>

        <div className="page1__mid">
            <UserProfile></UserProfile>
        </div>

        <div className="page1__feature">
            <div className='placeholder'>
            </div>
            <Featured></Featured>
        </div>
    </div>
  )
}


export default Page6