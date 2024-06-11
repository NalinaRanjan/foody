import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
    return (
        <div className='explore-menu' id="explore-menu">
            <h2>Explore Our Menu</h2>
            <p className='explore-menu-text'>
                Choose from a diversing menu featuring a delectable array of dishes. Our Mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
            </p>
            <div className='explore-menu-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick ={()=>setCategory(prev=>prev === item.menu_name?"ALL":item.menu_name)} data-attr={category} key={index} className='explore-menu-list-item'>
                            <img className = {category === item.menu_name?"active":""}  src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>)
                })}

            </div>

            <hr />
        </div>
    )
}

export default ExploreMenu
