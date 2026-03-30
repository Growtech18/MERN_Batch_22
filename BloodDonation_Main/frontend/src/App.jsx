
import { Route, Routes } from 'react-router-dom'
import DonateKhoon from './components/DonateKhoon'
import CollectKhoon from './components/CollectKhoon'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import SingUp from './components/SignUp'
import Footer from './components/Footer'
import { createContext, useState } from 'react'
import VerifyAccount from './pages/VerifyAccount'
import { useSelector } from 'react-redux'
export const myContext = createContext();
const App = () => {
  const {user} = useSelector((state)=>state.auth)
  console.log(user);
  
  const [email, setEmail] = useState("");


  return (
    <myContext.Provider value={{ email, setEmail }}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<DonateKhoon />} />
          <Route path="/collect" element={<CollectKhoon />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SingUp />} />
          <Route path="/verify-account" element={<VerifyAccount />} />
        </Routes>
        <Footer />
      </div>
    </myContext.Provider>
  )
}

export default App
