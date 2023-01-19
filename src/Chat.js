import React from 'react'
//import './Chat.css';
import Chats from './Chats';

const Chat = () => {
  return (
    <>
    <div className='chat'>
        <Chats 
            name="Sobhita"
            message="☕ this Friday?"
            timestamp="15 minutes ago"
            profilePic="https://assets.telegraphindia.com/telegraph/bd250ff1-11fd-44b2-84bb-f69be66595bf.jpg"
        />
        <Chats 
            name="Rakhi"
            message="Mein Rakhi tu kon??"
            timestamp="30 minutes ago"
            profilePic="https://www.koimoi.com/wp-content/new-galleries/2021/03/rakhi-sawant-there-is-no-filter-in-my-heart-or-mouth-001.jpg"
        />
        <Chats 
            name="Kanye West"
            message="😡😡😡🤬🤬🤬"
            timestamp="an hour ago"
            profilePic="https://nnmedia.nation.africa/uploads/2022/06/Kanye-West.gif"
        />
        <Chats 
            name="Kim"
            message="Nice picture! 💯😉"
            timestamp="an hour ago"
            profilePic="https://images.wsj.net/im-617321?width=1280&size=1.33333333"
        />
    </div>
    </>
  )
}

export default Chat