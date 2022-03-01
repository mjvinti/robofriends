import React, { Component } from 'react';

class CounterButton extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count !== nextState.count) {
            return true;
        }

        return false;
    }

    updateCount = () => this.setState({ count: this.state.count + 1 });

    render() {
        const { color } = this.props;
        const { count } = this.state;
        console.log('CounterButton');

        return (
            <button color={color} onClick={this.updateCount}>
                Count: {count}
            </button>
        );
    }
}

export default CounterButton;