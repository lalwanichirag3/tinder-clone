import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import './Header.css';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            {/*profile icon shown here */}
            <IconButton>
             <PersonIcon fontSize="large"  className="header__icons" />
            </IconButton>
            <img
                className="header__logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.jpg"
                alt=""/>
                {/**Forum icon shown here */}
            <IconButton>
                <ForumIcon fontSize="large" className="header__icons" />
            </IconButton>
            
        </div>
    )
}

export default Header
