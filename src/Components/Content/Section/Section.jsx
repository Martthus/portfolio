import React from 'react'
import { Main, Profile, Projects } from "./style";
import SectionAbout from './Section-About/SectionAbout';
// import SectionProjects from './Section-Projects/SectionProjects';

export default function Section() {
    return (
        <Main>
            <Profile>
                <SectionAbout />
            </Profile>
            {/* <Projects>
                <SectionProjects />
            </Projects> */}
        </Main>
    )
}