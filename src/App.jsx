import React from 'react';
import Login from './Components/Loogin';
import './App.css';
import { useSelector } from "react-redux"
import { selectUser } from './features/userSlice';
import Logout from './Components/Logout';
function App() {
  const user = useSelector(selectUser)

  return (
    <>
     {user ? <Logout /> : <Login /> }
    </>
  )
}

export default App
