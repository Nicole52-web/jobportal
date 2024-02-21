import { DOWNLOAD_ITEM_FAIL, DOWNLOAD_ITEM_REQUEST, DOWNLOAD_ITEM_RESET, DOWNLOAD_ITEM_SUCCESS, GET_ITEM_FAIL, GET_ITEM_REQUEST, GET_ITEM_RESET, GET_ITEM_SUCCESS, UPLOAD_ITEM_FAIL, UPLOAD_ITEM_REQUEST, UPLOAD_ITEM_RESET, UPLOAD_ITEM_SUCCESS } from "../constants/itemConstant";



//file upload reducer
export const itemReducer = (state = {}, action) => {
    switch (action.type) {
        case UPLOAD_ITEM_REQUEST:
            return { loading: true };
        case UPLOAD_ITEM_SUCCESS:
            return { loading: false, success: true, item: action.payload };
        case UPLOAD_ITEM_FAIL:
            return { loading: false, error: action.payload };
        case UPLOAD_ITEM_RESET:
            return {};
        default:
            return state;        
}
}

//load all files
export const getItemsReducer = (state = { items: [] }, action) => {
    switch (action.type) {
        case GET_ITEM_REQUEST:
            return { loading: true };
        case GET_ITEM_SUCCESS:
            return { 
                loading: false, 
                success: true, 
                items: action.payload.items };
        case GET_ITEM_FAIL:
            return { loading: false, error: action.payload };
        case GET_ITEM_RESET:
            return {};
        default:
            return state;        
}
}


// file download reducer


export const downloadItemReducer = (state = {}, action) => {
    switch (action.type) {
        case DOWNLOAD_ITEM_REQUEST:
            return { loading: true };
        case DOWNLOAD_ITEM_SUCCESS:
            return { loading: false, success: true};
        case DOWNLOAD_ITEM_FAIL:
            return { loading: false, error: action.payload };
        case DOWNLOAD_ITEM_RESET:
            return {};
        default:
            return state;
    }
}