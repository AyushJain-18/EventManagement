import {takeLatest, put,all,call} from 'redux-saga/effects';
import EVENTS_TYPES from './event.types';
import {
    startFetchingAllEvents,
    successFetchingAllEvents,
    failFetchingAllEvents,
    successAddingNewEvents,
    failAddingNewEvents

} from './event.action'

import {getRequest,postRequest} from '../../util/api.call';

// get all the passengers
function * getAllEvents(){
  try {   
    const allEvents= yield getRequest('/events');
    console.log('allEvents', allEvents);
    yield put(successFetchingAllEvents(allEvents.data));
    }
    catch(error){
        yield put(failFetchingAllEvents)
    }
}
// delete a passenger
function * addNewEvent({payload}){
    console.log('new event data to be entered is',payload)
    try{
        yield postRequest(`/events`,payload);
        yield put(successAddingNewEvents());
        yield put(startFetchingAllEvents());
     } catch(error){
         yield put(failAddingNewEvents)
     }

}

function* startFetchingEvents(){
    yield takeLatest(EVENTS_TYPES.START_FETCHING_ALL_EVENTS, getAllEvents)
}
function* startAddingNewEvent(){
    yield takeLatest(EVENTS_TYPES.START_ADD_NEW_EVENTS, addNewEvent)
}

export default function *eventSaga(){
        yield all(
            [
                call(startFetchingEvents),
                call(startAddingNewEvent)
            ]
        )
}