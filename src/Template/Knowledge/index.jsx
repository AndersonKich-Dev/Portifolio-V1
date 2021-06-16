/* eslint-disable react-hooks/exhaustive-deps */

import React, { useRef,useEffect, useState } from 'react'
import Title from '../../components/Title'
import * as S from './styles'
import { Container } from '../../components/Container/styles'
import { useGlobalContext } from '../../context/GlobalContext'
import { toogleAnimation } from '../../services/activeAnimation'

export default function Knowledge({ scrollPosition }){
  const { setKnowledgePosition, knowledgePosition, profile } = useGlobalContext()
  const [animate, setAnimate] = useState(false)
  const containerRef = useRef(null)
  const cardRef = useRef(null)
  


  useEffect(()=>{
    setKnowledgePosition(containerRef.current.offsetTop)
},[])
 
useEffect(()=>{
  let animate = toogleAnimation(window.pageYOffset, window.innerHeight, cardRef.current.offsetTop, knowledgePosition)
  setAnimate(animate)
},[knowledgePosition, scrollPosition])

    return (
        <Container ref={containerRef} minHeight={'true'} backgroundColor={'blue'}>
                <Title scrollPosition={scrollPosition} positionFather={knowledgePosition} title='Knowledge' subTitle='knowledge and good skills that I try to use in the technologies I study and work.'/>
              <S.Content> 
                {
                  profile.knowledges.map((item, index)=>(
                    <S.Card ref={cardRef} animate={animate} delay={item.id} key={index}>
                        <h1>{item.tecnology}</h1>
                        <ul>
                          {item.knowledgesItens.map((item, index)=>(
                            <li key={index}>
                              <span>{item.id}</span>
                              <p>{item.knowledge}</p>
                            </li>
                          ))}
                        </ul>
                    </S.Card>
                  ))
                }
              </S.Content>
           
        </Container>
    )
}