import React, { useRef } from 'react'

import Card from 'react-bootstrap/Card';

import io from 'socket.io-client';
import LogoText from './Others/LogoText';
import Button from './Others/Button';


function CardJoin({setVisibility, setSocket}) {
    const usernameRef = useRef()

    const handleSubmit = async(e) => {
        e.preventDefault();

        const username = usernameRef.current.value;
        if(!username.trim()) return;
        
        const socket = await io.connect('https://becarealchatbackend.onrender.com/');
        console.log("🚀 ~ file: CardJoin.jsx:20 ~ handleSubmit ~ socket:", socket)

        socket.emit('set_username', username);
        setSocket(socket);
        setVisibility(true);
    };


    return (
    
    <Card className='shadow-xl rounded p-10 dark:bg-gray-800' style={{ width: '20rem' }}>
    
    <Card.Body className='text-center'>
        
     
    <LogoText/>

      
      <label className="block text-gray-700 text-sm font-bold m-8 dark:text-blue-700" for="password">
        Antes de entrar, indentifique-se!
      </label>
      <input ref={usernameRef} className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 text-white" placeholder='Seu nome :)'/>
      
      <Button text={'Entrar'} func={handleSubmit}/>

    </Card.Body>
  </Card>
    
  )
}

export default CardJoin