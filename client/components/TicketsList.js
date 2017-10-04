import React from 'react';
import { render } from 'react-dom';


const TicketsList = (props) => {

    const styles = {
        ticketsContainer: {
            maxWidth: '1000px',
            height: '200px',
            border: '1px black solid',
            display: 'flex',
            flexWrap: 'wrap'
        },
        ticketItem: {
            width: '100px',
            height: '100px',
            border: '1px blue solid'
        },
        ticketImage: {
            width: '100%',
            height: '80%',
            border: '1px red solid'
        },
        ticketDesc: {
            width: '100%',
            height: '20%',
            border: '1px yellow solid'
        }
    }

    const ticketBtnClick = (e) => {
        console.log(e.target.parentNode.children[0])
    }

    
    const tickets = props.tickets.map((ticket, i) => 
        <div style={styles.ticketItem} key={i}>
            <img style={styles.ticketImage} src={ticket.imageUrl}
            />
            <button 
                style={styles.ticketDesc}
                onClick={ticketBtnClick} >
                {ticket.status === 'unread' ? 'Mark as read': 'check'}
            </button>
        </div>
    );
    return (
        <div style={styles.ticketsContainer}>
            {tickets}
        </div>
    )
}


export default TicketsList;