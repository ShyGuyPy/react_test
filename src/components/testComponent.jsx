import React, {Component } from 'react';

class TestComp extends Component {
    state={
        count: 0,
        imageURL: 'http://picsum.photos/200'
    };

    styles = {
        fontSize: "15px",
        fontWeight: "bold",
        margin: "5px"
        
    };

    render(){
        
        return (

        <div>
            <img src = {this.state.imageURL} />
            <span style = {this.styles}>{this.formatCount()}</span>
            <button>Press Me</button>
            <span className= "test_box1">Pull Data</span>
        </div>
        );
    }
    formatCount() {
        const {count} = this.state;
        const z = "Zero";
        
        return count === 0 ? z : count;
    }
}

export default TestComp;