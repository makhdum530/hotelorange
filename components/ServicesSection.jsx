import React from "react"
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Paper,
  Stack
} from "@mui/material"
import {
  Restaurant,
  Hotel,
  Wifi,
  LocalParking,
  LocalCafe,
  Group,
  AccessTime,
  EmojiEvents,
  AutoAwesome,
  Security,
  Headset,
  LocalBar
} from "@mui/icons-material"
const restaurantImage = '/slider4.jpg';
const guesthouseImage = '/superior_rom.jpg';

const ServicesSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 12,
        background:
          "linear-gradient(to bottom, background.default, rgba(251, 146, 60, 0.05), background.default)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(251, 146, 60, 0.1), transparent)",
            borderRadius: "50%",
            filter: "blur(40px)",
            animation: "pulse 3s ease-in-out infinite"
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(253, 186, 116, 0.1), transparent)",
            borderRadius: "50%",
            filter: "blur(40px)",
            animation: "pulse 3s ease-in-out infinite 1s"
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Chip
            icon={<AutoAwesome />}
            label="Premium Services"
            color="primary"
            variant="outlined"
            sx={{ mb: 2, px: 2, py: 1 }}
          />
          <Typography
            variant="h2"
            component="h2"
            fontWeight="bold"
            sx={{ mb: 2, fontSize: { xs: "2.5rem", md: "3.5rem" } }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: "600px", mx: "auto" }}
          >
            Discover our world-class restaurant and comfortable guesthouse
            facilities
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            maxWidth: "1200px",
            mx: "auto"
          }}
        >
          {/* Restaurant Card */}
          <Card
            sx={{
              height: "100%",
              overflow: "hidden",
              boxShadow: 4,
              "&:hover": {
                boxShadow: 8,
                transform: "translateY(-4px)"
              },
              transition: "all 0.3s ease",
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)"
            }}
          >
            <Box sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="250"
                image={restaurantImage}
                alt="Restaurant Interior"
                sx={{
                  transition: "transform 0.5s ease",
                  "&:hover": { transform: "scale(1.05)" }
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2), transparent)"
                }}
              />
              <Chip
                icon={<Restaurant />}
                label="Restaurant"
                color="primary"
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  color: "white",
                  fontWeight: "bold"
                }}
              />
            </Box>
            <CardContent sx={{ p: 4 }}>
              <Typography
                variant="h4"
                component="h3"
                fontWeight="bold"
                sx={{ mb: 2 }}
              >
                Fine Dining Experience
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3, lineHeight: 1.6 }}
              >
                Savor exquisite cuisine prepared by our expert chefs using the
                finest ingredients. Our restaurant offers a sophisticated dining
                atmosphere perfect for any occasion.
              </Typography>

              {/* Feature Icons Grid */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 2,
                  mb: 3
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Paper
                    sx={{
                      p: 1,
                      backgroundColor: "primary.light",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <LocalCafe fontSize="small" />
                  </Paper>
                  <Typography variant="body2">All Day Dining</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Paper
                    sx={{
                      p: 1,
                      backgroundColor: "primary.light",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Group fontSize="small" />
                  </Paper>
                  <Typography variant="body2">Private Events</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Paper
                    sx={{
                      p: 1,
                      backgroundColor: "primary.light",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <LocalBar fontSize="small" />
                  </Paper>
                  <Typography variant="body2">Juice Bar</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Paper
                    sx={{
                      p: 1,
                      backgroundColor: "primary.light",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <EmojiEvents fontSize="small" />
                  </Paper>
                  <Typography variant="body2">Award Winning</Typography>
                </Box>
              </Box>

              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Chip
                  label="International Cuisine"
                  size="small"
                  variant="outlined"
                />
                <Chip label="Private Dining" size="small" variant="outlined" />
              </Stack>
            </CardContent>
          </Card>

          {/* Guesthouse Card */}
          <Card
            sx={{
              height: "100%",
              overflow: "hidden",
              boxShadow: 4,
              "&:hover": {
                boxShadow: 8,
                transform: "translateY(-4px)"
              },
              transition: "all 0.3s ease",
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)"
            }}
          >
            <Box sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="250"
                image={guesthouseImage}
                alt="Guesthouse Room"
                sx={{
                  transition: "transform 0.5s ease",
                  "&:hover": { transform: "scale(1.05)" }
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2), transparent)"
                }}
              />
              <Chip
                icon={<Hotel />}
                label="Guesthouse"
                color="primary"
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  color: "white",
                  fontWeight: "bold"
                }}
              />
            </Box>
            <CardContent sx={{ p: 4 }}>
              <Typography
                variant="h4"
                component="h3"
                fontWeight="bold"
                sx={{ mb: 2 }}
              >
                Luxury Accommodations
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3, lineHeight: 1.6 }}
              >
                Relax in our elegantly appointed rooms featuring modern
                amenities and comfort. Each room is designed to provide a
                peaceful retreat with exceptional service.
              </Typography>

              {/* Feature Icons Grid */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 2,
                  mb: 3
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Paper
                    sx={{
                      p: 1,
                      backgroundColor: "primary.light",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Wifi fontSize="small" />
                  </Paper>
                  <Typography variant="body2">Free WiFi</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Paper
                    sx={{
                      p: 1,
                      backgroundColor: "primary.light",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <AccessTime fontSize="small" />
                  </Paper>
                  <Typography variant="body2">24/7 Service</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Paper
                    sx={{
                      p: 1,
                      backgroundColor: "primary.light",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <LocalParking fontSize="small" />
                  </Paper>
                  <Typography variant="body2">Free Parking</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Paper
                    sx={{
                      p: 1,
                      backgroundColor: "primary.light",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Security fontSize="small" />
                  </Paper>
                  <Typography variant="body2">Secure Stay</Typography>
                </Box>
              </Box>

              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
                <Chip label="Free WiFi" size="small" variant="outlined" />
                <Chip label="24/7 Service" size="small" variant="outlined" />
                <Chip label="Room Service" size="small" variant="outlined" />
              </Stack>

              <Box sx={{ display: "flex", gap: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Headset color="primary" fontSize="small" />
                  <Typography variant="body2">Concierge</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <AutoAwesome color="primary" fontSize="small" />
                  <Typography variant="body2">Daily Housekeeping</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}

export default ServicesSection
