import React, { Component } from 'react';
import { render } from 'react-dom';


const styles = {
    imageContainer: {
        position: 'fixed',
        height: '100%',
        width: '100%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: "rgba(0, 0, 0, 0.7)",
    },
    image: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '500px'
    }
}

const onClickImage = (e) => {
    e.stopPropagation();
}

const ImagePopup = (props) => {
    return(
        <div onClick={props.toggleImagePopup} style={styles.imageContainer}>
            <img onClick={onClickImage} style={styles.image} src={props.imageSrc}/>
        </div>
        
    )
}

export default ImagePopup;