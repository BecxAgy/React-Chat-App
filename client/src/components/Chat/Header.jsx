import React from 'react';
import LogoText from '../Others/LogoText';
import Button from '../Others/Button';

function Header() {
  return (
    <header className='bg-grey-700 dark:bg-gray-800 p-1 fixed top-0 w-full z-10'>

      <nav className='bg-blue m-4'>
        <div className="flex justify-between">
          <LogoText/>
          <Button text={"Sair"} func={()=>{}}/>
        </div>
      </nav>

    </header>
  );
}

export default Header;
