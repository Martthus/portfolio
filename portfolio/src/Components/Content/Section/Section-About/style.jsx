import styled from 'styled-components'

export const About = styled.section`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    width: 100%;
    h2 {
        text-align: center;
        color: white;
        cursor: default;
    }
    @media screen and (max-width: 425px){
        grid-template-rows: 1fr 3fr;
        grid-template-columns: 0;
        align-items: center;
        width: 100%;
    }
    @media screen and (min-width: 720px) and (max-width: 1440px){
        grid-template-rows: 1fr 2fr;
        grid-template-columns: 0;
        align-items: center;
        width: 100%;
    }
`

export const Profile = styled.div`
    width: 100%;
    height: 200px;
    grid-column: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 21vmin;
        height: 22vmin;
        border: 3px white solid;
        border-radius: 50%;
    }
    @media screen and (max-width: 425px){
        grid-row: auto;
        width: 100vw;
        height: 100px;
    }
    @media screen and (min-width: 720px) and (max-width: 1440px){
        grid-row: auto;
        width: 98.5vw;
    }
`

export const Me = styled.div`
    width: 100%;
    grid-column: 2;
    div {
        width: 100%;
        text-align: justify;
        color: white;
        cursor: help;
    }
    padding: 0 10px;
    background: rgba(63, 33, 61, 0.5);
    border-radius: 10px;
    @media screen and (max-width: 425px){
        grid-row: 2;
        display: flex;
        justify-content: center;
        padding: 5px 0;
        border-top-right-radius: 1px;
        border-top-left-radius: 70px;
        border-bottom-right-radius: 70px;
        border-bottom-left-radius: 1px;
        p{
            text-indent: 1rem;
            text-align: justify;
        }
        div{
            width: 80%;
            h2{
                margin: 0;
            }
        }
    }
    @media screen and (min-width: 720px) and (max-width: 1440px){
        grid-row: 2;
        display: flex;
        justify-content: center;
        padding: 10px 0 0;
        border-top-right-radius: 1px;
        border-top-left-radius: 70px;
        border-bottom-right-radius: 70px;
        border-bottom-left-radius: 1px;
        p{
            text-indent: 1rem;
            text-align: justify;
            font-size: 20px;
        }
        div{
            width: 80%;
            h2{
                margin: 0;
            }
        }
    }
`