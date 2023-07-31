import { useState } from 'react'
import SignUpForm from './components/signUpForm'
import Authenticate from './components/authenticate'
import './App.css'

function App() {
  const [token, setToken] = useState("");

  return (
    <>
      <SignUpForm setToken={setToken}/>
      <Authenticate token={token}/>
    </>
  )
}

export default App
