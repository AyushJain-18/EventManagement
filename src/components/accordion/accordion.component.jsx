import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './accordion.styles.scss';
import AddNewEventForm from '../new-event-form/new-event-forms.component'



 const CustumAccordion = ()=> {


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
          <AccordionDetails></AccordionDetails>
      </Accordion>
    </div>
  );
}


export default CustumAccordion