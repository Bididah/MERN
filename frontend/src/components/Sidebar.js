import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
  ChevronRight,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import flexBetween from "./flexBetween";
import FlexBetween from "./flexBetween";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];

const Sidebar = ({
  isNonMobile, 
  drawerWidth, 
  isSidebarOpen, 
  setisSidebarOpen }) => {
    const {pathname} = useLocation()
    const [active, setActive] = useState("")
    const navigate = useNavigate()
    const theme = useTheme()
    
    useEffect(() => setActive(pathname.substring(1)), [pathname])
    

  return (
    
      <Box component="nav">
         {isSidebarOpen && (
           <Drawer 
             open = {isSidebarOpen}
             onClose={() => setisSidebarOpen(false)}
             variant = "persistent"
             anchor = "left"
             sx={{
              width: drawerWidth,
              "& .MuiDrawer-paper": {
                color: theme.palette.secondary[200],
                backgroundColor: theme.palette.background.alt,
                boxSixing: "border-box",
                borderWidth: isNonMobile ? 0 : "2px",
                width: drawerWidth,
              },
            }}
            >
              
              <Box m='1.5rem 2rem 2rem 3rem'>
                <FlexBetween color={theme.palette.secondary.main}>
                   <Box>
                      <Typography variant="h4" fontWeight= "bold">ECOMVISION</Typography>
                   </Box>
                   {!isNonMobile && (
                    <IconButton>
                      <ChevronLeft/>
                    </IconButton>
                   )}
                </FlexBetween>
              </Box>
              <List>
                 {navItems.map((el) => {
                    console.log(el.text === "Dashboard")
                    if (el.text === "Dashboard") {
                     return  <Box>
                        <FlexBetween>
                           <IconButton>
                             {el.icon}
                           </IconButton>
                           <Typography>
                             {el.text}
                           </Typography>
                           <IconButton>
                             <ChevronRight/>
                           </IconButton>
                        </FlexBetween>
                      </Box>
                    } else {
                      if(el.icon) {
                        return <ListItem>
                           <ListItemButton>
                              <FlexBetween>
                                 <IconButton>
                                   {el.icon}
                                 </IconButton>
                                 <Typography>
                                   {el.text}
                                 </Typography>
                              </FlexBetween>
                           </ListItemButton>
                        </ListItem>
                      }
                      return <Box m='1.5rem 2rem 2rem 3rem'>
                        <Typography>{el.text}</Typography>
                      </Box>
                    }
                   
                 })}
              </List>

              
           </Drawer>
         )}
      </Box>
  )
}

export default Sidebar
