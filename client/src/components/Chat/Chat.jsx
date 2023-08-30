import React from 'react'
import Header from './Header'
import CardChatMessage from './CardChatMessage'


function Chat({socket}) {

  return (
    <div className=''>
      <Header></Header>
      <div className="pt-16">
        <CardChatMessage socket={socket} />
      </div>
    </div>
  )
}

export default Chat