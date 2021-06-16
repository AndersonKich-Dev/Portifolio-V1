import React,{ useEffect, useRef, useState } from 'react'
import * as S from './styles'

export default function ProgressBar({value, name, scrollPosition}){
    const progressRef = useRef();
    
    const [progress, setProgress] = useState(0)
   

    useEffect(()=>{
        const width = progressRef.current.offsetWidth
        setProgress(width)
    },[scrollPosition])

    return (

        <S.Container>
            <h4>{name}</h4>
            <S.Bar>
                <S.Progress ref={progressRef} width={`${value}%`}>
                    <S.BoxProgressValue trans={progress}>                       
                        <S.ProgressValue><p>{`${value}%`}</p></S.ProgressValue>
                        <S.ArrowProgress/>
                    </S.BoxProgressValue>
                </S.Progress>
            </S.Bar>
        </S.Container>

    )
}