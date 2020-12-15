import React from 'react';
import './form-input.styles.scss'

const FormInput = ({handleChange,isError,label,...otherProps})=>{
return (
        <div className ='group'>  
            <input className={isError?'form-input error':'form-input'  }
                   onChange={handleChange} 
                   {...otherProps}
            />
            <label className = {otherProps.value.length? 'shrink form-input-label':'form-input-label'}
               style={isError?{color: 'red'}:null}
            >
                {label}
            </label> 
        </div>
    )
}

export default FormInput;

