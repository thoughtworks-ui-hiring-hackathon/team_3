import {
    SET_MOBILE_TYPE_RESPONSE
} from '../actions/getMovie'


export default (state = {}, action) => {
    const {type, payload} = action;
    switch (type) {
        case SET_MOBILE_TYPE_RESPONSE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}