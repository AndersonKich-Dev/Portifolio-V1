
import React, { useRef,useEffect, useState, useCallback } from 'react'
import Title from '../../components/Title'
import ProgressBar from '../../components/ProgressBar'
import { toogleAnimation } from '../../services/activeAnimation'
import * as S from './styles'
import { Container } from '../../components/Container/styles'
import { useGlobalContext } from '../../context/GlobalContext'

export default function About({ scrollPosition }){
  const { setAboutPosition, aboutPosition, profile } = useGlobalContext()

  const [tecnologyAnimate, setTecnologyAnimate] = useState(false)
  const [qualityAnimate, setQualityAnimate] = useState(false)
  const qualityItemsRef = useRef(null)
  const tecnologyItemsRef = useRef(null)
  const containerRef = useRef(null)
  

  const savePosition = useCallback(()=>{
    setAboutPosition(containerRef.current.offsetTop)
  },[setAboutPosition])


  useEffect(()=>{   
     savePosition()
  },[savePosition, scrollPosition])

  useEffect(()=>{
    let animateTecnology = toogleAnimation(window.pageYOffset, window.innerHeight, tecnologyItemsRef.current.offsetTop, aboutPosition)
    let animateQuality = toogleAnimation(window.pageYOffset, window.innerHeight, qualityItemsRef.current.offsetTop, aboutPosition)
    setTecnologyAnimate(animateTecnology)
    setQualityAnimate(animateQuality)
  },[aboutPosition, scrollPosition ])


    return (
        <Container ref={containerRef} minHeight={'true'} backgroundColor={'black'}>
            <Title scrollPosition={scrollPosition} positionFather={aboutPosition} title='About' subTitle='Some important information regarding my person as a professional.'/>

            <S.About>
              <S.AboutFlexBox>
                <h3>Qualities</h3>
                <S.AboutQualitiesList>
                  {profile.about.qualities.map((item, index)=>(
                    <S.QualityItems animate={qualityAnimate} ref={qualityItemsRef} delay={item.id / 2} key={index}>
                      <S.QualitiListItems>
                          <p>{item.quality}</p>
                      </S.QualitiListItems>
                    </S.QualityItems>
                  ))}
                </S.AboutQualitiesList>
              </S.AboutFlexBox>

              <span></span>

              <S.AboutFlexBox>
                <h3>Technologies</h3>
                <S.AboutQualitiesList>       
                  {profile.about.technology.map((item, index)=>(
                    <S.TecnologyItems animate={tecnologyAnimate} ref={tecnologyItemsRef} delay={item.language.id/2 } key={index}>
                       <ProgressBar scrollPosition={scrollPosition} value={item.language.knowledge} name={item.language.name}/>  
                    </S.TecnologyItems>                  
                  ))}         
                </S.AboutQualitiesList>
              </S.AboutFlexBox>
            </S.About>
            
        </Container>
    )
}