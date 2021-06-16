import styled, { keyframes } from 'styled-components'
import { setLeft, setRight } from './mixins'

export const ProjectsContainer = styled.div`
    position: relative;
    height: 60%;
    width: 100%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Projects =  styled.div`  
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    
  
    ::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

`;

export const ArrowSlider = styled.button`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    width: 4rem;
    height: 2.5rem;
    border: 1px solid ${props => props.theme.colors.bd_white};
    border-radius: 8px;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: border .3s linear;

    ${props => props.position === 'left' ? setLeft() : setRight()}

    svg {
        font-size: 1.5rem;
        color: ${props => props.theme.colors.bd_white};
        transition: color .3s linear;
    }

    :disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    :hover:not(:disabled) {
        border: 1px solid ${props => props.theme.colors.bd_green};
    }

    :hover:not(:disabled) > svg {
       color: ${props => props.theme.colors.bd_green};
    }

    @media only screen and (min-width: 0px) and (max-width: 700px){
        width: 3rem;
        height: 2rem;
    }
`;

//=========================================================

export const CardContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    display: flex;
`;

const moveRight = keyframes` 
    0% {
        opacity: 0;
        transform: translateX(50px);
    }
    100% {
        opacity: 0.8;
        transform: translateX(100px);
    };
`;

const moveTop = keyframes` 
    0% {
        opacity: 0;
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    };
`;


export const SubContainerImage = styled.a`
    width: 50%;
    height: 100%;
    transform: translateX(50px);
    z-index: 0;
    cursor: nesw-resize;
    opacity: 0;
    filter: grayscale(100%) contrast(1) brightness(90%);
    animation:${props => props.animate ?  moveRight : ''} 1.5s normal forwards ease-in-out ;  

    :hover {
        filter: grayscale(0) contrast(1) brightness(100%);
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
    } 

    @media only screen and (min-width: 700px) and (max-width: 1080px){
        transform: translateX(60px);
    }

    @media only screen and (min-width: 0px) and (max-width: 700px){
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        transform: translateX(0);
        animation: none;
        opacity: 0.8;
        filter: grayscale(0) contrast(1) brightness(20%);
        
    }  

`;

export const SubContainerDescription = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    padding-right: 100px;

    h2 {
        font-family: FiraMono_400;
        font-size: .8rem;
        opacity: 0;
        color: ${props => props.theme.colors.bd_green};
        transform: translateY(-50px);
        animation:${props => props.animate ?  moveTop : ''} 1.3s normal forwards ease-in-out ;   
    }

    h1 {
        margin: 1rem 0;
        opacity: 0;
        transform: translateY(-50px);
        animation:${props => props.animate ?  moveTop : ''} 1.5s normal forwards ease-in-out ;   
        animation-delay: 0.5s;
    }
   
    ul {
        width: 80%;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        opacity: 0;
        transform: translateY(-50px);
        animation:${props => props.animate ?  moveTop : ''} 1.5s normal forwards ease-in-out ;   
        animation-delay: 1.5s;

        li {
            padding: .5rem;

            p {
                font-size: .625rem;
                font-family: FiraMono_400;
                color: ${props => props.theme.colors.text_navyBlue};
            }
        }
    }

    @media only screen and (min-width: 700px) and (max-width: 1080px){
        padding-right: 60px;
    }

    @media only screen and (min-width: 0px) and (max-width: 700px){
        position: absolute;
        align-items: center;
        padding: 0;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 3;


        ul {
            li {
                p {
                    color: ${props => props.theme.colors.bd_green};
                }
            }
        }
    }  

`;

export const IconBox = styled.div`
    width: 5rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    opacity: 0;
    transform: translateY(-50px);
    animation:${props => props.animate ?  moveTop : ''} 1.5s normal forwards ease-in-out ;   
    animation-delay: 2s;

    svg {
        color: ${props => props.theme.colors.bd_white};
        font-size: 1.5rem;
        cursor: nesw-resize;

        :hover {
            color: ${props => props.theme.colors.bd_green};
        }
    }
`;

export const Description = styled.div`
    width: 125%;
    max-height: 10rem;
    overflow: auto;
    padding: 1rem;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.bd_blue_200};
    z-index: 3;
    text-align: end;
    opacity: 0;
    transform: translateY(-50px);
    border: 1px solid ${props => props.theme.colors.border_gray_100};
    animation:${props => props.animate ?  moveTop : ''} 1.5s normal forwards ease-in-out ;   
    animation-delay: 1s;

    ::-webkit-scrollbar {
        width: 0;
    }

    @media only screen and (min-width: 700px) and (max-width: 1080px){
        width: 150%;
        max-height: 9rem;
    }

    @media only screen and (min-width: 0px) and (max-width: 700px){
        width: 80%;
        z-index: 3;
        text-align: center;
        background-color: transparent;

        p {
            font-size: .8rem;
        }
    }  

`;

export const MarkGit = styled.div` 
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border: 30px solid;
    border-color: ${props => props.theme.colors.bd_green} transparent transparent ${props => props.theme.colors.bd_green};

    svg {
        position: absolute;
        top: -19px;
        left: -22px;
        font-size: 1rem;
        color: ${props => props.theme.colors.bd_black};
        transform: rotate(-38deg);
    }
`;
