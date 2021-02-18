import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    min-height: 100vh;
    z-index: 111;
    @media screen and (min-width: 320px) and (max-width: 425px){
        /* min-height: 182vh; */
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
    transform: rotate(-0.3deg);

    @media screen and (min-width: 350px) and (max-width: 425px){
        height: 6%;
        width: 700px;
        top: 20%;
        transform: rotate(-0.2deg);
        z-index: 1;
    }
    @media screen and (min-width: 426px) and (max-width: 768px){
        height: 6%;
        top: 22%;
        transform: rotate(-0.5deg);
        z-index: 1;
    }
    @media screen and (min-width: 720px) and (max-width: 1440px){
        height: 9%;
        width: 1100px;
        top: 19%;
        transform: rotate(-0.5deg);
        z-index: 1;
    }
`

export const Menu = styled.img`
        display: flex;
        width: 9vmin;
        height: 9vmin;
        position: absolute;
        top: ${props => props.actived ? '9%' : '9%'};
        left: ${props => props.actived ? '1%' : '1%'};
        transform: rotateY(${props => props.actived ? '360deg' : '0deg'});
        transition: .8s ease-in-out;
        border-radius: 50%;
            :hover {
                cursor: pointer;
            }
        animation: ringSonic 5s infinite;
        @keyframes ringSonic{
            10% { top: 9%}
            25% {top: 5%}
            50% {top: 9%}
            75% {top: 5%}
            100% {top: 9%}
        }

    @media screen and (max-width: 320px){
        width: 21vmin;
        height: 22vmin;
        top: ${props => props.actived ? '32.3%' : '32.3%'};
        left: ${props => props.actived ? '38.56%' : '38.56%'};
        z-index: 1;
    }    
    @media screen and (min-width: 321px) and (max-width: 375px){
        width: 17vmin;
        height: 17vmin;
        top: ${props => props.actived ? '85%' : '85%'};
        left: ${props => props.actived ? '77%' : '77%'};
        z-index: 1;
        position: fixed;

        @keyframes ringSonic{
            10% { top: 85%}
            25% {top: 80%}
            50% {top: 85%}
            75% {top: 80%}
            100% {top: 85%}
        }
    }
    @media screen and (min-width: 378px) and (max-width: 425px){
        width: 21vmin;
        height: 22vmin;
        top: ${props => props.actived ? '34.2%' : '34.2%'};
        left: ${props => props.actived ? '38.8%' : '38.8%'};
        z-index: 1;
    }
    @media screen and (min-width: 720px) and (max-width: 1440px){
        width: 11vmin;
        height: 11vmin;
        top: ${props => props.actived ? '3%' : '3%'};
        left: ${props => props.actived ? '0%' : '0%'};
        z-index: 1;

        @keyframes ringSonic{
            10% { top: 3%}
            25% {top: 2%}
            50% {top: 3%}
            75% {top: 2%}
            100% {top: 3%}
        }
    }
`