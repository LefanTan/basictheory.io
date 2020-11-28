/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react'
import * as Fi from 'react-icons/fi'
import styles from './Sidebar.module.css'
import {Link} from 'react-router-dom';

function Sidebar(props){
    const [sidebar, setSidebar] = useState(false)
    const useSidebar = () => setSidebar(!sidebar)

    useEffect(() => {
        // get the root element and update the overflow state
        var root = document.querySelector(':root');

        // if side bar is active, show y scrollbar
        root.style.setProperty('--overflow-y', sidebar ? 'visible' : 'hidden');
    }, [sidebar])

    return(
        <div className={styles.Container}>
            <Link to="#">
                <button className={styles.sidebarButton} onClick={useSidebar} ><Fi.FiMenu className={styles.sidebarIcon}/></button>
            </Link>
            <div className={sidebar ? styles.SidebarActive : styles.Sidebar}>
                {props.children}
            </div>
        </div>
    )
}

export default Sidebar;