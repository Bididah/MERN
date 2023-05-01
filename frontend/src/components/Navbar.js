import React, { useState }from 'react'
import { 
  LightModeOutlined, 
  DarkModeOutlined, 
  Menu as MenuIcon, 
  Search, 
  SettingsOutlined, 
  ArrowDropDownOutlined } from '@mui/icons-material'
import FlexBetween from './flexBetween'
import { setMode } from 'state'
import { AppBar, IconButton, InputBase, Toolbar, } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { themeSettings } from 'theme'


const Navbar = ({isSidebarOpen , setIsSidebarOpen}) => {
  const dispatch  = useDispatch()
  const theme = themeSettings(useSelector((state) => state.global.mode)) 
  

  return (
    <AppBar sx = {{
      position: "static",
      background: "none",
      boxShadow: "none"
    }}>
       <Toolbar sx = {{
        justifyContent: 'space-between'
       }}>
        
        <FlexBetween>
          <IconButton onClick={()=> setIsSidebarOpen(!isSidebarOpen)}>
              <MenuIcon/>
          </IconButton>
          <FlexBetween 
          backgroundColor = {theme.palette.background.alt}
          borderRadius = '9px'
          gap = '3rem'
          p= "0.1rem 1.5rem"
          >
            <InputBase  placeholder='Search...'/>
            <Search/>
          </FlexBetween>
        </FlexBetween>

        <FlexBetween gap = "3rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" 
             ? <DarkModeOutlined />
             : <LightModeOutlined /> 
            }
          </IconButton>
          <IconButton>
             <SettingsOutlined />
          </IconButton>
        </FlexBetween>

       </Toolbar>
       
    </AppBar>
  )
}

export default Navbar
