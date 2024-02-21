import * as React from 'react'
import { useSelector} from 'react-redux'
import Box from '@mui/material/Box'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useTheme } from '@emotion/react';
import { orange } from '@mui/material/colors';

const SelectComponent = ({ handleChangeCategory, cat }) => {

    const { jobType } = useSelector(state => state.jobTypeAll);
    const { palette } = useTheme();
  return (
    <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
                inputProps={{
                    MenuProps:{
                        MenuListProps: {
                            sx: {
                                backgroundColor: orange['400']
                            }
                        }
                    }
                }}
               labelId='demo-simple-select-label'
               id='demo-simple-select'
               value={cat}
               label="Category"
               onChange={handleChangeCategory}
            >
                <MenuItem value="">All</MenuItem>
                {
                    jobType && jobType.map(jt => (
                        <MenuItem key={jt._id} value={jt._id}>{jt.jobTypeName}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    </Box>
  )
}

export default SelectComponent
