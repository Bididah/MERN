import { React, useState } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import { useGetUserQuery } from 'state/api'

const Layout = () => {
  const userid = useSelector((state) => state.global.user_id)
  const {data} = useGetUserQuery(userid)
  const infos = []
  const product = []
  const toto = [] 

  const isNonMobile = useMediaQuery("(min-width: 600px)")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        user = {data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen} />
      <Box flexGrow={1}>
        <Navbar
          user = {data || {}}
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
        <Outlet />
      </Box>
            <Box flexGrow={1}>
        <Navbar 
          setIsSidebarOpen = {setIsSidebarOpen} 
          isSidebarOpen = {isSidebarOpen}
        />
        {/* <Outlet/> */}
      </Box>
            <Box flexGrow={1}>
        <Navbar 
          setIsSidebarOpen = {setIsSidebarOpen} 
          isSidebarOpen = {isSidebarOpen}
        />
        {/* <Outlet/> */}
      </Box>

    </Box>
  )
}

export default Layout
