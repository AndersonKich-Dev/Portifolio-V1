import styled, {keyframes} from 'styled-components'

export const About = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 2rem;

    span {
        width: 2px;
        height:90%;
        background-color: ${props => props.theme.colors.text_black_100};
    }

    @media only screen and (min-width: 0px) and (max-width: 700px){
        height: 67%;
    }

    @media only screen and (min-width: 0px) and (max-width: 700px){
        flex-direction: column;
        height: 75%;
       

        span {
            display: none;
        }
    }
`;

export const AboutFlexBox = styled.div`
    width: 48%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;     

    h3 {
        margin: 1rem 0;
    }

    :nth-child(1){
       h3{
        margin-bottom: 3rem;
       }
    }
    
    @media only screen and (min-width: 0px) and (max-width: 700px){
        width: 100%;
        

        :nth-child(1){
            h3{
                margin-bottom: 0;
            }
        }
    }    
`;

export const AboutQualitiesList = styled.ul`
    width: 100%;
    min-height: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const moveTecnology = keyframes` 
    0% {
        transform: translateX(70px);       
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    };
`;

export const TecnologyItems = styled.li`
    width: 100%;
    margin-bottom: .5rem;
    opacity: 0;
    animation:${props => props.animate ?  moveTecnology : ''} 1.5s normal forwards ease-in-out ;
    animation-delay: ${props => `${props.delay}s`};
`;

export const QualitiListItems = styled.div`
    position: relative;
    width: 100%;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    p {
        margin-left: 3rem;
    }

    ::before {
        content: '';
        width: 18px;
        height: 18px;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        left: 1rem;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.bd_blue_small};
    }
    

    @media only screen and (min-width: 700px) and (max-width: 1024px){           
        ::before {
            width:14px;
            height:14px;
        }        
    }


   @media only screen and (min-width: 0px) and (max-width: 700px){     
        ::before {
            width:12px;
            height:12px;
        }       
    }

`;

const moveQuality = keyframes` 
    0% {
        transform: translateX(-70px);       
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    };
`;

export const QualityItems = styled.li`
    width: 100%;
    margin-bottom: 1rem;
    opacity: 0;
    animation:${props => props.animate ?  moveQuality : ''} 1.5s normal forwards ease-in-out ;
    animation-delay: ${props => `${props.delay}s`};
`;

