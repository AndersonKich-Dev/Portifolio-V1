import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as S from './styles'
import { Container } from '../../components/Container/styles'
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa'
import { toogleAnimation } from '../../services/activeAnimation'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import IconSet from '../../components/IconSet'
import { useGlobalContext } from '../../context/GlobalContext'

export default function Footer({ scrollPosition }){
    const { setFooterPosition, footerPosition, profile } = useGlobalContext()
    const currentDate = format(new Date(), 'yyyy ', {locale: ptBR})
    const footerIconsItem = useRef()
    const footerFeature = useRef()
    const [animateIcon, setAnimateIcon] = useState(false)
    const [animateFeature, setAnimateFeature] = useState(false)
    const containerRef = useRef(null)

    const savePosition = useCallback(()=>{
        setFooterPosition(containerRef.current.offsetTop)
    },[setFooterPosition])

    useEffect(()=>{
        savePosition()
    },[savePosition, scrollPosition])

    useEffect(()=>{
        let auxAnimateIcon = toogleAnimation(window.pageYOffset, window.innerHeight, footerIconsItem.current.offsetTop, footerPosition)
        let auxAnimateFeature = toogleAnimation(window.pageYOffset, window.innerHeight, footerFeature.current.offsetTop, footerPosition)
        setAnimateIcon(auxAnimateIcon) 
        setAnimateFeature(auxAnimateFeature)        
    },[footerPosition, scrollPosition])


    return(
        <Container ref={containerRef} backgroundColor={'black'}>
            <S.Footer>
                <S.FooterBoxFlex>
                    <S.FooterIcons>
                    <S.FooterIconsItem animate={animateIcon} ref={footerIconsItem}>
                        <div>
                            <FaMapMarkedAlt/>
                        </div>
                        <span>
                            <h4>Addres</h4>
                            <p><i>{`${profile.addres.village}, ${profile.addres.city} - ${profile.addres.uf}`}</i></p>
                        </span>
                    </S.FooterIconsItem>

                    <S.FooterIconsItem animate={animateIcon} ref={footerIconsItem}>
                        <div>
                            <FaEnvelope/>
                        </div>
                        <span>
                            <h4>E-mail</h4>
                            <p><i>{profile.email}</i></p>
                        </span>
                    </S.FooterIconsItem>

                    <S.FooterIconsItem animate={animateIcon} ref={footerIconsItem}>
                        <div>
                            <FaPhoneAlt/>
                        </div>
                        <span>
                        <h4>Phone</h4>
                        <p><i>{`${profile.phone_A} / ${profile.phone_B}`}</i></p>
                        </span>
                    </S.FooterIconsItem>
                    </S.FooterIcons>
                </S.FooterBoxFlex>

                <S.FooterBoxFlex>
                    <IconSet scrollPosition={scrollPosition} positionFather={footerPosition} toogleColor={true} topPosition={50} leftPosition={50}/>
                </S.FooterBoxFlex>

                <S.FooterFeature ref={footerFeature} animate={animateFeature}>
                    <p> {`©${currentDate} ${profile.name} - ${profile.job}`}</p>
                </S.FooterFeature>
            </S.Footer>
        </Container>
    )
}