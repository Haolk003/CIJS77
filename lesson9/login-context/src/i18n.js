import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
i18next
.use(initReactI18next)
.use(LanguageDetector)
.init({
    fallbackLng:'vi',
    resources:{
        en:{
            translation:{
                HEADER_TEXT:"Login",
                LOGIN_TEXT:"User Name",
                LOGIN_SUCCESS_TEXT:"Welcome"
            }
        },
        vi:{
            translation:{
                HEADER_TEXT:"Đăng Nhập ",
                LOGIN_TEXT:"Tên Đăng Nhập",
                LOGIN_SUCCESS_TEXT:"Chào Mừng"
            }
        }
    }
})