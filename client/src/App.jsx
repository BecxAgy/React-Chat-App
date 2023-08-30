import { useState } from 'react'

import CardJoin from './components/CardJoin'
import Chat from './components/Chat/Chat';

function App() {
  const [visibility, setVisibility] = useState(false);
  const [socket, setSocket] = useState(null);

  return (
   <div className="h-screen vh-100 bg-white dark:bg-gray-900">
    {visibility ? 
      
        <Chat socket={socket}/> 
     
      : 
      <div className="flex justify-center items-center h-full">
        <CardJoin setVisibility={setVisibility} setSocket={setSocket}/> 
      </div>
    }
      
   </div>
  )
}

export default App
