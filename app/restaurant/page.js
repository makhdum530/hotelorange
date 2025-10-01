import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  Divider
} from "@mui/material"
import { Clock, Star, Utensils, Wine } from "lucide-react"
const restaurantImage = '/restaurant-interior.jpg';

const Restaurant = () => {
  const menuItems = [
    {
      category: "Appetizers",
      items: [
        {
          name: "Truffle Arancini",
          description: "Crispy risotto balls with truffle oil",
          price: "$18"
        },
        {
          name: "Seared Scallops",
          description: "Pan-seared with cauliflower puree",
          price: "$24"
        },
        {
          name: "Burrata Caprese",
          description: "Fresh burrata with heirloom tomatoes",
          price: "$16"
        }
      ]
    },
    {
      category: "Main Courses",
      items: [
        {
          name: "Wagyu Beef Tenderloin",
          description: "Grass-fed with seasonal vegetables",
          price: "$65"
        },
        {
          name: "Pan-Seared Salmon",
          description: "Atlantic salmon with lemon herb butter",
          price: "$38"
        },
        {
          name: "Lobster Risotto",
          description: "Creamy arborio rice with fresh lobster",
          price: "$45"
        }
      ]
    },
    {
      category: "Desserts",
      items: [
        {
          name: "Chocolate Soufflé",
          description: "Dark chocolate with vanilla ice cream",
          price: "$14"
        },
        {
          name: "Tiramisu",
          description: "Classic Italian dessert",
          price: "$12"
        },
        {
          name: "Crème Brûlée",
          description: "Vanilla custard with caramelized sugar",
          price: "$13"
        }
      ]
    }
  ]

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", pt: 10 }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "60vh",
          overflow: "hidden",
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${restaurantImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 800 }}>
            <Chip
              icon={<Utensils style={{ width: 16, height: 16 }} />}
              label="Fine Dining"
              sx={{ mb: 2, bgcolor: "primary.main", color: "white" }}
            />
            <Typography
              variant="h2"
              component="h1"
              fontWeight="bold"
              color="white"
              gutterBottom
            >
              Ziyafat Restaurant
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "rgba(255,255,255,0.9)", mb: 4, lineHeight: 1.6 }}
            >
              In Ziyafat Restaurant you can find the best fresh food for eat.
              The food is excellent and we serve the finest cuisine with
              exceptional service.
            </Typography>
            <Button variant="contained" size="large" sx={{ px: 4, py: 1.5 }}>
              Reserve a Table
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Restaurant Info */}
      <Box sx={{ py: 12, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 4
            }}
          >
            <Box>
              <Card
                sx={{
                  textAlign: "center",
                  "&:hover": {
                    transform: "scale(1.02)",
                    transition: "transform 0.2s"
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Clock
                    style={{
                      width: 48,
                      height: 48,
                      color: "#fb923c",
                      margin: "0 auto 16px"
                    }}
                  />
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    Operating Hours
                  </Typography>
                  <Box sx={{ color: "text.secondary" }}>
                    <Typography variant="body2">
                      Breakfast: 7:30 AM - 10:00 AM
                    </Typography>
                    <Typography variant="body2">
                      Lunch: 12:00 PM - 4:00 PM
                    </Typography>
                    <Typography variant="body2">
                      Dinner: 7:00 PM - 11:00 PM
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>

            <Box>
              <Card
                sx={{
                  textAlign: "center",
                  "&:hover": {
                    transform: "scale(1.02)",
                    transition: "transform 0.2s"
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Star
                    style={{
                      width: 48,
                      height: 48,
                      color: "#fb923c",
                      margin: "0 auto 16px"
                    }}
                  />
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    Best in Surat
                  </Typography>
                  <Box sx={{ color: "text.secondary" }}>
                    <Typography variant="body2">Fresh Food Daily</Typography>
                    <Typography variant="body2">
                      Best Restaurant 2024
                    </Typography>
                    <Typography variant="body2">
                      Excellence in Service
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>

            <Box>
              <Card
                sx={{
                  textAlign: "center",
                  "&:hover": {
                    transform: "scale(1.02)",
                    transition: "transform 0.2s"
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Wine
                    style={{
                      width: 48,
                      height: 48,
                      color: "#fb923c",
                      margin: "0 auto 16px"
                    }}
                  />
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    Wine Selection
                  </Typography>
                  <Box sx={{ color: "text.secondary" }}>
                    <Typography variant="body2">200+ Premium Wines</Typography>
                    <Typography variant="body2">Sommelier Curated</Typography>
                    <Typography variant="body2">
                      Wine Pairing Available
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Menu Section */}
      <Container maxWidth="md" sx={{ py: 12 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Our Menu
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Discover our carefully crafted dishes made with the finest
            ingredients
          </Typography>
        </Box>

        {menuItems.map((category, index) => (
          <Box key={index} sx={{ mb: 8 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              color="primary.main"
              gutterBottom
            >
              {category.category}
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 2 }}
            >
              {category.items.map((item, itemIndex) => (
                <Box key={itemIndex}>
                  <Card
                    sx={{
                      "&:hover": {
                        transform: "scale(1.02)",
                        transition: "transform 0.2s"
                      }
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start"
                        }}
                      >
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h6"
                            fontWeight="600"
                            gutterBottom
                          >
                            {item.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.description}
                          </Typography>
                        </Box>
                        <Typography
                          variant="h5"
                          fontWeight="bold"
                          color="primary.main"
                          sx={{ ml: 2 }}
                        >
                          {item.price}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
            {index < menuItems.length - 1 && <Divider sx={{ my: 6 }} />}
          </Box>
        ))}

        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Button variant="outlined" size="large" sx={{ mr: 2 }}>
            Download Full Menu
          </Button>
          <Button variant="contained" size="large">
            Make Reservation
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Restaurant
