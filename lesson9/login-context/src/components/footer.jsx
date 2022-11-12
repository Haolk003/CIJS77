import React from 'react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import {useStateContext} from '../context/contextProvider';

const Footer = () => {
  const {selectLang,setLanguage}=useStateContext();
  const {i18n}=useTranslation()
  const handleSelect=(e)=>{
    setLanguage(e.target.value);
  }
  useEffect(()=>{
     i18n.changeLanguage(selectLang);
  },[selectLang])
  return (
    <div className='footer'>
        <select onChange={handleSelect}>
            <option >vi</option>
            <option selected>en</option>
        </select>
    </div>
  )
}

export default Footer