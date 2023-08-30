import React, { useEffect, useRef, useState } from 'react'
import MessageChat from './MessageChat'
import MessageChatSender from './MessageChatSender'
import Button from '../Others/Button';

function CardChatMessage({socket}) {

    const messagRef = useRef();
    const [messageList, setMessageList] = useState([]);
    
    useEffect(()=>{
        socket.on('receive_message', data => {
            setMessageList((current)=> [...current, data]);
        })

        //parar de escutar para não enviar mais de uma vez
        return ()=> socket.off('receive_message')
    }, [socket]);


    const handleSubmit = async ()=>{
        const message = messagRef.current.value;
        if(!message.trim())return;

        socket.emit("message", message)
        clearInput();
    }

    const clearInput = () => {
        messagRef.current.value = '';
    }

  return (

    

    <div className='flex justify-between items-center'>

    <div class="flex flex-col flex-grow p-10 dark:bg-gray-900 overflow-y-auto">
        {
            messageList.map((msg)=>(
                socket.id === msg.authorId ? <MessageChatSender msg={msg.text} /> : <MessageChat msg={msg.text} author={msg.author}/>
            ))
        }
        
    </div>

    <div className='flex gap-2 fixed bottom-0 left-0 right-0 p-4 w-1/2 m-3'>
        <input
        type='text'
        ref={messagRef}
        className='w-full p-2 border rounded-2xl'
        placeholder='Digite sua mensagem...'
        />
        <Button text={'Enviar'} func={handleSubmit}/>
    </div>
    </div>

  )
}

export default CardChatMessage