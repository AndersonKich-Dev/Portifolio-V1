import styled, { keyframes } from 'styled-components'

export const Experience =  styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    overflow-y: scroll;
    flex-wrap: wrap;

    ::-webkit-scrollbar {
        width: 0;
    }
`;


//==================================================================================

const move = keyframes` 
    0% {
        transform: translateY(70px);       
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    };
`;

export const ExperienceBox = styled.div`
    position: relative;
    width: 100%;
    padding: 0rem 0rem 3rem 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    opacity: 0;
    animation:${props => props.animate ?  move : ''} 1.5s normal forwards ease-in-out ;
    animation-delay: ${props => `.${props.animateDelay}s`};

    ::after {
        content: '';
        position: absolute;
        top: .7rem;
        left: 0;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.bd_blue_small};
    }

    ::before {
        content: '';
        width: 2px;
        height: 80%;
        background-color: ${props => props.theme.colors.border_gray_100};
        position: absolute;
        top: 2rem;
        left: 7px;
    }

    @media only screen and (min-width: 0px) and (max-width: 700px){
        ::after, ::before {
            display: none;
        }

    }

`;

export const SubExperienceBox = styled.div`
    position: relative;
    width: 98%;
    min-height: 8rem;
    border: 1px solid ${props => props.theme.colors.border_gray_100};
    background: ${props => props.theme.colors.bd_gray_200};
    display: flex;
    flex-direction: column;
    padding: .5rem;
    border-radius: 5px;

    ::before, ::after {
        content: "";
        height: 0;
        position: absolute;
        top: .5rem;
        width: 0;
        border-style: solid ;
        border-width: 10px;
        color: rgba(0,0,0,0);
    }

    ::after {
        border-right: 10px solid ${props => props.theme.colors.bd_gray_200};
        left: -18px;
    }

    ::before {
        border-right: 10px solid ${props => props.theme.colors.border_gray_100};
        left: -20px;
    }   

    @media only screen and (min-width: 700px) and (max-width:1080px){
        width: 97%;
    }

    @media only screen and (min-width: 0px) and (max-width: 700px){
        width: 100%;

        ::after, ::before {
            display: none;
        }

    }
`;

export const Description = styled.p`
    margin: 1rem 0;
`;

export const Title = styled.div`
    width: 100%;
    height: 3.75rem;
    border-bottom: 1px solid ${props => props.theme.colors.border_gray_100};

    h1 {
        font-size: 1.2rem;
        margin-bottom: .5rem;
        white-space: nowrap;
        width: 100%;
        overflow: hidden;            
        text-overflow:    ellipsis;
    }
`;
