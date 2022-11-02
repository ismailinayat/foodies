import React from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Page2Bottom from '../components/Page2Bottom'


function Page2() {
  return (
    <div className='page1'>

        <div className="page1__left">
            <Sidebar></Sidebar>
        </div>

        <div className="page1__mid">

            <Topbar links={[{text: 'Overview'}, {text: 'Ingredients'}, {text: 'Directions'}, {text: 'Notes'}]}></Topbar>
            <Page2Bottom></Page2Bottom>
        </div>

        <div className="page1__right">

            <div className="page1__right--container">

                <div className="page1__right--container--heading">
                    <h3>
                        Short Recipe in large font for ease of viewing (Translator)
                    </h3>
                </div>
                <div className="page1__right--container--para">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti natus sapiente velit beatae ex rerum aut nihil. Facere autem ex quisquam repellat illo in dicta, nulla dolore voluptates, officiis quasi, dolor nesciunt ea cum quia qui accusantium vero voluptatum</p>                
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti natus sapiente velit beatae ex rerum aut nihil. Facere autem ex quisquam repellat illo in dicta, nulla dolore voluptates, officiis quasi, dolor nesciunt ea cum quia qui accusantium vero voluptatum</p>                
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti natus sapiente velit beatae ex rerum aut nihil. Facere autem ex quisquam repellat illo in dicta, nulla dolore voluptates, officiis quasi, dolor nesciunt ea cum quia qui accusantium vero voluptatum</p>                
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page2