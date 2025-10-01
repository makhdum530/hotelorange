import React from "react"
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  IconButton,
  Divider,
  Stack
} from "@mui/material"
import {
  Facebook,
  Instagram,
  Twitter,
  Email,
  Phone,
  LocationOn,
  CreditCard
} from "@mui/icons-material"
import Link from "next/link";
const logo = '/logo.png';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background:
          "linear-gradient(to bottom, background.default, rgba(251, 146, 60, 0.1))",
        borderTop: 1,
        borderColor: "primary.main",
        borderOpacity: 0.2,
        py: 6
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
              lg: "1fr 1fr 1fr 1fr"
            },
            gap: 4
          }}
        >
          {/* About Section */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <img
              src={logo}
              alt="Hotel Orange International"
              style={{ height: "64px", width: "auto" }}
            />
            <Typography variant="h6" color="primary" fontWeight="bold">
              ABOUT HOTEL ORANGE INTERNATIONAL
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.6 }}
            >
              An Eye View Location from the Surat Railway Station. We honor all
              standard Credit / Debit Cards.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CreditCard color="primary" fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                All major cards accepted
              </Typography>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" color="primary" fontWeight="bold">
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <MuiLink
                component={Link}
                href="/rooms"
                variant="body2"
                color="text.secondary"
                sx={{
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" }
                }}
              >
                Rooms & Suites
              </MuiLink>
              <MuiLink
                component={Link}
                href="/restaurant"
                variant="body2"
                color="text.secondary"
                sx={{
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" }
                }}
              >
                Ziyafat Restaurant
              </MuiLink>
              <MuiLink
                component={Link}
                href="/services"
                variant="body2"
                color="text.secondary"
                sx={{
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" }
                }}
              >
                Facilities & Services
              </MuiLink>
              <MuiLink
                component={Link}
                href="/gallery"
                variant="body2"
                color="text.secondary"
                sx={{
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" }
                }}
              >
                Gallery
              </MuiLink>
              <MuiLink
                component={Link}
                href="/terms"
                variant="body2"
                color="text.secondary"
                sx={{
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" }
                }}
              >
                Terms & Conditions
              </MuiLink>
            </Stack>
          </Box>

          {/* Contact Info */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" color="primary" fontWeight="bold">
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <LocationOn color="primary" fontSize="small" sx={{ mt: 0.5 }} />
                <Typography variant="body2" color="text.secondary">
                  Near Railway Station, Opposite Jayshree Garden, Surat -
                  395003, Gujarat
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone color="primary" fontSize="small" />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    +91-261-2407173
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    +91-9825111173
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Email color="primary" fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  info@hotelorangeinternational.com
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Social Links */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" color="primary" fontWeight="bold">
              Follow Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stay connected with us on social media
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: "primary.light",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    transform: "scale(1.1)"
                  },
                  transition: "all 0.3s ease"
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: "primary.light",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    transform: "scale(1.1)"
                  },
                  transition: "all 0.3s ease"
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: "primary.light",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    transform: "scale(1.1)"
                  },
                  transition: "all 0.3s ease"
                }}
              >
                <Twitter />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Bottom Bar */}
        <Divider sx={{ my: 4, borderColor: "primary.main", opacity: 0.2 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2
          }}
        >
          <Typography variant="body2" color="text.secondary" textAlign="center">
            © {new Date().getFullYear()} Hotel Orange International. All rights
            reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            Near Railway Station, Surat | Premium Hospitality Since Years
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
