import React from 'react';
import './new-event-forms.styles.scss';

import FormInput from '../custum-components/form-input/form-input.component'


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
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log('event state is ',this.state);
    }
    handleChnage=(event)=>{
            const{name,value} = event.target;
            this.setState({[`${name}`]: value}, ()=> console.log('updated event state is',this.state))
    }
    validateForm=()=>{

    }
    render(){
        const {eventName,description,venue,price,discount,hasDiscountError,
             hasEventNameError,hasDescriptionError,hasVenueError,hasPriceError} = this.state;
        return(
            <div className ='form-container'>
                <h2 className = 'form-header'>ADD NEW EVENT</h2>
                    <form className = 'add-new-event-form'onSubmit={this.handleSubmit}> 
                            <FormInput 
                                type='text' 
                                isError={hasEventNameError}
                                name='eventName' 
                                label='Event Name'
                                value={eventName} 
                                required
                                handleChange={this.handleChnage} />

                            <FormInput
                                    type='description'
                                    name='description'
                                    label='Event Description'
                                    value={description}
                                    isError={hasDescriptionError} 
                                    required
                                    handleChange ={this.handleChnage}/>

                            <FormInput
                                    type='text'
                                    name='venue'
                                    label='Event Venue'
                                    value={venue} 
                                    isError={hasVenueError}
                                    required
                                    handleChange ={this.handleChnage}/>
                                
                            <FormInput
                                    type='number'
                                    name='price'
                                    label='Price'
                                    value={price} 
                                    isError={hasPriceError}
                                    required
                                    handleChange ={this.handleChnage}/>

                            <FormInput
                                    type='number'
                                    name='discount'
                                    label='Discount'
                                    value={discount} 
                                    isError={hasDiscountError}
                                    min="1" 
                                    max="100"
                                    required
                                    handleChange ={this.handleChnage}/>    
                            {/* <div className='form-button'>
                                <CustumButton 
                                    type ='submit'>
                                        Sign In
                                </CustumButton>
                            </div>
                            <div className='form-button'>
                                <CustumButton 
                                    type ='submit'>
                                        Sign In
                                </CustumButton>
                            </div> */}
                    </form> 
              </div>
        );
    }
}

export default AddNewEventForm;