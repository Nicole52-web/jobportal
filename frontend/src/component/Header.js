import React from 'react'
import { Box, styled } from '@mui/material'
import headerImage from '../images/work.jpg'

const Header = () => {

  const StyleHeader = styled(Box)(({theme }) =>(
    {
        dispaly: "flex",
        justifyContent: "center",
        minHeight: 400,
        backgroundImage: `url(${headerImage})`,
        backgroundPosition: "center",
        backgroundColor: theme.palette.secondary.main
    }
  ));
  return (
   <>
        <StyleHeader >
            
        </StyleHeader>
   </>
  )
}

export default Header
