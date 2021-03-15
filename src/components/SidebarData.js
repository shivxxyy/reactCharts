import React from 'react'
import * as FaIcons from 'react-icons/fa' 
import * as AiIcons from 'react-icons/ai'
import * as HiIcons from 'react-icons/hi'
import * as MdIcons from 'react-icons/md' 
import * as GoIcons from 'react-icons/go' 
const SidebarData = [
    {
    title:"Dashboard",
    icon:<MdIcons.MdDashboard/>,
    cName:'nav-text'
    },
    {
        title:'Assets',
        icon:<HiIcons.HiClock/>,
        cName:'nav-text'
    },
    {
        title:'Tracker',
        icon:<GoIcons.GoGraph/>,
        cName:'nav-text'
    },
    {
        title:'Planning and Advisory',
        icon:<FaIcons.FaCalendarAlt/>,
        cName:'nav-text'
    }
]

export default SidebarData