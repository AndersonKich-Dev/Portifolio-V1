import styled from 'styled-components'
import { toogleBd, toogleHeigth, toogleMinHeight } from './mixins'

export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 5rem ;
    padding-bottom: 2rem;

    ${props => props.minHeight ? toogleMinHeight() : toogleHeigth()}

    h1, h2, h3, h4, h5, h6 {
        color: ${props => props.theme.colors.title_white}; 
    }

    h4 {
        font-size: 1.3rem;
    }

    p, input, textarea, button {
        font-size: 0.875rem;
    }
    
     ${props => props.backgroundColor === 'black' ?
        toogleBd(props.theme.colors.bd_black, props.theme.colors.text_gray_50)
        :
        toogleBd(props.theme.colors.bd_blue, props.theme.colors.text_gray)
    }
 
    @media only screen and (min-width: 700px) and (max-width: 1024px){   
        padding: 0 3rem ;         
        h4 {
            font-size: 0.875rem
        }
        
        p {
            font-size: 0.75rem
        }
        

    }

    @media only screen and (min-width: 0px) and (max-width: 700px){
        padding: 0 2rem;

        h4 {
            font-size: 0.75rem
        }
    
        p {
            font-size: 0.625rem
        }
    }
`;