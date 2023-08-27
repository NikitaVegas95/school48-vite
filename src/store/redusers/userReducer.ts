import {UserAction, UserActionTypes, UserState} from "../../interfaces/user.ts";

const initialState :UserState = {
    user: [],
    error: null,
    loading: false,
}
const userReducer = (state = initialState, action:UserAction):UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {loading: true, user: [], error: null}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, user: action.payload, error: null}
        default:
            return state
    }
}

export default userReducer