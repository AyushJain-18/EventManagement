import React from 'react';
import './events-container.styles.scss';

import CustumEvent from '../events/events.component';
import CustumSelect from '../custum-components/custum-select/custumSelect.component';
import {getRequest} from '../../util/api.call';

class EventContainer extends React.Component{
    filterOptions = [{value: 'ALL' },{value: 'Free'},{value:'Discount'},{value:'No Discount'}];
    constructor(props){
        super(props);
        this.state={
            allEvents: [],
            filterValue: 'ALL'
        }
    }
    async componentDidMount(){
        try {   
            const eventData= await  getRequest('/events');
            console.log(Array.isArray(eventData.data) )
            this.setState({allEvents: eventData.data})
        } catch(error){

        }
    }
    handelFilterChangeEvent = value => {
        this.setState({filterValue: value})

    }
    render(){
        if(this.state.allEvents.length === 0){
            return (
            <div className='no-events'>No events found</div>
            )
        }
        return(
            <div className='filter-event-container'> 
            <div>
                Filter By: &nbsp; - &nbsp;&nbsp;
                <CustumSelect name='filter' id='filter'options={this.filterOptions} 
                              defaultValue='ALL' handleChange={this.handelFilterChangeEvent}/>
                
            </div>
            <div className='event-container'>
                        {this.state.allEvents.map((eachEvents,index) =>{
                            console.log(eachEvents)
                            return  <CustumEvent key={index} eventData= {eachEvents}/>
                        })}
                </div>
        </div>
        )
    }
}


export default EventContainer;