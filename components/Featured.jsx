import React from 'react'

function Featured() {
  return (
    <div className='featured'>
        <div className="featured__container">

            <div className="featured__container--top">
                <div className="featured__heading">
                    <p>Featured </p>
                </div>

                <div className="featured__top--content">

                    <div className="feature">
                        <img src="" alt="" />
                        <p>Recipes</p>
                    </div>

                    <div className="feature">
                        <img src="" alt="" />
                        <p>Cookbooks</p>
                    </div>

                    <div className="feature">
                        <img src="" alt="" />
                        <p>Translations</p>
                    </div>

                    <div className="feature">
                        <img src="" alt="" />
                        <p>Settings</p>
                    </div>

                </div>
            </div>

            <div className="featured__container--mid">
                <div className="featured__heading">
                    <p>Following </p>
                </div>

                <div className="featured__mid--content">
                    <div className="feature">
                        <img src="" alt="" />
                        <p>Gift</p>
                    </div>

                    <div className="feature">
                        <img src="" alt="" />
                        <p>recipes</p>
                    </div>
                </div>
            </div>

            <div className="featured__container--bottom">
                <div className="featured__heading">
                    <p>Hardcore printing services</p>
                </div>

                <div className="featured__bottom--content">
                    <div className="feature">
                       
                        <p>AdRotate</p>
                        <p>shortcode</p>
                        <p>(wordpress plugin)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured