import React from 'react'

function UserProfile() {
  return (
    <div className='userprofile'>

        <div className="userprofile__left">

            <div className="top">
                <h3>
                    Recipes
                </h3>
                <h3>Cookbooks</h3>
            </div>

            <div className="bottom">
                <div className="recipes__container">
                    <div className="recipe">

                    </div>

                    <div className="recipe">
                        
                        </div>

                        <div className="recipe">
                        
                        </div>

                        <div className="recipe">
                        
                        </div>

                        <div className="recipe">
                        
                        </div>

                        <div className="recipe">
                        
                        </div>

                        <div className="recipe">
                        
                        </div>

                        <div className="recipe">
                        
                        </div>

                        <div className="recipe">
                        
                        </div>
                        <div className="recipe">
                        
                        </div>

                        <div className="recipe">
                        
                        </div>

                        <div className="recipe">
                        
                        </div>
                        <div className="recipe">
                        
                        </div>

                        <div className="recipe">
                        
                        </div>

                        <div className="recipe">
                        
                        </div>
                </div>
            </div>
        </div>

        <div className="userprofile__right">

            <div className="user__image">

            </div>

            <div className="user__info--container">

                <div className="user__info ">
                    <h3 className='name'>
                        username__4
                    </h3>
                </div>

                <div className="user__info">
                    <h3>
                        Location
                    </h3>
                </div>

                <div className="user__info">
                    <h3>
                        Profile bio
                    </h3>
                </div>
            </div>

            <div className="unfollow__button">
                <button className='btn btn--red btn--button'>Unfollow</button>
            </div>

            <div className="users__popular__recipes">
                <p>
                    Most Popular recipe by this User
                </p>
            </div>
        </div>
    </div>
  )
}

export default UserProfile