import './App.css';
import { contrastColor } from 'contrast-color';
import randomColor from 'randomcolor';
import { useState } from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  margin-bottom: 3rem;
`;

const GlobalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  width: 100%;
`;

const Container = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;

const Input = styled.input`
  border: 0;
  outline: 0;
  border-bottom: 2px solid black;
  padding: 0.3rem 1rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem 1.5rem;
  background-color: white;
  border-radius: 10px;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  transition: all 0.2s;
  box-shadow: 2px 2px 1px 1px black;
  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translate(2px);
    box-shadow: 0px 0px 0px 0px black;
  }
`;

const Generated = styled.div`
  text-align: center;
  padding: 4rem 8rem;
  border-radius: 10px;
  transition: background-color 0.6s ease-out;
  border: 1px solid rgba(0, 0, 0, 0.136);
`;

function App() {
  const [color, setColor] = useState('none');
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');

  function handleHueChange(event) {
    event.preventDefault();
    const newHue = event.currentTarget.value;
    setHue(newHue);
    console.log(newHue);
  }

  function handleHLuminosityChange(event) {
    event.preventDefault();
    const newLum = event.currentTarget.value;
    setLuminosity(newLum);
    console.log(newLum);
    console.log(typeof newLum);
  }

  function handleGenerateColor() {
    setColor(
      randomColor({
        luminosity: luminosity,
        hue: hue,
      }),
    );
  }

  return (
    <GlobalContainer className="App">
      <Container>
        <Heading>Generate Random Colors</Heading>
        <label htmlFor="lum"></label>
        <Input
          placeholder="set luminosity"
          id="lum"
          value={luminosity}
          onChange={(e) => handleHLuminosityChange(e)}
        ></Input>
        <label htmlFor="hue"></label>
        <Input
          placeholder="set hue"
          id="hue"
          value={hue}
          onChange={(e) => handleHueChange(e)}
        ></Input>
        <Button onClick={handleGenerateColor} className="generate">
          Generate
        </Button>
        <Generated
          style={{
            backgroundColor: color,
            color: contrastColor({ bgColor: color }),
          }}
          className="generated"
        >
          Generated Color: {color}
        </Generated>
      </Container>
    </GlobalContainer>
  );
}

export default App;
