import React from 'react'

function Topbar({links}) {
  return (
    <div className='topbar'>
        <div className="topbar__container">
            {
                links && links.length && links.map((link) => {

                    return (
                        <div className='topbar__link'>
                            <p className='link__text'>{link.text}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Topbar