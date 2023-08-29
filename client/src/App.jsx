import { useState } from 'react'
import './App.css'
import CardJoin from './components/CardJoin'
import Chat from './components/Chat';

function App() {
  const [visibility, setVisibility] = useState(false);
  const [socket, setSocket] = useState(null);

  return (
   <div className="App">
    {visibility ? 
      <Chat socket={socket}/> 
      : 
      <CardJoin setVisibility={setVisibility} setSocket={setSocket}/> 
    }
      
   </div>
  )
}

export default App
