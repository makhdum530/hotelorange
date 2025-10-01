"use client"
import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Button,
  Divider,
  useTheme,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';
import Link from 'next/link';
const fizzycoLogo = '/logo.png';

const MuiFooter = () => {
  const theme = useTheme();

  const socialLinks = [
    { icon: <Facebook />, label: 'Facebook', href: '#' },
    { icon: <Twitter />, label: 'Twitter', href: '#' },
    { icon: <Instagram />, label: 'Instagram', href: '#' },
    { icon: <LinkedIn />, label: 'LinkedIn', href: '#' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const productLinks = [
    { name: 'Khajur Cola', path: '/products' },
    { name: 'Classic Cola', path: '/products' },
    { name: 'Tropical Fusion', path: '/products' },
    { name: 'All Products', path: '/products' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, hsl(220, 13%, 18%), hsl(220, 13%, 12%))',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, hsl(14, 88%, 55%), hsl(25, 95%, 53%), hsl(14, 88%, 55%))',
          animation: 'shimmer 3s ease-in-out infinite',
          '@keyframes shimmer': {
            '0%, 100%': { opacity: 0.7 },
            '50%': { opacity: 1 },
          },
        },
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, rgba(255, 107, 53, 0.1), rgba(255, 167, 38, 0.1))',
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-20px) rotate(180deg)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '30%',
          left: '5%',
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.15), rgba(255, 167, 38, 0.15))',
          animation: 'pulse 4s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { transform: 'scale(1)', opacity: 0.7 },
            '50%': { transform: 'scale(1.2)', opacity: 1 },
          },
        }}
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Main Footer Content */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' },
            gap: 6,
            mb: 6,
          }}
        >
          {/* Brand Section */}
          <Box
            sx={{
              animation: 'fadeInUp 1s ease-out',
              '@keyframes fadeInUp': {
                '0%': { opacity: 0, transform: 'translateY(30px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <img
                src={fizzycoLogo}
                alt="Fizzyco Logo"
                style={{
                  height: 60,
                  width: 'auto',
                  filter: 'drop-shadow(0 4px 8px rgba(255, 107, 53, 0.3))',
                  animation: 'logoGlow 3s ease-in-out infinite',
                }}
              />
              <style>
                {`
                  @keyframes logoGlow {
                    0%, 100% { filter: drop-shadow(0 4px 8px rgba(255, 107, 53, 0.3)); }
                    50% { filter: drop-shadow(0 6px 12px rgba(255, 107, 53, 0.5)); }
                  }
                `}
              </style>
            </Box>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.7,
                maxWidth: '300px',
              }}
            >
              Refreshing the world with premium cola beverages crafted from the finest natural ingredients.
              Taste the tradition, feel the innovation.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.href}
                  aria-label={social.label}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    animation: `fadeInLeft ${0.5 + index * 0.1}s ease-out`,
                    '@keyframes fadeInLeft': {
                      '0%': { opacity: 0, transform: 'translateX(-20px)' },
                      '100%': { opacity: 1, transform: 'translateX(0)' },
                    },
                    '&:hover': {
                      color: theme.palette.primary.main,
                      borderColor: theme.palette.primary.main,
                      transform: 'translateY(-2px) scale(1.1)',
                      boxShadow: `0 5px 15px rgba(255, 107, 53, 0.3)`,
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 600,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 40,
                  height: 2,
                  background: 'linear-gradient(90deg, hsl(14, 88%, 55%), hsl(25, 95%, 53%))',
                  borderRadius: 1,
                  animation: 'slideIn 1s ease-out',
                  '@keyframes slideIn': {
                    '0%': { width: 0 },
                    '100%': { width: 40 },
                  },
                },
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {quickLinks.map((link, index) => (
                <Button
                  key={index}
                  component={Link}
                  href={link.path}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    fontWeight: 400,
                    px: 0,
                    py: 1,
                    animation: `fadeInRight ${0.5 + index * 0.1}s ease-out`,
                    '@keyframes fadeInRight': {
                      '0%': { opacity: 0, transform: 'translateX(20px)' },
                      '100%': { opacity: 1, transform: 'translateX(0)' },
                    },
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: theme.palette.primary.main,
                      transform: 'translateX(5px)',
                    },
                  }}
                >
                  {link.name}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Products */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 600,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 40,
                  height: 2,
                  background: 'linear-gradient(90deg, hsl(14, 88%, 55%), hsl(25, 95%, 53%))',
                  borderRadius: 1,
                  animation: 'slideIn 1.2s ease-out',
                },
              }}
            >
              Our Products
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {productLinks.map((link, index) => (
                <Button
                  key={index}
                  component={Link}
                  href={link.path}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    fontWeight: 400,
                    px: 0,
                    py: 1,
                    animation: `fadeInRight ${0.7 + index * 0.1}s ease-out`,
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: theme.palette.primary.main,
                      transform: 'translateX(5px)',
                    },
                  }}
                >
                  {link.name}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 600,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 40,
                  height: 2,
                  background: 'linear-gradient(90deg, hsl(14, 88%, 55%), hsl(25, 95%, 53%))',
                  borderRadius: 1,
                  animation: 'slideIn 1.4s ease-out',
                },
              }}
            >
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  animation: 'fadeInUp 1s ease-out',
                }}
              >
                <Phone sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  animation: 'fadeInUp 1.2s ease-out',
                }}
              >
                <Email sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  hello@fizzyco.com
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  animation: 'fadeInUp 1.4s ease-out',
                }}
              >
                <LocationOn sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  123 Cola Street, Fizzy City
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            mb: 4,
            animation: 'fadeIn 2s ease-out',
            '@keyframes fadeIn': {
              '0%': { opacity: 0 },
              '100%': { opacity: 1 },
            },
          }}
        />

        {/* Newsletter Section */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 4,
            animation: 'slideUp 1.5s ease-out',
            '@keyframes slideUp': {
              '0%': { opacity: 0, transform: 'translateY(40px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Stay Refreshed with Our Updates
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.8)' }}>
            Get the latest news about our delicious cola beverages and special offers.
          </Typography>
          <Button
            variant="contained"
            sx={{
              px: 4,
              py: 2,
              animation: 'pulse 2s infinite',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            Subscribe to Newsletter
          </Button>
        </Box>

        {/* Copyright */}
        <Box
          sx={{
            textAlign: 'center',
            pt: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            animation: 'fadeIn 2.5s ease-out',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              mb: 2,
            }}
          >
            © {new Date().getFullYear()} Fizzyco. All rights reserved. Made with ❤️ for cola lovers.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
            <Button
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                textTransform: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              Privacy Policy
            </Button>
            <Button
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                textTransform: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              Terms of Service
            </Button>
            <Button
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                textTransform: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              Cookie Policy
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MuiFooter;