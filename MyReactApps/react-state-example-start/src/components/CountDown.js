import React from 'react';

class CountDown extends React.Component {
    constructor() {
        super();
        this.state =  {
            count: 0
        };
    }

    componentDidMount(){ //esto es una funcion prehecha 
        this.timerID = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            });
        }, 1000);   
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render(){ //esto tiene que return algo siempre
        if(this.state.count > 0){
        return <h1>Time remaining: {this.state.count} seconds </h1>
    }
    else {
        clearInterval(this.timerID);
        return <h1>Time is up</h1>
    }
    }
}

export default CountDown;