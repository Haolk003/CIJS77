import React, { useEffect, useState } from 'react'
import { Route,Routes,Navigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { Login,Register,Home,About,Cart,Invoices,Products,Profile,SingleInvoices,SingleProducts } from './pages';
const App = () => {
  const user=useSelector((state)=> state.auth.user);
useEffect(()=>{
  console.log(user);
},[user]);
const RequestUser=({children})=>{
  if(!user){
    return <Navigate to='/auth/login' />
  }
  else{
    return children;
  }
}
  return (
    <div>
      <Routes>
        <Route path='/' element={<RequestUser><Home /></RequestUser>} />
        <Route path='/auth/login' element={<Login />}/>
        <Route path='/auth/register' element={<Register />} />

       <Route path='/products' element={<RequestUser><Products /></RequestUser>} /> 
       <Route path='/products/:id' element={<RequestUser><SingleProducts /></RequestUser>} />
       <Route path='/invoices' element={<RequestUser><Invoices /></RequestUser>} />
       <Route path='/invoices/:id' element={<RequestUser><SingleInvoices /></RequestUser>} />
       <Route path='/cart' element={<RequestUser><Cart /></RequestUser>} />
       <Route path='/profile' element={<RequestUser><Profile /></RequestUser>} />
       <Route path='/about' element={<RequestUser><About /></RequestUser>} />
       
      </Routes>
    </div>
  )
}

export default App