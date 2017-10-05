import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './Navbar';
import Content from './Content';
import ImagePopup from './ImagePopup';

const styles = {
    mainContainer: {
        position: 'relative'
    }
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imagePopupActive: false,
            imageSrc: ''
        }

        this.ticketBtnClick = this.ticketBtnClick.bind(this);
        this.toggleImagePopup = this.toggleImagePopup.bind(this);


    }

    ticketBtnClick(e){
        console.log(e)
    }

    toggleImagePopup(src){
        this.setState({imageSrc: src, imagePopupActive: !this.state.imagePopupActive})
    }   


    render(){
        const {imageSrc, imagePopupActive} = this.state;
        return (
            <div style={styles.mainContainer}>
                <Navbar />
                <Content ticketBtnClick={this.ticketBtnClick} onClickImage={this.toggleImagePopup}/>

                {imagePopupActive ? <ImagePopup imageSrc={ imageSrc } toggleImagePopup={this.toggleImagePopup}/> : null}
                
            </div>
        )
    }
    
}

export default App;