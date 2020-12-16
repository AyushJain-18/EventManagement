import React from 'react';
import './events-container.styles.scss';
import {connect} from 'react-redux';

import CustumEvent from '../events/events.component';
import CustumSelect from '../custum-components/custum-select/custumSelect.component';
import {getAllFreeEvents, getAllDiscountEvents, getAllZeroDiscountEvents} from '../../util/filter.utils';

import {selectAllEvents} from '../../store/events/event.selector';


class EventContainer extends React.Component{
    filterOptions = [{value: 'ALL' },{value: 'Free'},{value:'Discount'},{value:'No Discount'}];
    constructor(props){
        super(props);
        this.state={
            allEvents: [],
            eventsToDisplay: []
        }
    }
    componentDidMount(){
           this.setState({allEvents: this.props.allEvents, eventsToDisplay:this.props.allEvents})
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
                Filter By: &nbsp;&nbsp;
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

const mapStatToProps =(state)=>{
    return{
            allEvents: selectAllEvents(state)
    }
}
export default connect(mapStatToProps)(EventContainer);


