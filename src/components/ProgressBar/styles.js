import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    h4 {
        text-transform: uppercase;
    }
`;

export const Bar = styled.div`
    width: 100%;
    height: 20px;
    background-color: ${props => props.theme.colors.text_black_100};
    border-radius: 5px;

    @media only screen and (min-width: 0px) and (max-width: 700px){
        height: 15px;
    }
`;

 export const Progress = styled.div`
    position: relative;
    width: ${props => props.width};
    height: 100%;
    background-color: ${props => props.theme.colors.bd_green_progress};
    border-radius: 5px;
    
`;



export const BoxProgressValue = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -35px;
    left: -26px;
    transform: translateX${props => `(${props.trans}px)`};

    @media only screen and (min-width: 0px) and (max-width: 700px){
        top: -28px;
        left: -18px;
    }
`;


export const ProgressValue = styled.div`
    width: 52px;
    height: 27px;
    border-radius: 5px;
    background: ${props => props.theme.colors.bd_blue_small};
    padding: 5px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    

    p{ 
        color: ${props => props.theme.colors.text_white};
    }

    @media only screen and (min-width: 0px) and (max-width: 700px){
        width: 35px;
        height: 20px;
    }
`;

export const ArrowProgress = styled.div`
    border-style: solid;
    border-width: 6px;
    color: rgba(0,0,0,0);
    border-top: 6px solid ${props => props.theme.colors.bd_blue};
    height: 0;
    width: 0;
`;