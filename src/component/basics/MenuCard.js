import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
  return (
    <>
    <div className="main-card--cointainer">

        {
            menuData.map((curElem) =>{
                const { id, image, name, category, price, description} = curElem;

                return(
                    <>
                    <div className="card_container" key={id}>
                        <div className="card">
                            <div className="card-body">
                                <span className="card-number card-circle subtle">{id}</span>
                                <span className="card-author subtle">{category}</span>
                                <h2 className="card-title">{name}</h2>
                                <span className="card-description subtle">
                                {description}

                                </span>
                                <div className="card-read">Read</div>
                            </div>
                            <img src={image} alt="images" className='card-media' />
                            <p><span className="card-tag subtle">Order Now</span></p>
                        </div>
                    </div>
                    </>
                )
            })
        }
    </div>
    </>
  )
}

export default MenuCard