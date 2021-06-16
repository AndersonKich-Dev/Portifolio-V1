import styled, { keyframes } from 'styled-components'
import { tooglehiddenMenu, toogleHamburguer} from './mixins'

const fadeIn = keyframes`
    0%{
        opacity: 0;
    }100%{
        opacity: 1;
    }
`;

export const AppContainer = styled.div`
    position: relative;
    max-width: 100vw;
    min-height: 100vh;
    opacity: 0;
    animation: ${fadeIn} 1s ease-in-out forwards;
`;

const sun = keyframes`
    0%{
        transform: translateX(-95%);
    }100%{
        transform: translateX(95%);
    }

`;

const nigth = keyframes`
    0%{
        transform: translateX(95%);
    }100%{
        transform: translateX(-95%);
    }

`;

const sunMove = keyframes`
    0%{
        opacity: 1;
        width: 40%;
    }100%{
        opacity: 1;
        width: 100%
    }

`;

const nigthMove = keyframes`
    0%{
        opacity: 1;
        width: 100%
    }50%{
        opacity: 1;
    }100%{
        opacity: 0;
        width: 40%;
    }

`;


export const DarkModeBtn = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 5rem;
    height: 2rem;
    border-radius: 40px;
    background-color: white;
    border: 1px solid ${props => props.border};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    background-image: ${props => `url(${props.url})`};
    animation: ${fadeIn} 1s ease-in-out forwards;
    animation-delay: 4s;
    z-index: 1;

    @media only screen and (min-width: 0px) and (max-width: 700px){
        right: unset;
        left: .5rem;
        top: 3rem;
        transform: rotate(90deg);
    }
`;

export const DarkModeIcon = styled.div` 
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    transform: translateX(95%);
    background-color: white;
    animation:${props => props.animate ? sun : nigth} .5s normal forwards ease-in-out ;

    svg {
        width: 100%;
        height: 100%;
        color: #ff8c00;
    }  

    @media only screen and (min-width: 0px) and (max-width: 700px){
       svg {
        transform: rotate(220deg);
       }
    }
`;

export const Night = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    background-image: ${props => `url(${props.url})`};
    animation:${props => props.animate ? sunMove : nigthMove} .5s normal forwards ease-in-out ;

`;


//==================== Menu =======================================//

const animateFixed = keyframes`
    0% {
        transform: translateY(-5rem);
    }

`;

const animate = keyframes`
    0% {
        transform: translateY(2rem);
    }

`;

export const Menu = styled.div`
    position: ${props => props.position};
    top: ${props => `${props.positionTop}px`};
    left: 0;
    z-index: 99;
    width: 100%;
    height: 5rem;
    display: flex;
    border-bottom: 1px solid ${props => props.theme.colors.boder_black_100};
    animation:${props => props.position === 'fixed' ?  animateFixed : animate} 1s normal ease-in-out ;

   nav {
       flex: 1;
       display: flex;
       align-items: center;
       justify-content: center;
       background-color: ${props => props.theme.colors.bd_menu_black};
     

       ul {
        width: 60%;
        height: 100%;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        li {
            font-family: Inter_400;
            text-transform: uppercase;
            letter-spacing: 0.125rem;
            font-size: 0.875rem;
            cursor: pointer;
            color: ${props => props.theme.colors.text_black_100};
            transition: color .5s;

            
            
           label {
            font-family: Inter_400;
            text-transform: uppercase;
            letter-spacing: 0.125rem;
            font-size: 0.875rem;
            color: ${props => props.theme.colors.text_black_100};
            cursor: pointer;
            background-color: transparent;
            outline: none;
            border: 0;

            :hover {
                color: ${props => props.theme.colors.text_hover_blue};
            };

            input {
                display: none;

                :checked + span{
                    color: ${props => props.theme.colors.text_hover_blue};
                }
            }
            
           }
        }
    }
   }

   @media only screen and (min-width: 700px) and (max-width: 1024px){
        height: 3.75rem;

        nav{
            ul{
                width: 80%;
                li{
                    label{
                        font-size: 0.75rem
                    }
                }
            }
        }
   }

   @media only screen and (min-width: 0px) and (max-width: 700px){
        position: fixed;
        top: 0;
        left: 0;    
        width: 100%;
        height: 100vh;
        border: 0;    
        transition: opacity .7s, width .7s linear;

        nav{
            width: 100%;
            ul{
                width: 100%;
                flex-direction: column;
                li{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                
                    label{
                        font-size: 0.5rem
                    }
                }
            }
        }

        ${props => !props.displayMenu ?
        tooglehiddenMenu(0, 0)
        :
        tooglehiddenMenu(100, 1)
    }
   }
`;




//==================== Hamburguer =======================================//

export const Hamburguer = styled.div`
    position: fixed;
    top:.5rem;
    right:.5rem;
    z-index: 100;
    
    div {
        position: relative;
        width: 2rem;
        height: 2rem;
        display: none;
        border-radius: 50%;
        border: 2px solid transparent;
        transition: .5s linear ;

        span {
            width: 90%;
            height: 2px;
            background-color: ${props => props.theme.colors.bd_white};
            display: block;
            position: absolute;
            top: 14px;
            left: 3px;
            transition: .5s linear ;

            ::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                top: -10px;
                left: 0;
                background-color: ${props => props.theme.colors.bd_white};
                display: block;
                transition: .5s linear ;
            }

            ::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                top: 10px;
                left: 0;
                background-color: ${props => props.theme.colors.bd_white};
                display: block;
                transition: .5s linear ;
            }  
             
            ${props => props.toogle ?
                toogleHamburguer(45, 90, -90, 0) : toogleHamburguer(0, 0, 0, null)
            }
        }        
    }

   @media only screen and (min-width: 0px) and (max-width: 700px){
       div {
        display: block;
       } 
   }

`;