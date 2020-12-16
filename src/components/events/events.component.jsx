import React from 'react';
import './events.styles.scss';


class CustumEvent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allEvents: []
        }
    }
    componentDidMount(){
            this.setState({allEvents: [1,2,4,5]})
    }
    render(){
        return(
        <div className='each-event-container'>
                <div className='event-item'> <span>Event Name</span>           <span> some text </span> </div>
                <div className='event-item'> <span>Event Description</span>    <span> some text </span> </div>
                <div className='event-item'> <span>Event Venue</span>          <span> some text </span> </div>
                <div className='event-item'> <span>Event Price</span>          <span> some text </span> </div>
                <div className='event-item'> <span>Event Discount</span>       <span>some text </span>  </div>

        </div>
        )
    }
}


export default CustumEvent;