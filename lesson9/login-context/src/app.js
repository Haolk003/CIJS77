import React from 'react'
import { useTranslation } from 'react-i18next';
import { Header,Login,Footer } from './components';
const App = () => {
    const {t}=useTranslation()
  return (
    <div>
      <Header />
      <Login />
      <Footer />
    </div>
  )
}

export default App