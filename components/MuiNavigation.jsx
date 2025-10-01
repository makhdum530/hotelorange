"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
const fizzycoLogo = '/logo.png';

const MuiNavigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            component={Link}
            href={item.path}
            onClick={handleDrawerToggle}
            sx={{
              color:
                pathname === item.path
                  ? theme.palette.primary.main
                  : "inherit",
              "&:hover": {
                backgroundColor: theme.palette.primary.main + "10",
              },
            }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          {/* <Typography
            variant="h5"
            component={Link}
            href="/"
            sx={{
              fontWeight: 700,
              background:
                "linear-gradient(135deg, hsl(14, 88%, 55%), hsl(25, 95%, 53%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textDecoration: "none",
              animation: "glow 2s ease-in-out infinite",
              "@keyframes glow": {
                "0%, 100%": { opacity: 1 },
                "50%": { opacity: 0.7 },
              },
            }}
          >
            Fizzyco
          </Typography> */}
          <Box
                component={Link}
                href="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  animation: 'logoFloat 3s ease-in-out infinite',
                  transform:  'scale(1)',
                  transition: 'transform 0.3s ease',
                  '@keyframes logoFloat': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-5px)' },
                  },
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <img
                  src={fizzycoLogo}
                  alt="Fizzyco Logo"
                  style={{
                    height:  '50px',
                    width: 'auto',
                    transition: 'height 0.3s ease',
                  }}
                />
              </Box>

          {/* Desktop Menu */}
          {isMobile ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ color: theme.palette.primary.main }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  href={item.path}
                  sx={{
                    color:
                      pathname === item.path
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    fontWeight: pathname === item.path ? 600 : 500,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main + "10",
                      transform: "translateY(-2px)",
                    },
                    transition:
                      "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default MuiNavigation;
