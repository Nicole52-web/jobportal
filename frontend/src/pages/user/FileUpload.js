import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { uploadItemAction } from '../../redux/actions/itemAction';

const FileUpload = () => {
  const dispatch = useDispatch();


  const [name, setName] = useState("");
  const [file, setFile] = useState(null);


  const itemUpload =  useSelector(state => state.uploadItem);
  const {loading} =  itemUpload;


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !file) {
      alert("Please fill in all fields");
      return;
    }
  
    
  dispatch(uploadItemAction(name, file));
}
      
            
            return (

                <>
            
                
            
            <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                    bgcolor: "background.default",
                  }}
                >
                  <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
                    <Typography variant="h4" align="center" mb={2}>
                      File Uploads
                    </Typography>
                    <form onSubmit={handleSubmit}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        margin="normal"
                        type='text'
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                      <input
                        fullWidth
                        name="file"
                        margin="normal"
                        required
                        type="file"
                        accept='.pdf, .doc, .docx'
                        onChange={handleFileChange}
                      />
                     
                      <Button variant="contained" type="submit" value="Send" sx={{ mt: 2 }} disabled={loading}>
                        {loading ? "Uploading..." : "Submit"}
                      </Button>
                    </form>
                  </Box>
                </Box>
            
                
            
                </>
                
              );
}

export default FileUpload
