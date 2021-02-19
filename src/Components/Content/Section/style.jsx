import styled from 'styled-components'

export const Main = styled.section`
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    transition: all 3s ease-in;
    @media screen and (max-width: 768px){
        width: 100%;
        padding: 10px 0;
        border: none;
    }
`

export const Profile = styled.div`
    grid-row: auto;
`

export const Projects = styled.div`
    grid-row: auto;
    @media screen and (max-width: 425px){
        display: flex;
        justify-content: center;
    }
`