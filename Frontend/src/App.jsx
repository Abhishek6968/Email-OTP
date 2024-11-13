import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmailForm from './Components/EmailForm'
import OTPForm from './Components/OTPForm'
import { Route,Routes,useNavigate } from 'react-router-dom'
import { Home } from './Components/Home'

function App() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleEmailSubmit=(email)=>{
    setEmail(email);
    navigate('/check');
  }

  return (
    <>
     <h2>MOCK EXIT EXAM</h2>
     <Routes>
     <Route path='/' element={<EmailForm onEmailSubmit={handleEmailSubmit}/>} />

      <Route path='/check' element={<OTPForm />} />
      <Route path='/home' element={<Home />} />
      </Routes >
    </>
  )
}

export default App
