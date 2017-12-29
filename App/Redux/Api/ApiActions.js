import * as ActionTypes from './ApiActionTypes'

export const getApiRequest = (state) => ({
    type: ActionTypes.GET_API_REQUEST,
    state
});