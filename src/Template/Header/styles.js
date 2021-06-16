import styled, { keyframes } from 'styled-components'

export const SubBackground = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 30%;
    background-color: ${props => props.theme.colors.bd_blue_200};
`;

const animateAvatar = keyframes`
    0%{
        opacity: 0;
        transform: translate(-50%, 20px);
    }100%{
        opacity: 1;
        transform: translate(-50%, -50%);
    }

`;

const animateDescription = keyframes`
    0%{
        opacity: 0;
        transform: translateY(50px);
    }100%{
        opacity: 1;
        transform: translateY(0);
    }

`;

const fadeImage = keyframes`
      0%{
        opacity: 0;
    }100%{
        opacity: 1;    
    }
`;

export const Avatar = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.bd_blue_50};
    animation: ${animateAvatar} 2s linear forwards;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    img, svg {
        width: 95%;
        height: 95%;
        border-radius: 50%;
        opacity: 0;
        animation: ${fadeImage} 2s linear forwards;
        animation-delay: 2s;
    }

    svg {
        color: ${props => props.theme.colors.bd_white};
    }


    @media only screen and (min-width: 700px) and (max-width: 1024px){
        width: 130px;
        height: 130px;
    }

    @media only screen and (min-width: 0px) and (max-width: 700px){
        width: 100px;
        height: 100px;
    }
`;

export const HomeDescription = styled.div`
    position: absolute;
    top: 43%;
    left: 0;
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 1rem;
    line-height: 1.5rem;

    h1, h2 {
        text-transform: capitalize;
    }

    h1 {
        font-size: 1.625rem;
        transform: translateY(0);
        opacity: 0;
        animation: ${animateDescription} 1s linear forwards;
        animation-delay: 1s;
    }

    h2 {
        font-size: 0.875rem;
        margin: 1rem 0;
        color: ${props => props.theme.colors.border_navyBlue};
        opacity: 0;
        animation: ${animateDescription} 1s linear forwards;
        animation-delay: 2s;
    }

    p {
        padding: 0 20rem;
        text-align: center;
        max-height: 100%;
        overflow: auto;  
        opacity: 0;
        animation: ${animateDescription} 1s linear forwards;
        animation-delay: 3s;
    }

    @media only screen and (min-width: 700px) and (max-width: 1024px){
        p {
            padding: 1rem 13rem; 
        }
    }
      
    @media only screen and (min-width: 0px) and (max-width: 700px){
        padding-top: 0;

        p {
            padding: 1rem; 
        }
    }
`;

export const AboutBtn = styled.button`
    position: absolute;
    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: .2rem .5rem;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid ${props => props.theme.colors.border_navyBlue};
    color: ${props => props.theme.colors.border_navyBlue};
    transition: all .5s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-left: .5rem;
        font-size: 1.5rem;
        transition: all .5s linear;
        color: ${props => props.theme.colors.border_navyBlue};
    }

    :hover{
        background-color: ${props => props.theme.colors.bd_navyBlue};
        color: ${props => props.theme.colors.bd_white};
    }

    :hover > svg{
        transform: rotate(90deg);
        color: ${props => props.theme.colors.bd_white};
    }

    @media only screen and (min-width: 0px) and (max-width: 700px){
        display: none;
        z-index: -1;
    }
`;

