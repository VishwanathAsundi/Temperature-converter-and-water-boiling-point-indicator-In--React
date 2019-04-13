import React, { Component } from 'react';
import TemperatureInput from './temperature-input';
import DisplayResult from './display';
import './App.css';

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  let output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
function toCelsius(fahrenheat) {
  return (fahrenheat - 32) * 5 / 9;
}
function toFahrenheat(celsius) {
  return (9 * celsius / 5) + 32;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: ''
    }
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }
  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }
  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheat = scale === 'c' ? tryConvert(temperature, toFahrenheat) : temperature;

    return (
      <div className="box">
        <h2>Temperature converter and water boiling point indicator.</h2>
        <TemperatureInput
          scale={'c'}
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale={'f'}
          temperature={fahrenheat}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <DisplayResult celsius={parseFloat(celsius)} />
      </div>

    );
  }
}

export default App;
