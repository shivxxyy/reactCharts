import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa' 
import * as AiIcons from 'react-icons/ai' 
import * as FcIcons from 'react-icons/fc'
import * as MdIcons from 'react-icons/md'
import SidebarData from './SidebarData'
import './Sidebar.css'
import {IconContext} from 'react-icons'
const Sibebar = () => {
    const [sidebar, setSidebar]= useState(false)
    const showSidebar=()=> setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color:'blue'}}>
        <div className='navbar'>
           <FaIcons.FaBars onClick={showSidebar}/>
           <FcIcons.FcSettings style={{marginLeft:'70rem'}}/>
           <MdIcons.MdNotifications style={{margin:'1rem', color:'black'}}/>
        </div>
        <div>
            <nav className={ sidebar ? 'nav-menu active': 'nav-menu' }>
                <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                 <AiIcons.AiOutlineClose style={{marginLeft:'1rem'}}/>  
                <span style={{fontSize:'medium'}}>Finacular</span>
                </li>
                {SidebarData.map((item, index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
                    )
                })}
                </ul>
            </nav>
        </div>
        </IconContext.Provider>
        </>
    )
}

export default Sibebar
