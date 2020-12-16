import EVENTS_TYPES from './event.types';

// event fetching action creator
export const startFetchingAllEvents =()=>{
    return{
        type:EVENTS_TYPES.START_FETCHING_ALL_EVENTS,
    }
}

export const successFetchingAllEvents=(allEvents)=>{
    return{
        type:EVENTS_TYPES.SUCCESS_FETCHING_ALL_EVENTS,
        payload: allEvents
    }
}

export const failFetchingAllEvents =()=>{
    return{
        type:EVENTS_TYPES.FAILURE_FETCHING_ALL_EVENTS,
    }
}

// new event action creator
export const startAddingNewEvent =(newEventData)=>{
    return{
        type:EVENTS_TYPES.START_ADD_NEW_EVENTS,
        payload:newEventData
    }
}

export const successAddingNewEvents =()=>{
    return{
        type:EVENTS_TYPES.SUCCESS_ADD_NEW_EVENTS,
    }
}

export const failAddingNewEvents =()=>{
    return{
        type:EVENTS_TYPES.FAILURE_ADD_NEW_EVENTS,
    }
}


