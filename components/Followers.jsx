import React, {useState} from 'react'
import { useRouter } from 'next/router'

function Followers() {

    const router = useRouter();

    const handleUserProfile = () => {

        router.push('/profile-detail')
    }
  return (
    <div className='followers'>
        <div className="followers__container">

            <div className="select">
                <div className="option">
                    <h3 className='active'>
                        Following
                    </h3>
                </div>
                <div className="option">
                    <h3>
                        Followers
                    </h3>
                </div>
            </div>

            <div className="users__list">
                <div className="users__list--container">
                    <div className="user__list--item">
                        <div className="user__image">

                        </div>

                        <div className="user__info">
                            <p onClick={() => handleUserProfile()}>Username 1   - Location</p>
                        </div>
                    </div>

                    <div className="user__list--item">
                        <div className="user__image">

                        </div>

                        <div className="user__info">
                            <p onClick={() => handleUserProfile()}>Username 2   - Location</p>
                        </div>
                    </div>

                    <div className="user__list--item">
                        <div className="user__image">

                        </div>

                        <div className="user__info">
                            <p onClick={() => handleUserProfile()}>Username 3   - Location</p>
                        </div>
                    </div>

                    <div className="user__list--item">
                        <div className="user__image">

                        </div>

                        <div className="user__info">
                            <p className='active' onClick={() => handleUserProfile()}>Username 4   - Location</p>
                        </div>
                    </div>

                    <div className="user__list--item">
                        <div className="user__image">

                        </div>

                        <div className="user__info">
                            <p onClick={() => handleUserProfile()}>Username 5   - Location</p>
                        </div>
                    </div>

                    <div className="user__list--item">
                        <div className="user__image">

                        </div>

                        <div className="user__info">
                            <p onClick={() => handleUserProfile()}>Username 6   - Location</p>
                        </div>
                    </div>

                    <div className="user__list--item">
                        <div className="user__image">

                        </div>

                        <div className="user__info">
                            <p onClick={() => handleUserProfile()}>Username 7   - Location</p>
                        </div>
                    </div>

                    <div className="user__list--item">
                        <div className="user__image">

                        </div>

                        <div className="user__info">
                            <p onClick={() => handleUserProfile()}>Username 8   - Location</p>
                        </div>
                    </div>

                    <div className="user__list--item">
                        <div className="user__image">

                        </div>

                        <div className="user__info">
                            <p onClick={() => handleUserProfile()}>Username 9   - Location</p>
                        </div>
                    </div>

                    <div className="user__list--item">
                        <div className="user__image">

                        </div>

                        <div className="user__info">
                            <p onClick={() => handleUserProfile()}>Username 10   - Location</p>
                        </div>
                    </div>

                    <div className="user__list--item">
                        <div className="user__image">

                        </div>

                        <div className="user__info">
                            <p onClick={() => handleUserProfile()}>Username 11   - Location</p>
                        </div>
                    </div>

                  


                </div>
            </div>
        </div>
    </div>
  )
}

export default Followers