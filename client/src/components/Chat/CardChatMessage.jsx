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

    <div class="flex flex-col flex-grow p-12  dark:bg-gray-900 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 150px)' }}>
        {/* {
            messageList.map((msg)=>(
                socket.id === msg.authorId ? <MessageChatSender msg={msg.text} /> : <MessageChat msg={msg.text} author={msg.author}/>
            ))
        } */}

        <MessageChat msg={"BLALALALALALALALALALALAL"}/>
        <MessageChat msg={"BLALALALALALALALALALALAL"}/>
        <MessageChat msg={"BLALALALALALALALALALALAL"}/>
        <MessageChat msg={"BLALALALALALALALALALALAL"}/>
        <MessageChat msg={"BLALALALALALALALALALALAL"}/>
        <MessageChat msg={"BLALALALALALALALALALALAL"}/>
        <MessageChat msg={"BLALALALALALALALALALALAL"}/>
        <MessageChat msg={"BLALALALALALALALALALALAL"}/>
        <MessageChat msg={"BLALALALALALALALALALALAL"}/>
        <MessageChat msg={"BLALALALALALALALALALALAL"}/>
        <MessageChat msg={"BLALALALALALALALALALALAL"}/>
        <MessageChat msg={"BLALALALALALALALALALALAL"}/>
        <MessageChat msg={"BLALALALALALALALALALALAL"}/>
        <MessageChat msg={"BLALALALALALALALALALALAL"}/>
        <MessageChat msg={"BLALALALALALALALALALALAL"}/>
        <MessageChat msg={"BLALALALALALALALALALALAL"}/>
        <MessageChat msg={"BLALALALALALALALALALALAL"}/>
        <MessageChat msg={"BLALALALALALALALALALALAL"}/>
        
    </div>

    <div className='fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-800 rounded-full shadow-xl mx-12 my-5'>
        

    
    <div className="flex gap-2 w-1/2 mx-auto">
        
        <input ref={messagRef} class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite sua mensagem..."/>
        <Button text={"Enviar"} func={handleSubmit}/>
    </div>

        
        
    </div>
    </div>

  )
}

export default CardChatMessage