import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { deleteJobReducer, editJobReducer, loadJobReducer, loadJobSingleReducer, registerAjobReducer } from './reducers/jobReducers';
import { createJobTypeReducer, deleteJobTypeReducer, loadJobTypeReducer, updateJobTypeReducer } from './reducers/jobTypeReducer';
import { allUserReducer, deleteUserReducer, userApplyJobReducer, userReducerContactPage, userReducerLogout, userReducerProfile, userReducerSignIn, userReducerSignUp } from './reducers/userReducer';
import { modeReducer } from './reducers/themeModeReducer';
import { deleteItemReducer, downloadItemReducer, getItemsReducer, itemReducer } from './reducers/itemReducer';



//combine reducers
const reducer = combineReducers({
    loadJobs: loadJobReducer,
    jobTypeAll: loadJobTypeReducer,
    signIn: userReducerSignIn,
    logOut: userReducerLogout,
    userProfile: userReducerProfile,
    singleJob: loadJobSingleReducer,
    userJobApplication: userApplyJobReducer,
    allUsers: allUserReducer,
    mode: modeReducer,
    signUp: userReducerSignUp,
    contactPage: userReducerContactPage,
    registerJob: registerAjobReducer,
    createJobType: createJobTypeReducer,
    deleteJob: deleteJobReducer,
    deleteUser:deleteUserReducer,
    deleteCategory: deleteJobTypeReducer,
    editJob: editJobReducer,
    updateJobType: updateJobTypeReducer,
    uploadItem: itemReducer,
    getItems: getItemsReducer,
    downloadItem: downloadItemReducer,
    deleteItem: deleteItemReducer
});



//initial state
let initialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    },
    mode: "light",
};
let middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;