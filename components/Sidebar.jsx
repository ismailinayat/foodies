import React,{useEffect, useState} from 'react'
import { useRouter } from 'next/router';
function Sidebar() {


    const router = useRouter();

    const [selectedPage, setSelectedPage] = useState();
    
    const handleSelection = (page) => {

        
        setSelectedPage(page)

        router.push(`/${page}`)
    }

    useEffect(() => {

        console.log(router.route)
        setSelectedPage(router.route)

    }, [router.route])
  return (
    <div className="sidebar">

        <div className='sidebar__container'>

            <div className="sidebar__nav__top">
                <div className="nav__top__link">
                    {
                        selectedPage === '/home'
                        ?

                        <img src="/images/icons/home/BLACK-home-icon-64x64.svg" alt="" onClick={() => handleSelection('home')}/>
                        :
                        <img src="/images/icons/home/YELLOW-home-icon-64x64.svg" alt="" onClick={() => handleSelection('home')}/>
                    }
                </div>

                <div className="nav__top__link">
                    {
                        selectedPage === '/recipes'
                        ?

                        <img src="/images/icons/find-recipe/BLACK-find-recipes-icon-64x64.svg" alt="" onClick={() => handleSelection('recipes')} />
                        :
                        <img src="/images/icons/find-recipe/YELLOW-find-recipes-icon-64x64.svg" alt="" onClick={() => handleSelection('recipes')} />
                    }
                </div>

                <div className="nav__top__link">

                    {
                        selectedPage === '/cookbook'
                        ?
                        <img src="/images/icons/menu/BLACK-menu-icon-64x64.svg" alt="" onClick={() => setSelectedPage('cookbook')} />
                        :
                        <img src="/images/icons/menu/YELLOW-menu-icon-64x64.svg" alt="" onClick={() => setSelectedPage('cookbook')} />
                    }
                </div>

                <div className="nav__top__link">
                    <img src="/images/icons/YELLOW-profile-icon.png" alt=""/>
                </div>
            </div>

            <div className="sidebar__nav__bottom">

            <div className="nav__top__link">

                {
                    selectedPage==='/profile'
                    ?

                    <img src="/images/icons/my-profile/BLACK-my-profile-icon-64x64.svg" alt="" onClick={() => handleSelection('profile')} />
                    :
                    <img src="/images/icons/my-profile/YELLOW-my-profile-icon-64x64.svg" alt="" onClick={() => handleSelection('profile')} />
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar