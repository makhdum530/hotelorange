import React, { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery
} from "@mui/material"
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material"
import Link from "next/link";
import { usePathname } from "next/navigation";
const logo = '/logo.png';


const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const pathname = usePathname(); // works like location.pathname

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/rooms", label: "Rooms" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/restaurant", label: "Restaurant" },
    { path: "/contact", label: "Contact Us" },
    { path: "/terms", label: "Terms" }
  ]

  const isActive = path => pathname === path

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img
            src={logo}
            alt="Hotel Orange International"
            style={{ width: 40, height: 40 }}
          />
          <Typography variant="h6" color="primary" fontWeight="bold">
            Hotel Orange
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map(item => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              href={item.path}
              onClick={handleDrawerToggle}
              selected={isActive(item.path)}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "primary.light",
                  color: "white"
                }
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(20px)",
          boxShadow: 2,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        }}
      >
        <Toolbar>
          <Box
            component={Link}
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexGrow: 1,
              textDecoration: "none",
              "&:hover": { opacity: 0.8 }
            }}
          >
            <img
              src={logo}
              alt="Hotel Orange International"
              style={{ width: 40, height: 40 }}
            />
            <Typography
              variant="h6"
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.25rem" }
              }}
            >
              Hotel Orange International
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 1 }}>
              {navItems.map(item => (
                <Button
                  key={item.path}
                  component={Link}
                  href={item.path}
                  variant={isActive(item.path) ? "contained" : "text"}
                  sx={{
                    color: isActive(item.path) ? "white" : "primary.main",
                    borderBottom: isActive(item.path) ? 2 : 0,
                    borderColor: "primary.main",
                    borderRadius: isActive(item.path) ? 1 : 0,
                    position: "relative",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      backgroundColor: "primary.light",
                      color: "white",
                      transform: "translateY(-2px)",
                      borderRadius: 2,
                      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -2,
                      left: "50%",
                      transform: "translateX(-50%) scaleX(0)",
                      width: "80%",
                      height: "3px",
                      bgcolor: "primary.main",
                      borderRadius: 2,
                      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    },
                    "&:hover::after": {
                      transform: "translateX(-50%) scaleX(1)"
                    }
                  }}
                >
                  {item.label}
                </Button>
              
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer to account for fixed AppBar */}
      <Toolbar />
    </>
  )
}

export default Navigation
