import React, { Component } from "react";

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            clickCount: 0
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("previous state", prevState )
            console.log("previous props", prevProps)
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }  
        })
    }

    clickCount() {
        this.setState((prevState, prevProps) => {
            console.log("previous state", prevState )
            console.log("previous props", prevProps)
            return {
                clickCount: prevState.clickCount + 1
            }  
        })
    }

    render() {
        return (
        <div>
            <h1>{this.state.introduction}, you clicked {this.state.clickCount} times.</h1>
            <button onClick={() => this.handleClick()}>
                {this.state.buttonText}
            </button>
            <button onClick={() => this.clickCount()}>
                Click me!
            </button>
        </div>
        )
    };
}

export default StatefulGreetingWithPrevState;