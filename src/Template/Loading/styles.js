import styled, { keyframes } from 'styled-components'

const animate = keyframes`
    0%{
        transform: scaleY(0);
    }
    10%{
        transform: scaleY(1);
    }
    90%{
        transform: scaleY(1);
    }
    100%{
        transform: scaleY(0);
    }

`;

const fadeIn = keyframes`
    0%{
        opacity: 1;
    }100%{
        opacity: 0;
    }
`;

const h1Anime = keyframes`

    0%{
        opacity: 1;
    }
    50%{
        opacity: 0
    }
    }100%{
        opacity: 1
    }

`;

export const Loading = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 5;
    background-color: #232323;
    display: flex;
    opacity: 1;   
    animation: ${fadeIn} 2s ease-in-out forwards;
    animation-delay: 8s;

    h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 6rem;
        z-index: 6;
        text-transform: uppercase;
        mix-blend-mode: difference;
        animation: ${h1Anime} 8s ease-in-out forwards;
    }

    div {
        width: 10%;
        height: 100%;
        background-color: white;
        transform: scaleY(0);
        animation: ${animate} 4s linear forwards;

        :nth-child(odd){
            transform-origin: top;
        }
        :nth-child(even){
            transform-origin: bottom;
        }

        :nth-child(2){
            animation-delay: 0s;
        }
        :nth-child(3){
            animation-delay: 0.4s;
        }
        :nth-child(4){
            animation-delay: 0.8s;
        }
        :nth-child(5){
            animation-delay: 1.2s;
        }
        :nth-child(6){
            animation-delay: 1.6s;
        }
        :nth-child(7){
            animation-delay: 2s;
        }
        :nth-child(8){
            animation-delay: 2.4s;
        }
        :nth-child(9){
            animation-delay: 2.8s;
        }
        :nth-child(10){
            animation-delay: 3.2s;
        }
        :nth-child(11){
            animation-delay: 3.6s;
        }
    }

    @media only screen and (min-width: 700px) and (max-width: 1080px){
       h1 {
        font-size: 4rem;
       }
    }

    @media only screen and (min-width: 0px) and (max-width: 700px){
       h1 {
        font-size: 3rem;
       }
    }

`;