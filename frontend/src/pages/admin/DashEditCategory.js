import { Box, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { updateJobTypeAction } from '../../redux/actions/jobTypeAction';


const validationSchema = yup.object({

    jobTypeName: yup
        .string('Enter a Category')
        .required('Category is required'),
});

const DashEditCategory = () => {
    const { user } = useSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            user: user && user._id,
            updateJobType: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            const id = user && user._id
;            dispatch(updateJobTypeAction(id, values.updateJobType));
            //alert(JSON.stringify(values, null, 2));
            actions.resetForm();
        },
    });

   



    return (
        <>

            <Box sx={{ height: '100%', display: "flex", alignItems: "center", justifyContent: "center", pt: 4 }}>


                <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                        <Typography variant="h5" component="h2" sx={{ pb: 3 }}>
                            Update a Category
                        </Typography>
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="jobTypeName"
                            label="category"
                            name='jobTypeName'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="category name"
                            value={formik.values.jobTypeName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.jobTypeName && Boolean(formik.errors.jobTypeName)}
                            helperText={formik.touched.jobTypeName && formik.errors.jobTypeName}
                        />


                        <Button fullWidth variant="contained" type='submit' >Update category</Button>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default DashEditCategory
