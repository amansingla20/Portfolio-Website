import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';

const MenuItem = ({name, subMenus, to, exact, iconClass, onClick}) => {
    const [expand, setExpand] = useState(false);

    return (
        <div>
           <li onClick={onClick}>
                 <NavLink exact = {exact} to={to}
                 onClick={()=> setExpand(!expand)}
                    href='abcd.com' className='menu-item'>
                        <div className='menu-icon'>
                        <i class={iconClass}></i>
                        </div>
                        <span>
                          {name}
                        </span>
                   </NavLink>
                   {subMenus && subMenus.length > 0 ? (
                       <ul className={`sub-menu ${expand ? 'active': ''}`}>
                           {subMenus.map((menu, index)=>(
                               <li key ={index}>
                                   <NavLink to={menu.to}>{menu.name}</NavLink>
                               </li>
                           ))}
                       </ul>
                   ): null}
             </li> 
        </div>
    )
}

export default MenuItem
