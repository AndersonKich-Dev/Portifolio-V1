import styled, {keyframes} from 'styled-components'

const moveTitle = keyframes` 
    0% {
        transform: translateX(-70px);       
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    };
`;

export const Container = styled.div`
    margin-top: 6rem;
    width: 100%;
    display: flex;
    height: 4rem;
    margin-bottom: 1rem;
    align-items: center; 
    justify-content: space-between;
    flex-direction: column;
    transform: translateX(-70px);   
    opacity: 0;
    animation:${props => props.animate ?  moveTitle : ''} 1.5s normal forwards ease-in-out ;

    h2 {
        font-size: 2.5rem;
        text-align: center;
    }
   
    @media only screen and (min-width: 700px) and (max-width: 1024px){
        margin-top: 4rem;
      
    }

    @media only screen and (min-width: 0px) and (max-width: 700px){
        margin-top: 1rem;
       h2 {
        font-size: 2rem;
       }

       p{
           text-align: center;
       }
    }
`;