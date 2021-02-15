import React from 'react';
import styled from 'styled-components'
import Nav from './Components/Header/Nav';

const Main = styled.main`
    margin: 0;
    display: flex;
    flex-direction: column;
    background: red;
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
      {/* <Content /> */}
    </Main >
  );
}

export default App;
