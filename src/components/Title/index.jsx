import React, { useState, useRef, useEffect, useCallback} from 'react'
import * as S from './styles'
import { toogleAnimation } from '../../services/activeAnimation'

export default function Projects({title, subTitle, scrollPosition, positionFather}){
    const [titleAnime, setTitleAnime] = useState(false)
    const titleRef = useRef()

    const goAnimate = useCallback(()=>{
        let animate = toogleAnimation(window.pageYOffset, window.innerHeight, titleRef.current.offsetTop, positionFather)
        setTitleAnime(animate)
    },[positionFather])

    useEffect(()=>{
        goAnimate()
    },[goAnimate, scrollPosition])

    return (
        <S.Container ref={titleRef} animate={titleAnime}>
            <h2>{title}</h2>
            <p>{subTitle}</p>
        </S.Container>
    )
}