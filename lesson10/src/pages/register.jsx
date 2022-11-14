import React from 'react';
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import {useDispatch} from 'react-redux'
import {auth} from '../firebase'
import { authAction } from '../store/auth';
import { useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
const Register = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleSubmit=async(e)=>{
        e.preventDefault();
       const name=e.target[0].value;
       const email=e.target[1].value;
       const password=e.target[2].value;
       try{
    await createUserWithEmailAndPassword(auth,email,password).then(async(profile)=>{
         await updateProfile(profile.user,{
        displayName:name
    });
    dispatch(authAction.login(profile.user));
    navigate('/');
    })
   
 

       }catch(err){
        console.log(err)
       }
      
    }
  return (
    <div className='register'>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default Register