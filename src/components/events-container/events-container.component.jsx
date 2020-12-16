import React from 'react';
import './events-container.styles.scss';

import CustumEvent from '../events/events.component';
import CustumSelect from '../custum-components/custum-select/custumSelect.component';
import {getRequest} from '../../util/api.call';
import {getAllFreeEvents, getAllDiscountEvents, getAllZeroDiscountEvents} from '../../util/filter.utils';

class EventContainer extends React.Component{
    filterOptions = [{value: 'ALL' },{value: 'Free'},{value:'Discount'},{value:'No Discount'}];
    constructor(props){
        super(props);
        this.state={
            allEvents: [],
            eventsToDisplay: []
        }
    }
    async componentDidMount(){
        try {   
            const eventData= await  getRequest('/events');
            this.setState({allEvents: eventData.data, eventsToDisplay: eventData.data})
        } catch(error){

        }
    }
    handelFilterChangeEvent = value => {
        let filteredEventArray =[];
        if(value === 'ALL'){            filteredEventArray  = this.state.allEvents; }
        if(value === 'Free'){           filteredEventArray  = getAllFreeEvents(this.state.allEvents); }
        if(value ==='Discount'){        filteredEventArray  = getAllDiscountEvents(this.state.allEvents);}
        if(value ==='No Discount'){     filteredEventArray  = getAllZeroDiscountEvents(this.state.allEvents); }
        this.setState({eventsToDisplay: filteredEventArray})

    }
    render(){
        return(
            <div className='filter-event-container'> 
            <div>
                Filter By: &nbsp; - &nbsp;&nbsp;
                <CustumSelect name='filter' id='filter'options={this.filterOptions} 
                              defaultValue='ALL' handleChange={this.handelFilterChangeEvent}/>
                
            </div>
            {
                this.state.eventsToDisplay.length === 0? 
                <div className='no-events'>No events found</div>: 
                <div className='event-container'>
                            {this.state.eventsToDisplay.map((eachEvents,index) =>{
                                return  <CustumEvent key={index} eventData= {eachEvents}/>
                            })}
                </div>
            }
        </div>
        )
    }
}


export default EventContainer;