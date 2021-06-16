import styled, { keyframes } from 'styled-components'
import { toogleBackground } from './mixins'

const pulse = keyframes` 
    0% {
        transform: scale(0);       
    }
    50%{
        transform: scale(1);
        
    }
    80%{
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    };
`;

export const Container = styled.div`
    position : absolute;
    top: ${props => `${props.top}%`};
    left: ${props => `${props.left}%`};
    transform: translate(-50%, -50%);
    width: 15.625rem;
    height: 3rem;
    display: flex;

    ul {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;

        li {
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;
            border: 1px solid ${props => props.theme.colors.border_navyBlue};
            transition: background-color .5s ease-in-out;
            
            animation:${props => props.animate ?  pulse : ''} 1.5s normal forwards ease-in-out ;
            opacity: 0;



            :hover {
                background-color: ${props => props.theme.colors.bd_navyBlue}
            }

            :hover > a svg{
                color: ${props => props.theme.colors.bd_white}
            }

            a {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: nesw-resize;

                svg {
                    width: 40%;
                    height: 40%;
                    transition: color .5s ease-in-out;
                    color: ${props => props.theme.colors.border_navyBlue}
                }
            }

            ${props => props.toogleColor ? 
                toogleBackground( props.theme.colors.bd_white, props.theme.colors.bd_blue_200 ) : ''
            }

            :nth-child(1) {
                animation-delay: .1s;
            }
            :nth-child(2) {
                animation-delay: .2s;
            }
            :nth-child(3) {
                animation-delay: .3s;
            }
            :nth-child(4) {
                animation-delay: .4s;
            }

        }

        
    }
      
    @media only screen and (min-width: 0px) and (max-width: 700px){
      width: 12.625rem;

      ul {
          li {
            width: 2.5rem;
            height: 2.5rem;
          }
      }
    }
         

`;


