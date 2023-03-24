import React from 'react';

class Clicky extends React.Component {
    constructor() {
        super();
        this.state =  {
            clicked: 0
        };
        this.handleClick = this.handleClick.bind(this); //esto se hace solo para cuando creas tus propias funciones
    }

    componentDidMount(){ //esto es una funcion prehecha 
        console.log('mounted');
    }

    handleClick(){
        //console.log('clicked', this.state.clicked); 
        this.setState({
            clicked: this.state.clicked + 1
        });
        
    }

    render() { //esto tiene que return algo siempre
        return(
            <>
                <h1>Button has been clicked { this.state.clicked } times.</h1>
                <button onClick={this.handleClick}>Click me</button>
            </>
        );
    }
}

export default Clicky;