import React from 'react'
import ContactDetails from './contactDetails'
import EnquiryForm from './contactForm'
import Contactusbanner from '@/app/components/headertitlesection/contactusBanner'
import MapEmbed from './mapLocation'

function ContactPage() {
  return (
     <>
     <div className='contactuspage'>
     <Contactusbanner/>
     <div className='contact_both_sections'>
     <ContactDetails/>
     <EnquiryForm/>

     </div>
     <div className='contact_form_map'>
     <MapEmbed/>
     
     </div>
     
     </div>
     </>
  )
}

export default ContactPage
