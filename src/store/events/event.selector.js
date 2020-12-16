import {createSelector} from 'reselect';


export const selectEvents =store=> store.events;

export const selectLoadingState = createSelector([selectEvents], events=>events.isLoading)

export const selectEventFetchedError = createSelector([selectEvents], events=>events.isEventFetchError)

export const selectAllEvents =  createSelector([selectEvents], events=> events.allEvents === null? []: events.allEvents );


export const selectHasPostEventStarted  =  createSelector([selectEvents], events=>events.hasPostEventStarted);


export const selectHasPostEventSuccess  =  createSelector([selectEvents], events=>events.hasPostEventSuccess);


export const selectHasPostEventError    =  createSelector([selectEvents], events=>events.hasPostEventError);


