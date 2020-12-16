export const getAllFreeEvents= eventData =>{
    let resultEventsData = 
    eventData.filter(eachEventData =>  eachEventData.Discount === '100');
    return resultEventsData;
}

export const getAllZeroDiscountEvents= eventData =>{
    let resultEventsData = 
    eventData.filter(eachEventData =>  eachEventData.Discount === '0');
    return resultEventsData;
}

export const getAllDiscountEvents= eventData =>{
    let resultEventsData = 
    eventData.filter(eachEventData =>  eachEventData.Discount !== '0');
    return resultEventsData;
}