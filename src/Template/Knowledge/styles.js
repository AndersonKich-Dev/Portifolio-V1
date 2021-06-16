import styled, {keyframes} from 'styled-components'

export const Content = styled.div`
    width: 100%;
   // border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    //padding: 1rem;

`;

const move = keyframes`
    0%{
        opacity: 0;
        transform: translateY(50px);
    }100%{
        opacity: 1;
        transform: translateY(0);
    }
`;


export const Card = styled.div`
    position: relative;
    width: 250px;
    height: 65vh;
    border: 2px solid ${props => props.theme.colors.border_white};
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    transform: translateY(50px);
    padding: 1rem .5rem;
    background: ${props => props.theme.colors.bd_blue_card_200};
    border-radius: 10px;
    opacity: 0;
    animation:${props => props.animate ?  move : ''} 1.5s normal forwards ease-in-out ;
    animation-delay: ${props => `${props.delay}s`};
    transition: all 1s ease-in-out;


    h1{
        text-transform: uppercase;
        margin-top: 2rem;
        transition: all 1s ease-in-out;
    }

    ul{
        width: 100%;
        height: 80%;
        overflow: auto;
        left: 50%;
        padding: 1rem;
       
        transition: all 1s ease-in-out;

        ::-webkit-scrollbar {
            width: 0;
        }

        li{
            width: 100%;
            height: 2rem;
            margin-bottom: 1rem;
            border-bottom: 1px solid ${props => props.theme.colors.border_white};
            display: flex;
            align-items: center;
            justify-content: flex-start;
            transition: all 1s ease-in-out;
            
            p {
                margin-left: .5rem;
            }

            span {
                width: 1.5rem;
                height: 1.5rem;
                font-size: .8rem;
                font-family: Lexend_600;
                color: white;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                border-bottom-left-radius: 8px;
                background-color: ${props => props.theme.colors.bd_navyBlue_card};
                border: 1px solid ${props => props.theme.colors.border_white};
                transform: translateY(-5px);
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }

  

    :hover {
        border: 2px solid ${props => props.theme.colors.bd_green};
    }

    

    :hover > h1 {
        color: ${props => props.theme.colors.text_white};
    }

    :hover > ul > li {
        border-bottom: 1px solid ${props => props.theme.colors.bd_green};
    }


    @media only screen and (min-width: 0px) and (max-width: 700px){
        width: 100%;
        height: 60vh;

    }
`; 

