import React from 'react'
import Header from '../header/page'
import Footer from '../footer/page'
import { Toaster } from 'sonner'



function Layout({children}) {
  return (
   <>
   <Toaster position='top-right'/>
   <Header/>
    {children}
   <Footer/>
   </>
  )
}

export default Layout
