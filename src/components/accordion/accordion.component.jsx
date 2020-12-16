import React, {useEffect}from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './accordion.styles.scss';
import AddNewEventForm from '../new-event-form/new-event-forms.component'
import EventContainer from '../events-container/events-container.component'
import Spinner from '../custum-components/spinner/spinner.component'
import {connect} from 'react-redux';

import { startFetchingAllEvents } from '../../store/events/event.action';
import {selectLoadingState} from '../../store/events/event.selector';




 const CustumAccordion = ({getAllEvents, isLoading})=> {
  useEffect(()=>{getAllEvents()},[getAllEvents])
  return (
    <div className='accordion-container'>
      <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header" >
              <h2 className ='accordion-header'>ADD NEW EVENT</h2>
          </AccordionSummary>
          <AccordionDetails><AddNewEventForm/></AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded={true}>
          <AccordionSummary   expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header" >
              <h2 className ='accordion-header'>ALL EVENTS</h2>
          </AccordionSummary>
          <AccordionDetails>{isLoading? <Spinner/>: <EventContainer/>}</AccordionDetails>
      </Accordion>
    </div>
  );
}
const mapStateToProps = state =>{
  return{
    isLoading: selectLoadingState(state)
  }
}
const mapDispatchToProps =(dispatch)=>{
  return{
         getAllEvents: ()=> dispatch(startFetchingAllEvents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustumAccordion); 