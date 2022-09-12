import './App.css';
import { contrastColor } from 'contrast-color';
import randomColor from 'randomcolor';
import { useState } from 'react';
import styled from 'styled-components';

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
    <div className="global">
      <div className="container">
        <h1>Generate Random Colors</h1>
        <input
          placeholder="set luminosity"
          id="lum"
          value={luminosity}
          onChange={(e) => handleHLuminosityChange(e)}
        />
        <input
          placeholder="set hue"
          id="hue"
          value={hue}
          onChange={(e) => handleHueChange(e)}
        />
        <button onClick={handleGenerateColor} className="generate">
          Generate
        </button>
        <div
          className="generated"
          style={{
            backgroundColor: color,
            color: contrastColor({ bgColor: color }),
          }}
        >
          Generated Color: {color}
        </div>
      </div>
    </div>
  );
}

export default App;
