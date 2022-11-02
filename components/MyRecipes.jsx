import React from 'react'

function MyRecipes() {
  return (
    <div className='myrecipes'>

        <div className="container">

            <div className="title">
                <h3>My Recipes</h3>
            </div>

            <div className="myrecipes__nav">

                <div className="myrecipes__nav--item">
                    <h3 className='active'>Created</h3>
                </div>
                <div className="myrecipes__nav--item">
                    <h3>Purchased</h3>
                </div>
                <div className="myrecipes__nav--item">
                    <h3>Modified by me</h3>
                </div>
                <div className="myrecipes__nav--item">
                    <h3>Modified by other</h3>
                </div>
            </div>

            <div className="myrecipes__filter">
                <div className="filter--item">
                    <p>All:</p>
                </div>

                <div className="filter--item">
                    <p>Modify</p>
                </div>

                <div className="filter--item">
                    <p>Hide on profile</p>
                </div>

                <div className="filter--item">
                    <p>Show on profile</p>
                </div>
                <div className="filter--item">
                    <p>Download</p>
                </div>
            </div>

            <div className="myrecipes__list--container">

                <div className="list">

                    <div className="list__item">
                        <li>Lorem ipsum dolor sit amet consectetur </li>
                    </div>
                    <div className="list__item">
                        <li></li>
                    </div>
                    <div className="list__item">
                        <li></li>
                    </div>
                    <div className="list__item">
                        <li></li>
                    </div>
                    <div className="list__item">
                        <li></li>
                    </div>
                    <div className="list__item">
                        <li></li>
                    </div>
                    <div className="list__item">
                        <li></li>
                    </div>
                    <div className="list__item">
                        <li></li>
                    </div>
                    <div className="list__item">
                        <li></li>
                    </div>
                    <div className="list__item">
                        <li></li>
                    </div>
                    <div className="list__item">
                        <li></li>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyRecipes