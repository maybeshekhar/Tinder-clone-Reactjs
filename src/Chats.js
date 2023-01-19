import React from 'react'
import './Chats.css';
import { Avatar } from '@mui/material'

const Chats = ({ name, message, profilePic, timestamp}) => {
  return (
    <div className='chats'>
    <Avatar className='chats__image' alt={name} src={profilePic} />
    <div className='chats__details'>
        <h2>{name}</h2>
        <p>{message}</p>
    </div>
    <p className='chats__timestamp'>{timestamp}</p>
    </div>
  )
}

export default Chats