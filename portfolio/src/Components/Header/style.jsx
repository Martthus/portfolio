import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: default;
    h1 {
        font-size: 70px;
        margin: 0px;
    }
    @media screen and (max-width: 425px){
        height: 25vh;
        h1 {
            font-size: 25px;
            margin: 0px;
        }
        h3 {
            font-size: 15px;
        }
    }
    @media screen and (min-width: 426px) and (max-width: 719px){
        height: 25vh;
        h1 {
            font-size: 25px;
            margin: 0px;
        }
        h3 {
            font-size: 15px;
        }
    }
    @media screen and (min-width: 720px) and (max-width:1440px){
        height: 20vh;
        h1 {
            font-size: 40px;
            margin: 0px;
        }
        h3 {
            font-size: 25px;
        }
    }
`

export const Comet = styled.img`
    width: 5vmin;
    position: fixed;
    z-index: 0;
    top: -10%;
    right: -10%;
    animation: comet 10s linear 10s normal infinite;
    @keyframes comet {
        0% {
            top: -10%;
            right: 20%;
        }
        50% {
            right: 150%;
        }
        100% {
            top: 500%;
            right: 250%;
        }
    }
    @media screen and (max-width: 425px){
        animation-duration: 10s;
        @keyframes comet {
            30% {
                right: 200%;
            }
            100% {
                top: 500%;
                right: 350%;
            }
        }
    }
    @media screen and (min-width: 426px) and (max-width: 719px){
        @keyframes comet {
            30% {
                right: 200%;
            }
            100% {
                top: 670%;
                right: 350%;
            }
        }
    }
    @media screen and (min-width: 720px) and (max-width:1440px){
        @keyframes comet {
            30% {
                right: 200%;
            }
            100% {
                top: 550%;
                right: 350%;
            }
        }
    }
`

export const Asteroid1 = styled.img`
    width: 5vmin;
    position: fixed;
    z-index: 0;
    top: -10%;
    right: -10%;
    animation: asteroid1 7s linear 1s normal infinite;
    @keyframes asteroid1 {
        from {
            top: -10%;
            right: 30%;
        }
        50% {
            right: 160%;
        }
        to {
            top: 500%;
            right: 260%;
        }
    }
    @media screen and (max-width: 425px){
        @keyframes asteroid1 {
            0%{
                right: 20%;
            }
            30% {
                right: 260%;
            }
            100% {
                top: 500%;
                right: 410%;
            }
        }
    }
    @media screen and (min-width: 426px) and (max-width: 768px){
        @keyframes asteroid1 {
            0%{
                right: 20%;
            }
            30% {
                right: 260%;
            }
            100% {
                top: 670%;
                right: 410%;
            }
        }
    }
`

export const Asteroid2 = styled.img`
    width: 5vmin;
    position: fixed;
    z-index: 0;
    top: -10%;
    right: -10%;
    animation: asteroid2 5s linear 5s normal infinite;
    @keyframes asteroid2 {
        from {
            top: -10%;
            right: 60%;
        }
        50% {
            right: 190%;
        }
        to {
            top: 500%;
            right: 280%;
        }
    }
    @media screen and (max-width: 425px){
        @keyframes asteroid2 {
            30% {
                right: 440%;
            }
            100% {
                top: 500%;
                right: 580%;
            }
        }
    }
    @media screen and (min-width: 426px) and (max-width: 768px){
        animation-duration: 10s;
        @keyframes asteroid2 {
            30% {
                right: 440%;
            }
            100% {
                top: 950%;
                right: 580%;
            }
        }
    }
`