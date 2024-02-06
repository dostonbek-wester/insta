import React from 'react'
import './sidebar.css'
import { NavLink, useLocation } from 'react-router-dom';
import {Home,Message,Search,Explore,FavoriteBorder,Create,Person,PlayCircle,Dehaze, AlternateEmail} from '@mui/icons-material';
import { Button } from '@mui/material';

function Sidebar({children}) {
  const location = useLocation()
  return (
    <div className='sidebar-container'>
        {
          location.pathname === '/' ? null :
          <div className="sidebar-wrapper">
            <h2>Instagram</h2>
            <NavLink to={'/home'}>
            <Button startIcon={<Home />}>Home</Button>
            </NavLink>
            <Button startIcon={<Search />} className='search-btn' > Search</Button>
            <NavLink to={'/explore'}>
            <Button startIcon={<Explore />}> Explore</Button>
            </NavLink>
            <NavLink to={'/reels'}>
            <Button startIcon={<PlayCircle />}> Reels</Button>
            </NavLink>
            <NavLink to={'/message'}>
            <Button startIcon={<Message /> }> Message</Button>
            </NavLink>
            <Button startIcon={<FavoriteBorder />}> Notifications</Button>
            <NavLink to={"/create"}>
            <Button startIcon={<Create />}> Create</Button>
            </NavLink>
            <NavLink to={'/Profile'}>
            <Button startIcon={<Person />}> Profile</Button>
            </NavLink>
            <Button startIcon={<AlternateEmail />}>Threads</Button>
            <Button startIcon={<Dehaze />}>More</Button>
          </div>
                
        }
        <div className="routes-wrapper" 
          style={{width:location.pathname === '/' ? "100%" : 'calc(100% - 300px)'}}
        >
            {children}
        </div>
    </div>
  )
}

export default Sidebar