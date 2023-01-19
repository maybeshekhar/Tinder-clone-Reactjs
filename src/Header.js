import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ backButton }) => {
    const navigate = useNavigate();
  return (
    <div className='header'>
    {backButton ? (
        <IconButton onClick={() => navigate(backButton, {replace: true} )}>
        <PersonIcon className='header__icon' fontSize='large'  />
        </IconButton>
    ) : (

       <IconButton>
        <ArrowBackIosIcon className='header__icon' fontSize='large' />
       </IconButton>

       )}
        
        <Link to="/">
        <img className='header__logo' src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" alt="tinder logo" />
        </Link>

       <Link to="/chat">
       <IconButton>
        <ForumIcon className='header__icon' fontSize='large' />
       </IconButton>
       </Link>
    </div>
  )
}

export default Header