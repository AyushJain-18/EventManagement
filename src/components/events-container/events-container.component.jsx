import React from 'react';
import './events-container.styles.scss';

import CustumEvent from '../events/events.component';
import CustumSelect from '../custum-components/custum-select/custumSelect.component'

class EventContainer extends React.Component{
    filterOptions = [{value: 'ALL' },{value: 'Free'},{value:'Discount'},{value:'No Discount'}];
    constructor(props){
        super(props);
        this.state={
            allEvents: [],
            filterValue: 'ALL'
        }
    }
    componentDidMount(){
            this.setState({allEvents: [1,2,4,5]})
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
            <div class='filter-event-container'> 
            <div>
                Filter By: &nbsp; - &nbsp;&nbsp;
                <CustumSelect name='filter' id='filter'options={this.filterOptions} 
                              defaultValue='ALL' handleChange={this.handelFilterChangeEvent}/>
                
            </div>
            <div className='event-container'>
                        {this.state.allEvents.map((eachEvents,index) =>{
                            return  <CustumEvent key={index} eventData= {eachEvents}/>
                        })}
                </div>
        </div>
        )
    }
}


export default EventContainer;