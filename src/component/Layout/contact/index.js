import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLoder'
import './index.scss'
import { useState,useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'

const Contact = () =>{

    const [letterClass,setLetterClass] = useState('text-animate');
    const form = useRef();
    useEffect(()=>{
        setTimeout(() => {
           setLetterClass('text-animate-hover')
       }, 3000)
   },[])

   const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_cjgdo5x',"template_fmj44f9" , form.current, "JnG9VMzOcQW7rhzb-")
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

    return(
        <>
        <div className='container contact-page'>
               <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray= {['c','o','n','t','a','c','t',' ','m','e']}
                    idx = {15}/>
                </h1>
                <p>
                    I'm interested in freelence oppertunities-especially ambitious on 
                    e-commerce, social-media, ordering website. If you have other request
                    or question, please contact me using elow form either. 
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit = {sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type = "text" name = "name" placeholder='Name' required/>

                            </li>
                            <li className='half'>
                                <input type = "email" name = "email" placeholder='Email' required/>
                                
                            </li>
                            <li >
                                <input type = "text" name = "subject" placeholder='Subject' required/>
                                
                            </li>
                            <li >
                                <input className = 'textarea' name = "message" placeholder='Message' required/>
                                
                            </li>
                            <li >
                                <input type = "submit" className='flat-button' value='SEND'/>
                                
                            </li>
                        </ul>
                    </form>
                </div>

               </div>
             <div className='info-map'>
                Kishan Bhati,
                <br/>
                C.T.A.E. College, Udaipur<br/>
                <span>bhatikaran634@gmail.com</span>
             </div>
             <div className="map-wrap">
             <MapContainer center={[24.5945881, 73.7446598]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[24.5945881, 73.7446598]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
        </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Contact 