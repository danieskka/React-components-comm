import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import { useState, useContext } from 'react'

import { UserContext } from './context/userContext';

function App() {

  const [userEmail, setUserEmail] = useState('');
  
  const updateUserEmail = (newUserEmail) => {
    setUserEmail(newUserEmail);
  }

  return (
    <>
      <UserContext.Provider value={{ userEmail, updateUserEmail }}>
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </UserContext.Provider>

    </>
  )
}

export default App
