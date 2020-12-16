import {createStore,applyMiddleware,combineReducers} from 'redux';
import { call} from 'redux-saga/effects';

import logger from 'redux-logger';

import createSagaMiddelware from 'redux-saga';

import eventSaga from './events/event.sagas';
import eventReducer from './events/event.reducer'



const sagaMiddelware = createSagaMiddelware();
const middleware=[sagaMiddelware];
if(process.env.NODE_ENV ==="development"){  middleware.push(logger);}


 function* rootSaga(){
    yield call(eventSaga);
}


const rootReducer = combineReducers({events: eventReducer })
const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddelware.run(rootSaga);


export default store;





