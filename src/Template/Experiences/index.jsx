import React, { useRef, useEffect, useState, useCallback } from 'react'
import * as S from './styles'
import { Container } from '../../components/Container/styles'
import Title from '../../components/Title'
import { toogleAnimation } from '../../services/activeAnimation'
import { useGlobalContext } from '../../context/GlobalContext'

export default function Experiences({ scrollPosition }){
    const { setExperiencesPosition, experiencesPosition, profile } = useGlobalContext()
    const [animate, setAnimate] = useState(false)
    const containerRef = useRef(null)

    const savePosition = useCallback(()=>{
        setExperiencesPosition(containerRef.current.offsetTop)
    },[setExperiencesPosition])

    useEffect(()=>{
        savePosition()   
    },[savePosition, scrollPosition])

    useEffect(()=>{
        let animate = toogleAnimation(window.pageYOffset, window.innerHeight, containerRef.current.offsetTop, experiencesPosition)
        setAnimate(animate)
    },[experiencesPosition, scrollPosition])

    return(
        <Container ref={containerRef} minHeight={'true'} backgroundColor={'black'}>
            <Title scrollPosition={scrollPosition} positionFather={experiencesPosition} title='Experiences' subTitle='Experiences that I have so far.'/>

            <S.Experience>
                {profile.experience.map((item, index)=>(
                <S.ExperienceBox key={index} animate={animate} animateDelay={item.id * 3}>
                    <S.SubExperienceBox>
                        <S.Title>
                            <h1>{item.company}</h1>
                            <p>{item.startDate}</p>
                        </S.Title>
                        <S.Description>{item.jobDescription}</S.Description>
                    </S.SubExperienceBox>        
                </S.ExperienceBox>
                ))}
            </S.Experience>
        </Container>
    )
}