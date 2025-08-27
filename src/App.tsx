
import './App.css'
import Dashboard from './pages/Dashboard'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { BrowserRouter , Routes , Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
        <Routes>
           <Route path="Signup" element={<Signup/>}/>
           <Route path="Signin" element={<Signin/>}/>
           <Route path="dashboard" element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
  )       
}



export default App
