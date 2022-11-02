import React from 'react'
import Sidebar from '../components/Sidebar'
import Featured from '../components/Featured'
import MyRecipes from '../components/MyRecipes'
function Page4() {
  return (
    <div className='page1'>

        <div className="page1__left">
            <Sidebar></Sidebar>
        </div>

        <div className="page1__mid">

            <MyRecipes></MyRecipes>
           
        </div>

        <div className="page1__feature">
            <div className='placeholder'>
            </div>
            <Featured></Featured>
        </div>
    </div>
  )
}


export default Page4