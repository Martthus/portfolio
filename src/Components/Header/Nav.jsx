import React from 'react'
import comet from '../../Assets/comet.png'
import asteroid1 from '../../Assets/asteroid1.png'
import asteroid2 from '../../Assets/asteroid2.png'
import { Asteroid1, Asteroid2, Comet, Header } from './style'

export default function Nav() {
    return (
        <Header>
            <h1>Matheus Martins Candido</h1>
            <h3>FullStack Developer</h3>
            <Comet src={comet} alt="" />
            <Asteroid1 src={asteroid1} alt="" />
            <Asteroid2 src={asteroid2} alt="" />
        </Header>
    )
}