/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState, useCallback } from 'react'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import { Container } from '../../components/Container/styles'

import Title from '../../components/Title'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import * as S from './styles'
import { toogleAnimation } from '../../services/activeAnimation'
import { useGlobalContext } from '../../context/GlobalContext'

export default function Projects({ scrollPosition }){
    const { setProjectsPosition, projectsPosition, profile } = useGlobalContext()
    const carrocelRef = useRef(null)
    const cardContainerRef = useRef(null)
    const containerRef = useRef(null)
    const [projectIndex, setProjectIndex] = useState(1)
    const [idCardMove, setIdCardMove] = useState(1)
    const [widthCardContainer, setWidthCardContainer] = useState(0)
    const [animate, setAnimate] = useState(false)
   
    const savePosition = useCallback(()=>{
        setProjectsPosition(containerRef.current.offsetTop)
        setWidthCardContainer(cardContainerRef.current.clientWidth)
    },[setProjectsPosition])

    useEffect(()=>{
        savePosition()
    },[savePosition, scrollPosition])

    useEffect(()=>{
        let animate = toogleAnimation(window.pageYOffset, window.innerHeight, cardContainerRef.current.offsetTop, projectsPosition)
        setAnimate(animate)
    },[projectsPosition, scrollPosition, idCardMove])

    useEffect(()=>{
        const calc = (profile.projects.length * widthCardContainer)
         moveCarrocel(`-${calc}`)
    },[widthCardContainer])
 

    const moveCarrocel = (scrollOffset, direction)=>{
        carrocelRef.current.scrollLeft += scrollOffset;
        
        moveProjectIndex(direction)
   }

   const moveProjectIndex = ( direction )=>{
        if(direction === 'left'){
            setProjectIndex(index => index -1)
            setIdCardMove(index => index -1)
        }
        else if(direction === 'right'){
            setProjectIndex(index => index +1)
            setIdCardMove(index => index +1)
        }
   }

   


    return (
        <Container ref={containerRef} backgroundColor={true}>
            <Title scrollPosition={scrollPosition} positionFather={projectsPosition} title='Projects' subTitle='Some Things I’ve Built.'/>

            <S.ProjectsContainer>
                <S.ArrowSlider disabled={projectIndex <= 1} position='left' onClick={()=> moveCarrocel(-`${widthCardContainer}`, 'left')}>
                    <FaAngleDoubleLeft/>
                </S.ArrowSlider>

                <S.Projects ref={carrocelRef}>
                    {profile.projects.map((item, index)=>(
                        <S.CardContainer key ={index} ref={cardContainerRef}> 
                            <S.SubContainerImage animate={animate} href={!item.app_url ? item.git : item.app_url} target='_blank'>
                                <img src={item.image} alt=''/>
                                <S.MarkGit>
                                    <FiGithub/>
                                </S.MarkGit>
                            </S.SubContainerImage>

                            <S.SubContainerDescription animate={animate}>
                                <h2>Featured Project</h2>
                                <h1>{item.name}</h1>
                                <S.Description animate={animate}>
                                    <p>{item.description}</p>
                                </S.Description>
                                <ul>
                                    {item.language.map((item, index)=>(
                                        <li key={index}>
                                            <p>{item.name}</p>
                                        </li>
                                    ))}
                                </ul>

                                <S.IconBox animate={animate}>
                                    <a href={item.git} target='_blank' rel='noreferrer'><FiGithub/></a>
                                    <a href={!item.app_url ? item.git : item.app_url} target='_blank' rel='noreferrer'><FiExternalLink/></a>
                                </S.IconBox>
                            </S.SubContainerDescription>
                        </S.CardContainer>
                    ))}              
                </S.Projects>
                <S.ArrowSlider disabled={projectIndex >= profile.projects.length} position='right' onClick={()=> moveCarrocel(widthCardContainer, 'right')}>
                    <FaAngleDoubleRight/>
                </S.ArrowSlider>
            </S.ProjectsContainer>
        </Container>
    )
}