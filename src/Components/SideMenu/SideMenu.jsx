import React, {useState} from 'react'
import './SideMenu.css';

const SideMenu = () => {
    const [inactive, setInactive] = useState(false);

    return (
       <div className={`side-menu ${inactive ? "inactive": ""}`}>
            <div className='top-section'>
                <div className='logo'>
                    <img alt ='' src='https://i.pinimg.com/originals/77/e3/02/77e302b073023e88f74a820fd54df6a1.jpg'/>
                </div>

                <div 
                onClick={()=> setInactive(!inactive)}className='toggle-button'>
                    {inactive ? (<i className="bi bi-arrow-right-square-fill"></i>): (<i className="bi bi-arrow-left-square-fill"></i>
                    )}
                </div>
            </div>

            <div className='divider'>
            </div>
        </div>
    )
}

export default SideMenu
