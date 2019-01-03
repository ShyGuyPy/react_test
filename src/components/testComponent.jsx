import React, {Component } from 'react';

class TestComp extends Component {
    state={
        count: 1
    };

    render(){
        
        return (

        <div><span>{this.formatCount()}</span>
        <button>Press Me</button></div>
        );
    }
    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default TestComp;