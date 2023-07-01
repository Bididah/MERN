import React from 'react'
import { Box, Typography, useTheme, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Header = ({ title, subTitle, needButton ,buttonText, path }) => {
  const theme = useTheme()
  const navigate = useNavigate()
  return (
    <Box>
      <Typography variant='h1' fontWeight={"bold"}>
        {title}
      </Typography>
      <Typography variant='h5' color={theme.palette.secondary[300]}>
        {subTitle}
      </Typography>
      { needButton ? (<Button
        sx={{
          backgroundColor: theme.palette.secondary[300],
          color: theme.palette.primary[600]
        }} onClick={() => navigate(path)} variant="contained"> {buttonText}</Button> ) : <></>}
    </Box>
  )
}

export default Header
