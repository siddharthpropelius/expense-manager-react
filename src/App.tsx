import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Transactions from "./components/Transactions"

function App() {
  
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/transactions" element={<Transactions/>}/>
   </Routes>
   </>
  )
}

export default App
