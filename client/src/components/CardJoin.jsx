import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FaAngellist} from "react-icons/fa";


function CardJoin({setVisibility, setSocket}) {
    const usernameRef = useRef()

    const handleSubmit = async(e) => {
        e.preventDefault();

        const username = usernameRef.current.value;
        if(!username.trim()) return;
        
        const socket = await io.connect('http://localhost:3001');

        socket.emit('set_username', username);
        setSocket(socket);
        setVisibility(true);
    };


    return (
    
    <Card className='shadow-xl p-10' style={{ width: '20rem' }}>
    
    <Card.Body className='text-center'>
        
     
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Talk <span class="text-blue-600 dark:text-blue-500">Chat</span></h1>

      
      <label className="block text-gray-700 text-sm font-bold m-8" for="password">
        Antes de entrar, indentifique-se!
      </label>
      <input ref={usernameRef} className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder='Seu nome :)'/>
      
      <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl 
      focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg 
      text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={(e)=> handleSubmit(e)}>Entrar</button>

    </Card.Body>
  </Card>
    
  )
}

export default CardJoin