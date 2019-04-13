import React, { Component } from 'react';


const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheat'
};
class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        const scale = this.props.scale;
        return (
            <div>
                <fieldset>
                    <legend>Enter the temerature in {scaleName[scale]}</legend>
                    <input
                        value={this.props.temperature}
                        onChange={this.handleChange}
                    />
                </fieldset>
            </div>

        );
    }
}

export default TemperatureInput;
