import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            currentTime: new Date().toLocaleString()
        };
    };
    componentDidMount() {
        this.intervalID = setInterval( () => this.setState({
            currentTime: new Date().toLocaleString()
        }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
    return (
        <p className="time" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
            {this.state.currentTime}
        </p>

    )
  }
}
export default Time;