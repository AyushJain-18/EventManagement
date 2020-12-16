import React from 'react';
import './events.styles.scss';
class CustumEvent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allEvents: []
        }
    }
    render(){
        const{Description,Discount, Event_Name, Price,Venue} = this.props.eventData;
        return(
        <div className='each-event-container'>
                <div className='event-item'> <span>Event Name</span>           <span>{Event_Name}</span> </div>
                <div className='event-item'> <span>Event Description</span>    <span> {Description} </span> </div>
                <div className='event-item'> <span>Event Venue</span>          <span> {Venue} </span> </div>
                <div className='event-item'> <span>Event Price</span>          <span> {Price} </span> </div>
                <div className='event-item'> <span>Event Discount</span>       <span>{Discount} % </span>  </div>

        </div>
        )
    }
}

export default CustumEvent;