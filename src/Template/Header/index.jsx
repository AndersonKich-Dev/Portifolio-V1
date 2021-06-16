import React, { useState, useEffect, useRef, useCallback } from 'react'
import IconSet from '../../components/IconSet'
import { FaUser } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'
import api from '../../api'
import * as S from './styles'
import { Container } from '../../components/Container/styles'
import { useGlobalContext } from '../../context/GlobalContext'

export default function Header({ scrollPosition }){
    const { setHeaderPosition, headerPosition, profile } = useGlobalContext()

    const [avatar, setAvatar] = useState({})
    const containerRef = useRef(null)
    const [height, setHeight] = useState(0)

    const savePosition = useCallback(()=>{
      setHeaderPosition(containerRef.current.offsetTop)
      setHeight(containerRef.current.offsetHeight + 2)
    },[setHeaderPosition])

    useEffect(()=>{
      savePosition()
  },[savePosition, scrollPosition])

    useEffect(()=>{
      if(profile.githubUserName){
        api.get(`/${profile.githubUserName}`)
          .then(response =>{
            setAvatar(response.data.avatar_url)
          })
          .catch(_ => {
            setAvatar(profile.avatar_link)
          })
      }
      else{
        setAvatar(profile.avatar_link)
      }
        
      },[])

      const moveClick = (position)=>{
          window.scroll({
            top: position,
            behavior:'smooth'
          })
        }

    return (
        <Container ref={containerRef} backgroundColor={'blue'} >
            <S.SubBackground/>
           <S.Avatar>
             {!avatar ?  <FaUser/> : <img src={avatar} alt='Foto do usuario'/>}
           </S.Avatar>

           <S.HomeDescription>
              <h1>{profile.name}</h1>
              <h2>{profile.job}</h2>
              <p>{profile.description}</p>
           </S.HomeDescription>
           
           <IconSet positionFather={headerPosition} toogleColor={false} topPosition={85} leftPosition={50}/>  
           <S.AboutBtn onClick={()=> moveClick(height)}>About <BsArrowRightShort/></S.AboutBtn>        
        </Container>
    )
}