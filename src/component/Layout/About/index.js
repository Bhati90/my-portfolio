import'./index.scss'
import AnimatedLetters from '../AnimatedLoder'
import { useState ,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faCss3, faGit, faGithub, faHtml5, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders';

const About =() =>{

    const [letterClass,setLetterClass] = useState('text-animate');

    useEffect(()=>{
        setTimeout(() => {
           setLetterClass('text-animate-hover')
       }, 3000)
   },[])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx= {15}
                    />
                </h1>
                <p>
                    I'm very ambitious frontend developer looking for a role in 
                    established IT company with the opportunity to work with the
                    latest technologies on challenging project.
                </p>
                <p>
                    I'm a student now working in open source comunity & as A freelencer on 
                    Fiver. I'm quietly confident, curious about this field.
                </p>
                <p>
                    In a word you can say I'm just a student who's exploring this 
                    field who's is also has kind a knowledge in this journey. 
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon = {faReact} color = "#5ED4F4"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon = {faHtml5} color = "#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon = {faCss3} color = "#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon = {faJsSquare} color = "#EC4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon = {faGit} color = "blue"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon = {faGithub} color = "green"/>
                    </div>
                </div>
            </div>
        </div>

        <Loader type = 'pacman'/>
        </>
    )
}

export default About
