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

            <div className='main-menu'>
                <ul>
                    <li>
                        <a 
                        href='abcd.com' className='menu-item'>
                            <div className='menu-icon'>
                            <i class="bi bi-speedometer2"></i>
                            </div>
                            <span>
                            Dashboard
                            </span>
                        </a>
                    </li>

                    <li>
                        <a 
                        href='abcd.com' className='menu-item'>
                            <div className='menu-icon'>
                            <i class="bi bi-newspaper"></i>
                            </div>
                            <span>
                                Content
                            </span>
                        </a>
                        <ul className='sub-menu'>
                            <li>
                                <a>
                                    Courses
                                </a>
                            </li>
                            <li>
                                <a>
                                    Videos
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a 
                        href='abcd.com' className='menu-item'>
                            <div className='menu-icon'>
                            <i class="bi bi-vector-pen"></i>
                            </div>
                            <span>
                                Design
                            </span>
                        </a>
                    </li>
                </ul>
            </div>


            <div className='side-menu-footer'>
                <div className='avatar'>
                    <img alt ='avatar'
                     src = 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'/>
                </div>
                <div className='user-info'>
                    <h5>Aman Singla</h5>
                    <p>amansingla222@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default SideMenu
