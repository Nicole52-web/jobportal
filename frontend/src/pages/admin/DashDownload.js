import { Box, Button, Paper, Typography, gridClasses } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import moment from 'moment'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSingleItemAction, downloadItemAction, getItemsAction } from '../../redux/actions/itemAction'



const DashDownload = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItemsAction())
    }, [dispatch]);


    const {success: deleteSuccess} = useSelector(state => state.deleteItem);
    const { items, loading } = useSelector(state => state.getItems);

    let data = [];
    data = (items !== undefined && items.length > 0) ? items : []


    const handleDownload = (id) => {
        dispatch(downloadItemAction(id));
    }
    
    const deleteItemById = (e, id) => {
        if (window.confirm(`You really want to delete item ID: "${id}" ?`)){
            dispatch(deleteSingleItemAction(id));
            if (deleteSuccess && deleteSuccess === true){
                dispatch(getItemsAction())
            }
        }
        console.log(id);
    }
    const columns = [

        {
            field: '_id',
            headerName: 'download ID',
            width: 150,
            editable: true,
        },
        {
            field: 'name',
            headerName: 'File name',
            width: 150,
        },
        // {
        //     field: 'file',
        //     headerName: 'File',
        //     width: 150,
        // },
        {
            field: 'createdAt',
            headerName: 'Creation date',
            width: 150,
            renderCell: (params) => (
                moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS')
            )
        },
        {
            field: 'user',
            headerName: 'User',
            width: 150,
            valueGetter: (data) => data.row.user ? data.row.user.firstName : 'Unknown',
        },
        // {
        //     field: 'email',
        //     headerName: 'Email',
        //     width: 150,
        // },
        {
            field: "Actions",
            width: 200,
            renderCell: (values) => (
                 
                            <Box sx={{ display: "flex", justifyContent: "space-between", width: "170px" }}>
                    
                            <Button onClick = {() => handleDownload(values.row._id)} variant="contained" style={{ color: "white"}}>Download</ Button>
                            < Button onClick={(e) => deleteItemById(e, values.row._id)} variant="contained" color="error">Delete</ Button>
                        </Box>
                         
            )
        }
    ]
    return (
        <Box >

            <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
                File Downloads
            </Typography>

            <Paper sx={{ bgcolor: "secondary.midNightBlue" }} >
               
            <Box sx={{ height: 400, width: '100%' }}>

            <DataGrid
                    
                     sx={{

                         '& .MuiTablePagination-displayedRows': {
                             color: 'white',
                         },
                         color: 'white',
                         [`& .${gridClasses.row}`]: {
                             bgcolor: (theme) =>
                                 // theme.palette.mode === 'light' ? grey[200] : grey[900],
                                 theme.palette.secondary.main
                         },
                         button: {
                             color: '#ffffff'
                         }

                     }}
                     getRowId={(row) => row._id}
                     rows={data}
                     columns={columns}
                     pageSize={3}
                     rowsPerPageOptions={[3]}
                     checkboxSelection
                     loading={loading}
                     slots={{ toolbar: GridToolbar }}
                 />
            </Box>
         </Paper>
        
            

        </Box>
    )
}

export default DashDownload
