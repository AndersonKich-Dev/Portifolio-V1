import styled, {keyframes} from 'styled-components'

const moveIcon = keyframes` 
    0% {
        transform: translateX(-50px);       
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    };
`;

const moveFeature = keyframes` 
    0% {
        transform: scale(0);
        opacity: 0;      
    }
    100% {
        opacity: 1;
        transform: scale(1);
    };
`;




export const Footer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 5rem;

    @media only screen and (min-width: 0px) and (max-width: 700px){
        flex-direction: column;
        justify-content: space-around;
    }
`;

export const FooterBoxFlex = styled.div`
    position: relative;
    width: 50%;
    height: 40%;

    @media only screen and (min-width: 0px) and (max-width: 700px){
        width: 100%;
        :nth-child(2){
            height: 20%;
        }
    }
   
`;

export const FooterIcons = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
`;

export const FooterIconsItem = styled.li`   
    flex: 1;
    height: 60px;
    display: flex;       
    align-items: center;
    justify-content: space-between;
    transform: translateX(-50px);
    opacity: 0;
    animation:${props => props.animate ?  moveIcon : ''} 1.5s normal forwards ease-in-out ;
    
    span {
        flex:1;
        margin-left: 1rem;
        display: flex;       
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        p {
            margin-top: 0.312rem;
            text-transform: capitalize;
        }
    }
    

    div {
        width: 3rem;
        height: 3rem;
        border: 1px solid ${props => props.theme.colors.bd_white}; 
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;


        svg {
            width: 40%;
            height: 40%;
            color: ${props => props.theme.colors.bd_white}
        }
    }

            :nth-child(1) {
                animation-delay: .1s;
            }
            :nth-child(2) {
                animation-delay: .5s;
            }
            :nth-child(3) {
                animation-delay: .9s;
            }

    @media only screen and (min-width: 0px) and (max-width: 700px){  
        div {
            width: 2.5rem;
            height: 2.5rem;
        }
    }

`;


export const FooterFeature = styled.div`
    width: 80%;
    height: 80px;
    border-top: 2px solid ${props => props.theme.colors.text_black_100};
    display: flex;
    align-items: center;
    justify-content: center;
    animation:${props => props.animate ?  moveFeature : ''} 1.5s normal forwards ease-in-out ;

    p {
        text-transform: capitalize;
        font-family: Inter_600;
    }
`;
