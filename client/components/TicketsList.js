import React from 'react';
import { render } from 'react-dom';


const TicketsList = (props) => {

    const styles = {
        ticketsContainer: {
            maxWidth: '1000px',
            display: 'flex',
            flexWrap: 'wrap'
        },
        ticketItem: {
            width: '200px',
            height: '200px',
            marginRight: '10px',
            marginBottom: '10px'
        },
        ticketImage: {
            width: '100%',
            height: '80%',
        },
        ticketBtn: {
            width: '100%',
            height: '20%',
            padding: '10px 20px 10px 20px'
        }
    }

    const ticketBtnClick = (e) => {
        console.log(e.target.parentNode.children[0])
    }

    const onClickImage = (e) => {
        props.onClickImage(e.target.src)
    }

    
    const tickets = props.tickets.map((ticket, i) => 
        <div style={styles.ticketItem} key={i}>
            <img style={styles.ticketImage} src={ticket.imageUrl}
            onClick={onClickImage}
            />
            <button 
                style={styles.ticketBtn}
                onClick={ticketBtnClick} >
                {ticket.status === 'unread' ? 'Mark as checked': 'checked'}
            </button>
        </div>
    );
    return (
        <div style={{width: '100%'}}>
            <h2>Submitted Tickets</h2>
            <div style={styles.ticketsContainer}>
                {tickets}
            </div>
        </div>
        
    )
}


export default TicketsList;