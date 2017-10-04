import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './Navbar';
import Content from './Content';

const styles = {
    mainContainer: {
        position: 'relative'
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.ticketBtnClick = this.ticketBtnClick.bind(this);
    }

    ticketBtnClick(e){
        console.log(e)
    }


    render(){
        return (
            <div style={styles.mainContainer}>
                <Navbar />
                <Content ticketBtnClick={this.ticketBtnClick}/>
            </div>
        )
    }
    
}

export default App;