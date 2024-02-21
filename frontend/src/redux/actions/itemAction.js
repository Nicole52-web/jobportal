import axios from "axios";
import { toast } from "react-toastify";
import { DOWNLOAD_ITEM_FAIL, DOWNLOAD_ITEM_REQUEST, DOWNLOAD_ITEM_SUCCESS, GET_ITEM_FAIL, GET_ITEM_REQUEST, GET_ITEM_SUCCESS, UPLOAD_ITEM_FAIL, UPLOAD_ITEM_REQUEST, UPLOAD_ITEM_SUCCESS } from "../constants/itemConstant";


//file upload action
export const uploadItemAction = (name, file) => async (dispatch) => {
    try {
        dispatch({ type: UPLOAD_ITEM_REQUEST });
        
        const formData = new FormData();
        formData.append("name", name);
        formData.append("file", file);

        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }

        const { data } = await axios.post("/api/upload", formData, config);

        dispatch({
            type: UPLOAD_ITEM_SUCCESS,
            payload: data
        });
        toast.success("File Uploaded Successfully");

    } catch (error) {
        dispatch({
            type: UPLOAD_ITEM_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
}
}

//Load all files
export const getItemsAction = () => async (dispatch) => {
    dispatch({ type: GET_ITEM_REQUEST });

    try {
        const { data } = await axios.get("/api/upload");

        dispatch({
            type: GET_ITEM_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: GET_ITEM_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}
//file download action
export const downloadItemAction = (id) => async (dispatch) => {
   
        dispatch({ type: DOWNLOAD_ITEM_REQUEST });

         try {
       
        const response = await axios.get(`/api/download/${id}`, {
            responseType: "blob"
        });

        console.log(response);

        if (!response.data) {
            throw new Error('No data in response');
        }

        const contentDisposition = response.headers['content-disposition'];
        const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        const matches = filenameRegex.exec(contentDisposition);
        let filename = 'file'; // Default filename if not found
        if (matches && matches[1]) {
            filename = matches[1].replace(/['"]/g, '');
        }


const blob = new Blob([response.data], { type: response.data.type});
const link = document.createElement("a");
link.href = window.URL.createObjectURL(blob);
link.download=filename;
link.click();

dispatch({ 
    type: DOWNLOAD_ITEM_SUCCESS,
    payload: response.data
 });
toast.success("File Downloaded Successfully");

} catch (error) {
    dispatch({
        type: DOWNLOAD_ITEM_FAIL,
        payload: error.response.data.error
    });
    toast.error(error.response.data.error);
}
}