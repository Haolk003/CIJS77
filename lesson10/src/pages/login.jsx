import React from 'react'
import {signInWithEmailAndPassword } from "firebase/auth";
import { Link,Navigate,useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { auth } from '../firebase';
import { authAction } from '../store/auth';

const Login = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const email=e.target[0].value;
       const password=e.target[1].value;
       await signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
        dispatch(authAction.login(userCredential.user));
        navigate('/');
       }).catch((err)=>{
        console.log(err);
       })
       
    }
  return (
    
    <div className='login'>
        <form onSubmit={handleSubmit}>
            <input type='email' placeholder='email' />
            <input type='password' placeholder='password' />
            <button type='submit'>Login</button>
            <p>Bạn chưa có tài khoản ?<Link to='/auth/register'>Hãy nhấn vào đây</Link></p>
            
        </form>
    </div>
  )
}

export default Login