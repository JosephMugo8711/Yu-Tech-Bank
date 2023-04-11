import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home'
import SignUp from './pages/signup/Signup'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    
    <BrowserRouter>
       <Routes>
            <Route path='/' element={<Layout/>}>
                 <Route index element={<Home/>}/>
                 <Route path='/signup' element={<SignUp/>}/>
                 <Route path='/login' element={<Login/>}/>
                 <Route path='/dashboard' element={<Dashboard/>}/>
                 {/* <Route path='/about' element={<Aboutus/>}/>
                 
                 <Route path='/contactus' element={<ContactUs/>}/>
                 <Route path='/signup' element={<SignUp/>}/>
                 <Route path='/login' element={<Login/>}/> */}
            </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
