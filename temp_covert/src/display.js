import React from 'react';

class DisplayResult extends React.Component {
    render() {
        if (this.props.celsius >= 100) {
            return <p className="text-green">Water would boil..</p>
        }
        return <p className="text-red">Water would not boil..</p>
    }
}

export default DisplayResult;