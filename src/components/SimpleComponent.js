import React from 'react'

export default class SimpleComponent extends React.Component {

constructor(props){
    super(props)
    this.state = {
        mood: "happy"
    }
}
    handleClick = event => {
        if(this.state.mood === "happy"){
            this.setState({mood : "sad"})
        }
        else {
            this.setState({mood : "happy"}) 
        }
    }

    render(){
        return(
            <div onClick={this.handleClick}>
                <p>{this.state.mood}</p>     
            </div>
        )
    }
}
