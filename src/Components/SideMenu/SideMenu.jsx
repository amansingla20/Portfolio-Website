import React, {useState, useEffect} from 'react'
import './SideMenu.css';
import MenuItem from '../MenuItems/MenuItem';


const SideMenu = ({onCollapse}) => {
    const [inactive, setInactive] = useState(false);

    useEffect(()=>{
        if(inactive) document.querySelectorAll('.sub-menu').forEach((element)=> element.classList.remove('active'))
        onCollapse(inactive);
    },[inactive])

    const menuItems= [
        {name:'Dashboard', exact: true ,to: '/', iconClass:'bi bi-speedometer2'},
        {name: 'Content', exact: true ,to: '/content',  iconClass: 'bi bi-basket' ,subMenus : [{
                name: 'Courses',
                to:'/content/courses'
            }, 
            {
                name:'Videos',
                exact: true,
                to:'/content/videos'
            }
        ]},
        {name: 'Design', exact: true ,to: '/design', iconClass:'bi bi-vector-pen'}
    ]
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

                    {menuItems.map((menuItem, index)=>(
                        <MenuItem
                        key={index}
                        exact={menuItem.exact}
                        iconClass={menuItem.iconClass}
                        onClick = {()=>{
                            if(inactive) setInactive(false)
                        }}
                        name={menuItem.name}
                        to={menuItem.to}
                        subMenus={menuItem.subMenus || []}
                        />
                    ))}

                    {/* <li>
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

                   <MenuItem
                   name={'Content'}
                   subMenus = {[
                       {
                           name: 'Courses'
                       }, 
                       {
                           name:'Videos'
                       }
                   ]}
                   />

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
                    </li> */}
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
