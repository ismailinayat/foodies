import React from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Page1Bottom from '../components/Page1Bottom'
function Page1() {
  return (
    <div className='page1'>

        <div className="page1__left">
            <Sidebar></Sidebar>
        </div>

        <div className="page1__mid">

            <Topbar links={[{text: 'Overview'}, {text: 'Ingredients'}, {text: 'Directions'}, {text: 'Notes'}]}></Topbar>
            <Page1Bottom></Page1Bottom>
        </div>

        <div className="page1__right">
            
        </div>
    </div>
  )
}

export default Page1