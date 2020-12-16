import React, { Fragment } from 'react';
import './custumSelect.styles.scss'

/**
 * this will recive 
 * @name- name of the select
 * @id - represnts id
 * @options will be array of object conatins [{value: 'car1'}]
 * @editable - flag whether to display string or select
 * @string - string element to display if not editable
 * @defaultValue - defualt value to be selected
 *  */ 

// console.log('Display Value',name, id, options , defaultValue );
const CustumSelect =({name, id, options , defaultValue, handleChange})=>{
        return(
                <select className="select-css" 
                        name={name} 
                        id={id} 
                        key={id}
                        defaultValue={defaultValue}  
                        onChange={(event)=>handleChange(event.target.value)}>
                 {
                    options.map((option,index)=>        
                        <option key= {index+id} 
                                value={option.value}
                                >{option.value}</option>)
                 }  
                </select>
            )
        }
    
export default CustumSelect;

