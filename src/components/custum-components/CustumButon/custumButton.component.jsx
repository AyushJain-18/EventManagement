import React from 'react'
import './custumButton.styles.scss'

// {children,...otherprops}
const CustumButton =({children,disabled,...otherprops})=>{
    return(
            <button {...otherprops} disabled={disabled}
                className ={disabled?'disabled-button custom-button': 'custom-button'}
            >{children}</button>
    )
}

export default CustumButton
