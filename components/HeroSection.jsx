import React from "react"
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Fade,
  Zoom
} from "@mui/material"
import Link from "next/link";

// const heroImage = '/hotel-hero.jpg';
const heroImage = '/slider2.jpg';

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Animated gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 30% 50%, rgba(251, 146, 60, 0.2), transparent 50%)",
          animation: "pulse 8s ease-in-out infinite",
          "@keyframes pulse": {
            "0%, 100%": { opacity: 0.3 },
            "50%": { opacity: 0.6 }
          }
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", px: 2 }}>
          {/* <Fade in timeout={1200}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: "bold",
                mb: 3,
                fontSize: { xs: "3rem", md: "5rem", lg: "7rem" },
                lineHeight: 1.1,
                letterSpacing: "-0.02em"
              }}
            >
              Hotel Orange
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "primary.main",
                  textShadow: "0 0 40px rgba(251, 146, 60, 0.5)"
                }}
              >
                International
              </Box>
            </Typography>
          </Fade> */}

          <Fade in timeout={1600}>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                fontWeight: 300,
                fontSize: { xs: "1.25rem", md: "1.5rem", lg: "2rem" },
                lineHeight: 1.4,
                maxWidth: "800px",
                mx: "auto"
              }}
            >
              Experience luxury hospitality with our exceptional restaurant and
              elegant guesthouse accommodations
            </Typography>
          </Fade>
          <Zoom in timeout={2000}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              sx={{ mt: 4 }}
            >
              <Button
                component={Link}
                href="/rooms"
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  boxShadow: "0 8px 24px rgba(251, 146, 60, 0.4)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    boxShadow: "0 12px 32px rgba(251, 146, 60, 0.6)",
                    transform: "translateY(-4px)"
                  }
                }}
              >
                Book Your Stay
              </Button>

              <Button
                component={Link}
                href="/restaurant"
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  borderWidth: 2,
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  color: "white",
                  backdropFilter: "blur(10px)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    borderWidth: 2,
                    borderColor: "primary.main",
                    backgroundColor: "primary.main",
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 32px rgba(251, 146, 60, 0.4)"
                  }
                }}
              >
                View Ziyafat Restaurant
              </Button>
            </Stack>
          </Zoom>
        </Box>
      </Container>
    </Box>
  )
}

export default HeroSection
