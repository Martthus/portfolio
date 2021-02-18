import React from 'react'
import { About, Me, Profile } from './style'
import profile from '../../../../Assets/profile.jpg'

export default function SectionAbout() {
    return (
        <About >
            <Profile >
                <img src={profile} alt="Profile" srcSet={profile} />
            </Profile>
            <Me >
                <div>
                    <span>
                        <h2>Sobre mim</h2>
                        <p>
                            Meu nome é Matheus, tenho 21 anos e moro em Itapoá/SC.
                            Gosto de aprender e conhecimento é tudo, quando esbarro em um problema eu não esqueço ele
                            até
                            achar uma solução, por mais difícil que seja o problema, o importante é respirar fundo e
                            tentar
                            entender como começou a existir.
                        </p>
                        <p>
                            Meu objetivo é me aprofundar na area programador e desenvolvedor web. Quando entrei nesse
                            mundo,
                            eu encontrei um porque de estar nele, a vida não é longa, então temos que estudar, errar,
                            aprender e conquistar, e principalmente testar!
                        </p>
                    </span>
                </div>
            </Me>
        </About>
    )
}