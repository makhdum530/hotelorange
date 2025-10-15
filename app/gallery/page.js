"use client"
import { Box, Chip, Container, Dialog, Stack, Typography } from "@mui/material";
import { useState } from "react";


const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [openDialog, setOpenDialog] = useState(null)

  // const galleryItems = [
  //   {
  //     id: 1,
  //     image: "/gallery/front_view.JPG",
  //     title: "Hotel Exterior",
  //     category: "hotel",
  //     description: "Beautiful exterior view of Hotel Orange International"
  //   },
  //   {
  //     id: 2,
  //     image: '/gallery/11.jpg',
  //     title: "Restaurant Interior",
  //     category: "restaurant",
  //     description: "Elegant dining atmosphere with modern design"
  //   },
  //   {
  //     id: 3,
  //     image: "/gallery/14.jpg",
  //     title: "Luxury Suite",
  //     category: "parking",
  //     description: "Spacious and comfortable accommodation"
  //   },
  //   {
  //     id: 4,
  //     image: "/gallery/15.jpg",
  //     title: "Garden View",
  //     category: "parking",
  //     description: "Peaceful garden area for relaxation"
  //   },
    
  //   {
  //     id: 5,
  //     image: "/gallery/A1.jpg",
  //     title: "Fine Dining",
  //     category: "hotel",
  //     description: "Exquisite culinary presentation"
  //   },
  //   // {
  //   //   id: 6,
  //   //   image: "/gallery/banq1.jpg",
  //   //   title: "Comfort Room",
  //   //   category: "banquet",
  //   //   description: "Cozy and well-appointed guest room"
  //   // },
  //   {
  //     id: 6,
  //     image: "/gallery/banq2.jpg",
  //     title: "Hotel Exterior",
  //     category: "banquet",
  //     description: "Beautiful exterior view of Hotel Orange International"
  //   },
  //   // {
  //   //   id: 8,
  //   //   image: '/gallery/buffet_breakfast_1.jpg',
  //   //   title: "Restaurant Interior",
  //   //   category: "restaurant",
  //   //   description: "Elegant dining atmosphere with modern design"
  //   // },
  //   {
  //     id: 7,
  //     image: "/gallery/g3.jpg",
  //     title: "Luxury Suite",
  //     category: "rooms",
  //     description: "Spacious and comfortable accommodation"
  //   },
  //   {
  //     id: 8,
  //     image: "/gallery/g4.jpg",
  //     title: "Garden View",
  //     category: "rooms",
  //     description: "Peaceful garden area for relaxation"
  //   },
    
  //   {
  //     id: 9,
  //     image: "/gallery/g6.jpg",
  //     title: "Fine Dining",
  //     category: "rooms",
  //     description: "Exquisite culinary presentation"
  //   },
  //   {
  //     id: 10,
  //     image: "/gallery/g7.jpg",
  //     title: "Comfort Room",
  //     category: "rooms",
  //     description: "Cozy and well-appointed guest room"
  //   },
  //   {
  //     id: 11,
  //     image: "/gallery/g12.jpg",
  //     title: "Hotel Exterior",
  //     category: "hotel",
  //     description: "Beautiful exterior view of Hotel Orange International"
  //   },
  //   {
  //     id: 12,
  //     image: '/gallery/Garden_01.jpg',
  //     title: "Restaurant Interior",
  //     category: "hotel",
  //     description: "Elegant dining atmosphere with modern design"
  //   },
  //   {
  //     id: 13,
  //     image: "/gallery/hotel1.jpeg",
  //     title: "Luxury Suite",
  //     category: "hotel",
  //     description: "Spacious and comfortable accommodation"
  //   },
  //   {
  //     id: 14,
  //     image: "/gallery/m1.jpg",
  //     title: "Garden View",
  //     category: "hotel",
  //     description: "Peaceful garden area for relaxation"
  //   },
    
  //   {
  //     id: 15,
  //     image: "/gallery/restaurant_bc.jpeg",
  //     title: "Fine Dining",
  //     category: "restaurant",
  //     description: "Exquisite culinary presentation"
  //   },
  //   {
  //     id: 16,
  //     image: "/gallery/restaurant1.jpg",
  //     title: "Restaurant",
  //     category: "restaurant",
  //     description: "Cozy and well-appointed guest room"
  //   },
  // ]
  const galleryItems = [
    {
      id: 1,
      image: "/gallery/front_view.JPG",
      title: "Hotel Front View",
      category: "hotel",
      description: "Front view showcasing the elegant exterior of Hotel Orange International."
    },
    {
      id: 2,
      image: "/gallery/11.jpg",
      title: "Restaurant Dining Area",
      category: "restaurant",
      description: "Modern dining area with a cozy and inviting ambiance."
    },
    {
      id: 3,
      image: "/gallery/14.jpg",
      title: "Parking Area",
      category: "parking",
      description: "Spacious and well-organized parking area for guests."
    },
    {
      id: 4,
      image: "/gallery/15.jpg",
      title: "Parking Area",
      category: "parking",
      description: "Spacious and well-organized parking area for guests."
    },
    {
      id: 5,
      image: "/gallery/A1.jpg",
      title: "Fine Dining Setup",
      category: "hotel",
      description: "Beautifully arranged fine dining setup with attention to detail."
    },
    {
      id: 6,
      image: "/gallery/banq2.jpg",
      title: "Banquet Hall",
      category: "banquet",
      description: "Spacious banquet hall ideal for parties and celebrations."
    },
    {
      id: 7,
      image: "/gallery/g3.jpg",
      title: "Deluxe Room Interior",
      category: "rooms",
      description: "Comfortable deluxe room featuring modern furnishings."
    },
    {
      id: 8,
      image: "/gallery/g4.jpg",
      title: "Room Balcony View",
      category: "rooms",
      description: "Balcony view from guest room offering a peaceful environment."
    },
    {
      id: 9,
      image: "/gallery/g6.jpg",
      title: "Luxury Suite Lounge",
      category: "rooms",
      description: "Spacious suite lounge area designed for relaxation."
    },
    {
      id: 10,
      image: "/gallery/g7.jpg",
      title: "Comfort Room",
      category: "rooms",
      description: "Cozy and well-appointed room for a pleasant stay."
    },
    {
      id: 11,
      image: "/gallery/g12.jpg",
      title: "Hotel Facade",
      category: "hotel",
      description: "Elegant facade view of Hotel Orange International."
    },
    {
      id: 12,
      image: "/gallery/Garden_01.jpg",
      title: "Hotel Garden Area",
      category: "hotel",
      description: "Beautiful landscaped garden providing a tranquil space."
    },
    {
      id: 13,
      image: "/gallery/hotel1.jpeg",
      title: "Hotel Entrance",
      category: "hotel",
      description: "Welcoming hotel entrance with modern architectural design."
    },
    {
      id: 14,
      image: "/gallery/m1.jpg",
      title: "Hotel Lobby",
      category: "hotel",
      description: "Stylish and comfortable hotel lobby with elegant decor."
    },
    {
      id: 15,
      image: "/gallery/restaurant_bc.jpeg",
      title: "Buffet Counter",
      category: "restaurant",
      description: "Delicious buffet setup offering a variety of cuisines."
    },
    {
      id: 16,
      image: "/gallery/restaurant1.jpg",
      title: "Restaurant Interior",
      category: "restaurant",
      description: "Warm and inviting restaurant ambiance perfect for dining."
    },
  ];
  
  const categories = [
    { id: "all", label: "All" },
    { id: "hotel", label: "Hotel" },
    { id: "restaurant", label: "Restaurant" },
    { id: "rooms", label: "Rooms" },
    { id: "parking", label: "Parking" },
    { id: "banquet", label: "Banquet" }

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
