import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as S from './styles'

export default function Loading(){
    const history = useHistory()
    const [title, setTitle] = useState('My')

      useEffect(() => {
        const  interval = setInterval(() => {
            setTitle('portfolio')
          }, 4000);
       
        return () => clearInterval(interval);
      }, []);

      useEffect(() => {
        const  interval = setInterval(() => {
            history.push('/portifolio')
          }, 9000);
       
        return () => clearInterval(interval);
      }, [history]);

    return (
        <S.Loading>
            <h1>{title}</h1>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
      </S.Loading>  
    )
}