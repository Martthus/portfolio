import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    min-height: 100vh;
    z-index: 111;
    @media screen and (min-width: 320px) and (max-width: 425px){
        min-height: 182vh;
    }
    @media screen and (min-width: 426px) and (max-width: 719px){
        min-height: 203vh;
    }
    @media screen and (min-width: 720px) and (max-width: 1440px){
        max-height: 100vh;
    }
`
export const Cloud = styled.img`
    width: 100%;
    height: 10%;
    position: absolute;
    top: 29%;
    right: 0;
    @media screen and (max-width: 425px){
        height: 4%;
        top: 24%;
        transform: rotate(-0.5deg);
        z-index: 1;
    }
    @media screen and (min-width: 426px) and (max-width: 768px){
        height: 6%;
        top: 22%;
        transform: rotate(-0.5deg);
        z-index: 1;
    }
    @media screen and (min-width: 720px) and (max-width: 1440px){
        height: 4%;
        top: 18%;
        transform: rotate(-0.5deg);
        z-index: 1;
    }
    @media screen and (min-width: 350px) and (max-width: 370px){
        height: 4%;
        top: 10%;
        transform: rotate(-0.5deg);
        z-index: 1;
    }
`

export const Menu = styled.img`
        display: flex;
        width: 10vmin;
        height: 10vmin;
        position: absolute;
        top: ${props => props.actived ? '3%' : '3%'};
        left: ${props => props.actived ? '1%' : '1%'};
        border: 3px black solid;
        transform: rotateY(${props => props.actived ? '360deg' : ''});
        transition: .8s ease-in-out;
        border-radius: 50%;
            :hover {
                cursor: pointer;
            }
    @media screen and (max-width: 320px){
        width: 21vmin;
        height: 22vmin;
        top: ${props => props.actived ? '32.3%' : '32.3%'};
        left: ${props => props.actived ? '38.56%' : '38.56%'};
        z-index: 1;
    }    
    @media screen and (min-width: 321px) and (max-width: 375px){
        width: 21vmin;
        height: 22vmin;
        top: ${props => props.actived ? '31.5%' : '31.5%'};
        left: ${props => props.actived ? '38.7%' : '38.7%'};
        z-index: 1;
    }
    @media screen and (min-width: 378px) and (max-width: 425px){
        width: 21vmin;
        height: 22vmin;
        top: ${props => props.actived ? '34.2%' : '34.2%'};
        left: ${props => props.actived ? '38.8%' : '38.8%'};
        z-index: 1;
    }
    @media screen and (min-width: 720px) and (max-width: 1440px){
        width: 21vmin;
        height: 22vmin;
        top: ${props => props.actived ? '23.5%' : '23.5%'};
        left: ${props => props.actived ? '39%' : '39%'};
        z-index: 1;
    }
`