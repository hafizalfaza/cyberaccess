import React from 'react';
import { render } from 'react-dom';
import TicketsList from './TicketsList';

const styles = {
    content: {
        position: 'absolute',
        left: '0',
        top: '200px'
    }
}

const tickets = [
    {
        imageUrl: 'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg',
        status: 'unread'
    },
    {
        imageUrl: 'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg',
        status: 'read'
    },
    {
        imageUrl: 'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg',
        status: 'unread'
    },
    {
        imageUrl: 'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg',
        status: 'read'
    },
    {
        imageUrl: 'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg',
        status: 'unread'
    },
    {
        imageUrl: 'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg',
        status: 'read'
    },
    {
        imageUrl: 'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg',
        status: 'unread'
    },
    {
        imageUrl: 'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg',
        status: 'read'
    },
    {
        imageUrl: 'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg',
        status: 'unread'
    },
    {
        imageUrl: 'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg',
        status: 'read'
    },
]

const Content = (props) => {
    return (
        <div style={styles.content}>
            <TicketsList tickets={tickets} ticketBtnClick={props.ticketBtnClick}/>
        </div>
    )
}


export default Content;