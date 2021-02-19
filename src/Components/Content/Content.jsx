import React from 'react'
// import Aside from '../Aside/Aside';
import Section from "./Section/Section";
import { Cloud, Main, Menu } from "./style";
import cloud from '../../Assets/cloud2.png'
import sonicRing from '../../Assets/ring-sonic.png'
import ringSonic from '../../Assets/ring-sonic.mp3'
import ReactAudioPlayer from 'react-audio-player';

export default function Content() {
    const [actived, setActived] = React.useState(false)

    const active = () => {
        setActived(!actived)
    }

    return (
        <Main >
            <Cloud src={cloud} alt="" />
            <Menu src={sonicRing} alt="" onClick={() => active()} actived={actived} />

            {actived &&
                <ReactAudioPlayer
                    src={ringSonic}
                    autoPlay="true"
                    volume={0.1}
                />}

            <Section actived={actived} />
            
            {/* {actived ? <Aside /> : <></>} */}
        </Main>
    )
}