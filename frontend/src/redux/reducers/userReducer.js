import { ALL_USER_LOAD_FAIL, ALL_USER_LOAD_REQUEST, ALL_USER_LOAD_RESET, ALL_USER_LOAD_SUCCESS, USER_APPLY_JOB_FAIL, USER_APPLY_JOB_REQUEST, USER_APPLY_JOB_RESET, USER_APPLY_JOB_SUCCESS, USER_CONTACT_FAIL, USER_CONTACT_REQUEST, USER_CONTACT_RESET, USER_CONTACT_SUCCESS, USER_DELETE_FAIL, USER_DELETE_REQUEST, USER_DELETE_RESET, USER_DELETE_SUCCESS, USER_LOAD_FAIL, USER_LOAD_REQUEST, USER_LOAD_RESET, USER_LOAD_SUCCESS, USER_LOGOUT_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_RESET, USER_LOGOUT_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_RESET, USER_SIGNIN_SUCCESS, USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_RESET, USER_SIGNUP_SUCCESS } from "../constants/userConstant"

export const userReducerSignIn = (state = {}, action)=> {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true, userInfo: null, isAuthenticated: false }
        case USER_SIGNIN_SUCCESS:
            return {

                loading: false,
                userInfo: action.payload,
                isAuthenticated: true
            }    
        case USER_SIGNIN_FAIL:
            return { loading: false, userInfo: null, isAuthenticated: false, error: action.payload }
        case USER_SIGNIN_RESET:
            return {}        
        default:
            return state;    
           
    }
}


// sign up reducer
export const userReducerSignUp = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return { loading: true }
        case USER_SIGNUP_SUCCESS:
            return {
                loading: false,
                userSignUp: action.payload,
            }
        case USER_SIGNUP_FAIL:
            return { loading: false, error: action.payload }
        case USER_SIGNUP_RESET:
            return {}
        default:
            return state;
    }
}

// contact page
export const userReducerContactPage = (state = {}, action) => {
    switch (action.type) {
        case USER_CONTACT_REQUEST:
            return { loading: true }
        case USER_CONTACT_SUCCESS:
            return {
                loading: false,
                userSignUp: action.payload,
            }
        case USER_CONTACT_FAIL:
            return { loading: false, error: action.payload }
        case USER_CONTACT_RESET:
            return {}
        default:
            return state;
    }
}

//user profile
export const userReducerProfile = (state = { user: null }, action) => {
    switch (action.type) {
        case USER_LOAD_REQUEST:
            return { loading: true, user: null }
        case USER_LOAD_SUCCESS:
            return {
                loading: false,
                user: action.payload.user,
            }
        case USER_LOAD_FAIL:
            return { loading: false, user: null, error: action.payload }
        case USER_LOAD_RESET:
            return {}
        default:
            return state;
    }

}


//log out
export const userReducerLogout = (state = {}, action)=> {
    switch (action.type) {
        case USER_LOGOUT_REQUEST:
            return { loading: true }
        case USER_LOGOUT_SUCCESS:
            return {

                loading: false,
                user: action.payload,
            }    
        case USER_LOGOUT_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT_RESET:
            return {}        
        default:
            return state;    
           
    }
}

//apply for job reduceer

export const userApplyJobReducer = (state = {}, action)=> {
    switch (action.type) {
        case USER_APPLY_JOB_REQUEST:
            return { loading: true}
        case USER_APPLY_JOB_SUCCESS:
            return {

                loading: false,
                userJob: action.payload,
            }    
        case USER_APPLY_JOB_FAIL:
            return { loading: false, error: action.payload }
        case USER_APPLY_JOB_RESET:
            return {}        
        default:
            return state;    
           
    }
}

//all users reducers
//all users reducer
export const allUserReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case ALL_USER_LOAD_REQUEST:
            return { loading: true, users: [] }
        case ALL_USER_LOAD_SUCCESS:
            return {
                loading: false,
                users: action.payload.users,
            }
        case ALL_USER_LOAD_FAIL:
            return { loading: false, users: [], error: action.payload }
        case ALL_USER_LOAD_RESET:
            return {}
        default:
            return state;
    }

}

//delete user reducer
export const deleteUserReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_DELETE_REQUEST:
            return { loading: true }
        case USER_DELETE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                message: action.payload.message
            }
        case USER_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case USER_DELETE_RESET:
            return {}
        default:
            return state;
    }
}
