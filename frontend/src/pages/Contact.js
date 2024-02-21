import { useRef, useState } from "react";
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import emailjs from '@emailjs/browser'
import { TextField, Button, Typography, Box } from "@mui/material";

export default function ContactForm() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eyqibci', 'template_k6usi9c', form.current, 'pRxOgLuLic4MqmwCs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset(form);
  };


  return (

    <>

    <Navbar/>

<Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
        <Typography variant="h4" align="center" mb={2}>
          Contact Us
        </Typography>
        <form ref={form} onSubmit={sendEmail}>
          <TextField
            fullWidth
            label="Name"
            name="user_name"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="user_email"
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button variant="contained" type="submit" value="Send" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>

    <Footer/>

    </>
    
  );
}