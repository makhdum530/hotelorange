"use client"
import { useState } from "react"
import { Box, Container, Typography, Chip, Dialog, Stack } from "@mui/material"

const hotelHero = '/hotel-hero.jpg';
const restaurantImage = '/restaurant-interior.jpg';
const guesthouseImage = '/guesthouse-room.jpg';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [openDialog, setOpenDialog] = useState(null)

  const galleryItems = [
    {
      id: 1,
      image: hotelHero,
      title: "Hotel Exterior",
      category: "hotel",
      description: "Beautiful exterior view of Hotel Orange International"
    },
    {
      id: 2,
      image: restaurantImage,
      title: "Restaurant Interior",
      category: "restaurant",
      description: "Elegant dining atmosphere with modern design"
    },
    {
      id: 3,
      image: guesthouseImage,
      title: "Luxury Suite",
      category: "rooms",
      description: "Spacious and comfortable accommodation"
    },
    {
      id: 4,
      image: hotelHero,
      title: "Garden View",
      category: "hotel",
      description: "Peaceful garden area for relaxation"
    },
    {
      id: 5,
      image: restaurantImage,
      title: "Fine Dining",
      category: "restaurant",
      description: "Exquisite culinary presentation"
    },
    {
      id: 6,
      image: guesthouseImage,
      title: "Comfort Room",
      category: "rooms",
      description: "Cozy and well-appointed guest room"
    }
  ]

  const categories = [
    { id: "all", label: "All" },
    { id: "hotel", label: "Hotel" },
    { id: "restaurant", label: "Restaurant" },
    { id: "rooms", label: "Rooms" }
  ]

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", pt: 10 }}>
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            gutterBottom
          >
            Gallery
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: "auto", mb: 4 }}
          >
            Explore our beautiful spaces and experience the elegance of Hotel
            Orange International
          </Typography>

          {/* Category Filter */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ gap: 2 }}
          >
            {categories.map(category => (
              <Chip
                key={category.id}
                label={category.label}
                onClick={() => setSelectedCategory(category.id)}
                color={selectedCategory === category.id ? "primary" : "default"}
                sx={{
                  px: 2,
                  py: 1,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  "&:hover": { transform: "scale(1.05)" },
                  transition: "transform 0.2s"
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Gallery Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)"
            },
            gap: 4
          }}
        >
          {filteredItems.map(item => (
            <Box key={item.id}>
              <Box
                onClick={() => setOpenDialog(item.id)}
                sx={{
                  cursor: "pointer",
                  position: "relative",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                  "&:hover": {
                    boxShadow: 6,
                    transform: "scale(1.05)",
                    "& img": { transform: "scale(1.1)" },
                    "& .overlay": { opacity: 1 }
                  },
                  transition: "all 0.3s"
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: 256,
                    objectFit: "cover",
                    transition: "transform 0.5s"
                  }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                    opacity: 0,
                    transition: "opacity 0.3s",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 2
                  }}
                >
                  <Typography variant="h6" color="white" fontWeight="600">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>

              <Dialog
                open={openDialog === item.id}
                onClose={() => setOpenDialog(null)}
                maxWidth="lg"
                fullWidth
              >
                <Box sx={{ position: "relative" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      maxHeight: "80vh",
                      objectFit: "contain"
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                      p: 3
                    }}
                  >
                    <Typography
                      variant="h5"
                      color="white"
                      fontWeight="600"
                      gutterBottom
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Dialog>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Gallery
