import React from 'react'
import Header from '../header/page'
import Footer from '../footer/page'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Layout({children}) {
  return (
   <>
   <Header/>
    {children}
   <Footer/>
   </>
  )
}

export default Layout
