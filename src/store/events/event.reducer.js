import EVENTS_TYPES from './event.types'

const ADMIN_INITIAL_STATE={
        isLoading             : false,
        isEventFetchError     : false,
        allEvents             : null,
        hasPostEventStarted   : false,
        hasPostEventSuccess   : false,
        hasPostEventError     : false         
}

const adminReducer = (state=ADMIN_INITIAL_STATE,action)=>{
    switch(action.type){
        case EVENTS_TYPES.START_ADD_NEW_EVENTS:
        case EVENTS_TYPES.START_FETCHING_ALL_EVENTS:
            return{
                ...state,
                isLoading: true,
                isEventFetchError: false,
                hasPostEventError: false
            }
        case EVENTS_TYPES.SUCCESS_FETCHING_ALL_EVENTS:
            return{
                ...state,
                isLoading        : false,
                isEventFetchError: false,
                allEvents: action.payload
            }
        case EVENTS_TYPES.SUCCESS_ADD_NEW_EVENTS:
            return{
                ...state,
                isLoading        : false,
                hasPostEventError: false,
                hasPostEventSuccess: true
            }
            case EVENTS_TYPES.FAILURE_FETCHING_ALL_EVENTS:
                return{
                    ...state,
                    isLoading        : false,
                    isEventFetchError: false,
                    allEvents: []
                }
                case EVENTS_TYPES.FAILURE_ADD_NEW_EVENTS:
                    return{
                        ...state,
                        isLoading           : false,
                        hasPostEventError   : true,
                        hasPostEventSuccess : false
                    } 
        default:
            return state
    }

}

export default adminReducer;