import React from 'react';
import './new-event-forms.styles.scss';

import FormInput from '../custum-components/form-input/form-input.component';
import CustumButton from '../custum-components/CustumButon/custumButton.component';

import {connect} from 'react-redux';

import {startAddingNewEvent} from '../../store/events/event.action';


class AddNewEventForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            eventName: '',
            description: '',
            venue: '',
            price: '',
            discount: '',
            hasEventNameError: false,
            hasDescriptionError: false,
            hasVenueError: false,
            hasPriceError: false,
            hasDiscountError: false,
            eventNameErrorMsg: '',
            descriptionErrorMsg: '',
            venueErrorMsg: '',
            priceErrorMsg: '',
            discountErrorMsg: '',
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        let eventData = {
            "id":  this.state.eventName + this.state.venue +this.state.price,
            "Description"   : this.state.description,
            "Discount"      : this.state.discount, 
            "Event_Name"    : this.state.eventName,
            "Price"         : this.state.price,
            "Venue"         : this.state.venue
        }
        console.log('event Data is',eventData);
        try{
           // postRequest('/events', eventData)
           this.props.startAddingNewEvents(eventData);
        } catch(error){
            console.log('error in post request')
        }
     
    }
    handleChnage=(event)=>{ 
            const{name,value, validity} = event.target;
            this.validateForm( name,value,validity);
            this.setState({[`${name}`]: value})
    }
    resetForm = ()=>{
        this.setState({
            eventName: '',
            description: '',
            venue: '',
            price: '',
            discount: '',
            hasEventNameError: false,
            hasDescriptionError: false,
            hasVenueError: false,
            hasPriceError: false,
            hasDiscountError: false,
            eventNameErrorMsg: '',
            descriptionErrorMsg: '',
            venueErrorMsg: '',
            priceErrorMsg: '',
            discountErrorMsg: '',
        })
    }
    validateForm=(name, value,validity)=>{
       if(name ==='eventName'){
           if(!validity.valid){
                this.setState({hasEventNameError: true, eventNameErrorMsg:'Event name cannot be Empty'});
            }else{
                this.setState({hasEventNameError: false, eventNameErrorMsg:''});
            }
         }
       if(name === 'description'){
            if(!validity.valid){
                this.setState({hasDescriptionError: true, descriptionErrorMsg:'Description cannot be Empty'});
            }else{
                this.setState({hasDescriptionError: false, descriptionErrorMsg:''});
            }
       }
       if(name === 'venue'){
            if(!validity.valid){
                this.setState({hasVenueError: true, venueErrorMsg:'Venue cannot be Empty'});
            }else{
                this.setState({hasVenueError: false, venueErrorMsg:''});
            }
       }
       if(name === 'price'){
                if(!validity.valid){
                let errorMsg= 'price is mandatory and cannot be less than one';
                this.setState({hasPriceError: true, priceErrorMsg:errorMsg});
                }else{
                this.setState({hasPriceError: false, priceErrorMsg:''});
                }
       }
       if(name === 'discount'){
            let errorMsg= 'discount percentage cannot be empty';
            if(value<0){
                errorMsg = 'discount percentage cannot be less than zero';
            }
            if(value>100){
                errorMsg = 'discount percentage cannot be greater than 100';
            }
            if(!validity.valid){
                this.setState({hasDiscountError: true,discountErrorMsg:errorMsg});
            }else{
                this.setState({hasDiscountError: false, discountErrorMsg:''});
            }
       }
    }
    render(){
        const {eventName,description,venue,price,discount,hasDiscountError,hasEventNameError,
             hasDescriptionError,hasVenueError,hasPriceError,priceErrorMsg, discountErrorMsg,
             eventNameErrorMsg,descriptionErrorMsg,venueErrorMsg
            } = this.state;
        return(
            <div className ='form-container'>
                    <form className = 'add-new-event-form'onSubmit={this.handleSubmit}> 
                            <FormInput 
                                type='text' 
                                isError={hasEventNameError}
                                name='eventName' 
                                label='Event Name'
                                value={eventName} 
                                required
                                onBlur={(event)=>{this.validateForm(event.target.name,event.targetvalue,event.target.validity)} }  
                                handleChange={this.handleChnage} />
                                {hasEventNameError&&<span className='errorMessage'>{eventNameErrorMsg}</span>}

                            <FormInput
                                    type='text'
                                    name='description'
                                    label='Event Description'
                                    value={description}
                                    isError={hasDescriptionError} 
                                    required
                                    onBlur={(event)=>{this.validateForm(event.target.name,event.targetvalue,event.target.validity)} }
                                    handleChange ={this.handleChnage}/>
                                     {hasDescriptionError&&<span className='errorMessage'>{descriptionErrorMsg}</span>}

                            <FormInput
                                    type='text'
                                    name='venue'
                                    label='Event Venue'
                                    value={venue} 
                                    isError={hasVenueError}
                                    required
                                    onBlur={(event)=>{this.validateForm(event.target.name,event.targetvalue,event.target.validity)} }  
                                    handleChange ={this.handleChnage}/>
                                    {hasVenueError&&<span className='errorMessage'>{venueErrorMsg}</span>}
                                
                            <FormInput
                                    type='number'
                                    name='price'
                                    label='Price'
                                    min="1" 
                                    value={price} 
                                    isError={hasPriceError}
                                    required
                                    onBlur={(event)=>{this.validateForm(event.target.name,event.targetvalue,event.target.validity)} }  
                                    handleChange ={this.handleChnage}/>
                                    {hasPriceError&&<span className='errorMessage'>{priceErrorMsg}</span>}

                            <FormInput
                                    type='number'
                                    name='discount'
                                    label='Discount Percentage'
                                    value={discount} 
                                    isError={hasDiscountError}
                                    min="0" 
                                    max="100"
                                    required
                                    onBlur={(event)=>{this.validateForm(event.target.name,event.targetvalue,event.target.validity)} }  
                                    handleChange ={this.handleChnage}/>  
                                    {hasDiscountError&&<span className='errorMessage'>{discountErrorMsg}</span>}  
                <div className='form-button'>
                    <CustumButton type ='submit'>Add New Event </CustumButton>
                    <CustumButton  type ='button' onClick={this.resetForm}>Reset</CustumButton>
                </div>
        </form> 
    </div>
        );
    }
}



const mapDispatchToprops =dispatch=>{
    return{
        startAddingNewEvents: (eventData)=>dispatch(startAddingNewEvent(eventData))
    }
}

export default connect(null,mapDispatchToprops)(AddNewEventForm);
