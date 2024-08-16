import React from 'react'
import './App.css'
import Nav from './components/Nav';
// import Footer from './components/Footer';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivateComponent from './components/privateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
        <Nav />
       <Routes>

          <Route element={<PrivateComponent/>}>
          <Route path='/' element={<ProductList/>} />
          <Route path='/add' element={<AddProduct/>} />
          <Route path='/update/:id' element={<UpdateProduct/>} />
          <Route path='/logout' element={<h1>Logout component</h1>} />
          <Route path='/profile' element={<Profile/>} />
          </Route>
          <Route path='signup' element={<SignUp/>}/>
          <Route path='login' element={<Login/>}/>

       </Routes>
       </BrowserRouter>

    </div>

  )
}

export default App
