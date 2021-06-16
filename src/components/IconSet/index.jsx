/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from 'react'
import { Container } from './styles'
import { FaTwitter, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { toogleAnimation } from '../../services/activeAnimation'
import { useGlobalContext } from '../../context/GlobalContext'

export default function IconSet({ positionFather, topPosition, leftPosition, toogleColor, scrollPosition }){
    const { profile } = useGlobalContext()
    const [animateIcon, setAnimateIcon] = useState(false)
    const iconRef = useRef();
    

    useEffect(()=>{
       let aux = toogleAnimation(window.pageYOffset, window.innerHeight, iconRef.current.offsetTop, positionFather)
       setAnimateIcon(aux)
    },[scrollPosition])


    return(
        <Container ref={iconRef} animate={animateIcon} top={topPosition} left={leftPosition} toogleColor={toogleColor}>
            <ul>
                <li>
                    <a href={profile.socialMedia.twitter} rel='noreferrer' target="_blank">
                        <FaTwitter/>
                    </a>
                </li>

                <li>
                    <a href={profile.socialMedia.github} rel='noreferrer' target="_blank">
                        <FaGithub/>
                    </a>                    
                </li>

                <li>
                    <a href={profile.socialMedia.linkedin} rel='noreferrer' target="_blank">
                        <FaLinkedinIn/>
                    </a>                   
                </li>

                <li>
                    <a href={profile.socialMedia.instagran} rel='noreferrer' target="_blank">
                        <FaInstagram/>
                    </a>                   
                </li>
            </ul>
        </Container>
    )
}