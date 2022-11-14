import React from 'react'
import {useStateContext} from '../context/contextProvider';
import { useTranslation } from 'react-i18next';
const Header = () => {
  const {user}=useStateContext();
  const {t}=useTranslation();
  return (
    <div className='header'>
        <span className='title'>MindX</span>
        <span className='login-text'>{user ? `${t("LOGIN_SUCCESS_TEXT")},${user}`:t("HEADER_TEXT")}</span>
    </div>
  )
}

export default Header