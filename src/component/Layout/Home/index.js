import { Link } from 'react-router-dom'
import Logotitle from 'C:/Users/bhati/Downloads/port/react-portfolio/src/assets/images/logo-s.png'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLoder'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home =()=>{ 

    const[letterClass,setLetterClass] = useState('text-animate')
    const nameArray = [' ','k','i']
    const nameAgain = ['h','a','n']
    const jobArray = ['w','e','b',' ','d','e','v','e','v','e','l','o','p','e','r','.']
    
    useEffect(()=>{
         setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])

    return(
        <>
    <div className='container home-page'>
        <div className='text-zone'>
            <h1> <span className={`${letterClass} _11`}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
             <br/><span className={`${letterClass} _13`}>I</span> 
             <span className={`${letterClass} _14`}>'m </span>

             <AnimatedLetters letterClass={letterClass}
            strArray = {nameArray}
            idx ={15}/>
            <img src = {Logotitle} alt = "devloper"/>
            <AnimatedLetters letterClass={letterClass}
            strArray = {nameAgain}
            idx ={18}/>
            <br/>
            <AnimatedLetters letterClass={letterClass}
            strArray = {jobArray}
            idx ={22}/>
            </h1>
            <h2> Frontend Developer </h2>
            <Link to = "/contact" className='flat-botton' >CONTACT ME
            </Link>
        </div>
        <Logo/>
    </div>
    <Loader type='pacman'/>
    </>
    )
}

export default Home