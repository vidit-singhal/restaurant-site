import React from 'react'

const Navbar = ({FilterItem, menuList}) => {
  return (
    <>
     <nav className="navbar">
        <div className="btn-group">
            {
                menuList.map((curElem) => {
                    return(
                        <button className="btn-group__item" onClick={() => FilterItem(curElem)}>{curElem}</button>

                    )
                })
            }
          {/* <button className="btn-group__item" onClick={() => FilterItem("breakfast")}>Breakfast</button>
          <button className="btn-group__item" onClick={() => FilterItem("lunch")} >Lunch</button>
          <button className="btn-group__item" onClick={() => FilterItem("evening")}>Evening</button>
          <button className="btn-group__item" onClick={() => FilterItem("dinner")}>Dinner</button>
          <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar