/* eslint-disable react-hooks/exhaustive-deps */

import React, { useLayoutEffect, useState} from 'react';
import { GiMoon, GiSun } from 'react-icons/gi'
import lightTheme from './Themes/light'
import darkTheme from './Themes/dark'
import * as S from './styles/appStyle'
import { useGlobalContext } from './context/GlobalContext'
import { ThemeProvider } from 'styled-components';
import Header from './Template/Header'
import About from './Template/About'
import Footer from './Template/Footer'
import Knowledge from './Template/Knowledge'
import Experiences from './Template/Experiences'
import Projects from './Template/Projects'

import night from './image/night.jpg'
import day from './image/day.jpg'


export default function App() {
  const [scroll, setScroll] = useState(0)
  const [menuPosition, setMenuPosition] = useState('absolute')
  const [menuPositionTop, setMenuPositionTop] = useState(window.innerHeight)
  const [toogleMenuMobile, setToogleMenuMobile] = useState(false)
  const [theme, setTheme] = useState(true)

  const [darkMode, setDarkMode] = useState(true)

  const { 
    headerPosition,
    aboutPosition,
    experiencesPosition,
    knowledgePosition,
    projectsPosition,
    footerPosition
  } = useGlobalContext()

  

  const handleScroll = () => {
    const position = window.pageYOffset; 
    setScroll(position) 
    fixedHeaderMenu(position)
  };

  useLayoutEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, [handleScroll]);

  const moveClick = (position)=>{
    setToogleMenuMobile(!toogleMenuMobile)
    window.innerWidth < 700 ?
      window.scroll({
        top: position,
      })
      :
      window.scroll({
        top: position,
        behavior:'smooth'
      })
  }

  function fixedHeaderMenu( position ){
    if(position > window.innerHeight){
      setMenuPositionTop(0)
      setMenuPosition('fixed')
    }
    else{
      setMenuPositionTop(window.innerHeight)
      setMenuPosition('absolute')
    }
  }
  
  const toogleDarkMode = () =>{
    setTheme(!theme)
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={!theme ? darkTheme : lightTheme}>
      <S.AppContainer>
      
        <S.DarkModeBtn border={theme ? '#ffa500' : '#7b949e'} url={night}  onClick={toogleDarkMode}>
        <S.Night animate={darkMode} url={day}/>         
          <S.DarkModeIcon animate={darkMode}>
            {theme ? <GiSun/> : <GiMoon/>}
          </S.DarkModeIcon>
        </S.DarkModeBtn>
        
        <S.Hamburguer toogle={toogleMenuMobile}>    
          <div onClick={()=> setToogleMenuMobile(!toogleMenuMobile)}>
            <span></span>
          </div>                 
        </S.Hamburguer>

        <S.Menu positionTop={menuPositionTop} position={menuPosition} displayMenu={toogleMenuMobile} >
          <nav>
            <ul>
              <li>
                <label>
                  <input type='radio' name='selectBtn' onClick={()=>moveClick(headerPosition)}/>
                  <span>Home</span>
                </label>                  
              </li>
      
              <li>
                <label>
                    <input type='radio' name='selectBtn' onClick={()=>moveClick(aboutPosition)}/>
                    <span>About</span>
                </label> 
              </li>

              <li>
                <label>
                    <input type='radio' name='selectBtn' onClick={()=>moveClick(knowledgePosition)}/>
                    <span>knowledge</span>
                </label> 
              </li>

              <li>
                <label>
                    <input type='radio' name='selectBtn' onClick={()=>moveClick(experiencesPosition)}/>
                    <span>Experiences</span>
                </label> 
              </li>

              <li>
                <label>
                    <input type='radio' name='selectBtn' onClick={()=>moveClick(projectsPosition)}/>
                    <span>Projects</span>
                </label> 
              </li>
              
              <li>
                <label>
                    <input type='radio' name='selectBtn' onClick={()=>moveClick(footerPosition)}/>
                    <span>Contact</span>
                </label> 
              </li>
            </ul>
          </nav>
        </S.Menu>
        
        <Header scrollPosition={scroll}/>
        <About scrollPosition={scroll}/>
        <Knowledge scrollPosition={scroll}/>
        <Experiences scrollPosition={scroll}/>   
        <Projects scrollPosition={scroll}/>    
        <Footer scrollPosition={scroll}/>
      </S.AppContainer>
    </ThemeProvider>
  );
}


