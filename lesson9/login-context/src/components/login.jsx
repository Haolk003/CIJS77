import React, { useEffect } from 'react'
import {useStateContext} from '../context/contextProvider';
import { useTranslation } from 'react-i18next';
const Login = () => {
  const {user,setUser} =useStateContext();
  const {t}=useTranslation()
  const handleSubmit=(e)=>{
    e.preventDefault();
    setUser(e.target[0].value);
  }
 
  return (
    <div className='login'>
      {!user ? <div>
        <h4 >{t("HEADER_TEXT")}</h4>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder={`${t("LOGIN_TEXT")}`} /><br/>
        <button type='submit'>{t("HEADER_TEXT")}</button>
        </form>
        </div>: <h2>{t("LOGIN_SUCCESS_TEXT")}</h2>}
    </div>
  )
}

export default Login