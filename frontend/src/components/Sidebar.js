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
import { color } from "@mui/system";

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
  const { pathname } = useLocation()
  const [active, setActive] = useState("")
  const navigate = useNavigate()
  const theme = useTheme()
  useEffect(() => setActive(pathname.substring(1)), [pathname])


  return (

    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setisSidebarOpen(false)}
          variant="persistent"
          anchor="left"
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
                <Typography variant="h4" fontWeight="bold">ECOMVISION</Typography>
              </Box>
              {!isNonMobile && (
                <IconButton>
                  <ChevronLeft />
                </IconButton>
              )}
            </FlexBetween>
          </Box>
          <List>
            {navItems.map(({ text, icon }) => {
              if (icon) {
                const lcText = text.toLowerCase()
                return <ListItem key={text} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate(`/${lcText}`)
                      setActive(lcText)
                    }}
                    sx={{
                      backgroundColor: lcText === active ? theme.palette.secondary[300] : "transparent",
                      color: lcText === active ? theme.palette.primary[600] : theme.palette.secondary[100]

                    }}>
                    <ListItemIcon sx={{
                      ml: "2rem",
                      color: lcText === active ? theme.palette.primary[600] : theme.palette.secondary[200]
                    }}>{icon}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    {
                      active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                  </ListItemButton>
                </ListItem>
              }
              return <Box key={text} m='1.5rem 2rem 2rem 3rem'>
                <Typography>{text}</Typography>
              </Box>
            })}
          </List>
        </Drawer>
      )}
    </Box>
  )
}

export default Sidebar
