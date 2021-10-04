import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNone from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon className="sidebar__twitterIcon"/>

            {/* Sidebar Options */}
            <SidebarOption active text="Home"  Icon={HomeIcon}/>
            <SidebarOption text="Explore"      Icon={SearchIcon}/>
            <SidebarOption text="Notification" Icon={NotificationsNone}/>
            <SidebarOption text="Messages"     Icon={MailOutlineIcon}/>
            <SidebarOption text="Bookmarks"    Icon={BookmarkBorderIcon}/>
            <SidebarOption text="Lists"        Icon={ListAltIcon}/>
            <SidebarOption text="Profile"      Icon={PermIdentityIcon}/>
            <SidebarOption text="More"         Icon={MoreHorizIcon}/>

            {/* Button --> Tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar