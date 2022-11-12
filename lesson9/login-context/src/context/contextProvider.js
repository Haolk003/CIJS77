import React,{useContext,useState,createContext} from "react";
const StateCotext=createContext();
export const ContextProvider=({children})=>{
    const [selectLang,setSelectLang]=useState(JSON.parse(localStorage.getItem('language_login')));
    const [user,setUser]=useState('');
    const setLanguage=(lang)=>{
        setSelectLang(lang);
        localStorage.setItem('language_login',JSON.stringify(lang));
    }
  
return(
    <StateCotext.Provider value={{selectLang,setLanguage,user,setUser}}>
        {children}
    </StateCotext.Provider> 
)
}
export const useStateContext=()=>useContext(StateCotext);