import React from 'react';
import background from './Assets/2780110.jpg'
import styled from 'styled-components'
import Nav from './Components/Header/Nav';
import Content from './Components/Content/Content';

const Main = styled.main`
    margin: 0;
    display: flex;
    flex-direction: column;
    background: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    z-index: -1111;
    @media screen and (max-width: 400px){
      min-height: 115vh;
    }
`

const App: React.FC = () => {
  return (
    <Main>
      <Nav />
      <Content />
    </Main >
  );
}

export default App;
