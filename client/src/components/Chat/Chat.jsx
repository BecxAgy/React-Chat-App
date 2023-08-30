import React from 'react'
import Header from './Header'
import CardChatMessage from './CardChatMessage'


function Chat({socket}) {

  return (
    <div>
      <Header></Header>
      <CardChatMessage socket={socket}/>
    </div>
  )
}

export default Chat