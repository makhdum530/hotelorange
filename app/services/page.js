import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip
} from "@mui/material"
import {
  Wifi,
  CreditCard,
  Utensils,
  Shirt,
  Coffee,
  Phone,
  Tv,
  Shield,
  Clock,
  Droplets,
  HeartHandshake,
  Newspaper,
  Accessibility,
  Sparkles
} from "lucide-react"

const Services = () => {
  const services = [
    {
      title: "Connectivity & Technology",
      services: [
        {
          icon: Wifi,
          name: "Free WiFi Internet Access",
          description: "High-speed internet throughout the hotel"
        },
        {
          icon: Tv,
          name: "LED TV in All Rooms",
          description: "Modern entertainment in every room"
        },
        {
          icon: Phone,
          name: "Direct Dialing STD/ISD",
          description: "International and domestic calling facility"
        }
      ]
    },
    {
      title: "Dining & Refreshments",
      services: [
        {
          icon: Utensils,
          name: "Ziyafat Restaurant",
          description: "Best fresh food and excellent dining experience"
        },
        {
          icon: Coffee,
          name: "Tea & Coffee Maker",
          description: "In-room beverage facilities (except Economy)"
        },
        {
          icon: Utensils,
          name: "Buffet Breakfast",
          description: "08:00 AM to 10:30 AM daily"
        },
        {
          icon: Droplets,
          name: "Packaged Drinking Water",
          description: "1000ml per person per day"
        }
      ]
    },
    {
      title: "Guest Services",
      services: [
        {
          icon: Clock,
          name: "24 Hours Room Service",
          description: "Round-the-clock assistance"
        },
        {
          icon: Shirt,
          name: "Same Day Laundry",
          description: "Quick and efficient laundry service"
        },
        {
          icon: Clock,
          name: "Wake Up Call",
          description: "Personalized wake-up service"
        },
        {
          icon: HeartHandshake,
          name: "24 Hrs Housekeeping",
          description: "Continuous housekeeping assistance"
        }
      ]
    },
    {
      title: "Business & Convenience",
      services: [
        {
          icon: CreditCard,
          name: "All Major Cards Accepted",
          description: "Convenient payment options"
        },
        // {
        //   icon: Shield,
        //   name: "Safe Deposit Lockers",
        //   description: "Secure storage for valuables"
        // },
        {
          icon: Newspaper,
          name: "Daily Newspaper",
          description: "Stay updated with current affairs"
        },
        {
          icon: Sparkles,
          name: "Shoe Shine Machine",
          description: "Professional shoe care service"
        }
      ]
    },
    {
      title: "Special Facilities",
      services: [
        {
          icon: Accessibility,
          name: "Wheelchair Access",
          description: "Accessibility for all guests"
        },
        {
          icon: HeartHandshake,
          name: "First Aid Kit",
          description: "Emergency medical assistance"
        },
        {
          icon: Droplets,
          name: "24hrs Hot & Cold Water",
          description: "Continuous water supply"
        },
        {
          icon: Sparkles,
          name: "Hair Dryer",
          description: "On Demand"
        }
      ]
    }
  ]

  const specialFeatures = [
    "Hotel Standard Services",
    "Fitness Center Facilities",
    "Meeting Room Facilities",
    "Opposite Railway Station Location",
    "200 Meters from Railway Station",
    "24/7 Restaurant Service"
  ]

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", pt: 10 }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Facilities & Services
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 900, mx: "auto" }}
          >
           Experience the perfect blend of luxury and comfort in our rooms, thoughtfully designed to offer you all the amenities and sophistication you deserve — right within your private space.
          </Typography>
        </Box>

        {/* Special Features */}
        <Card
          sx={{
            mb: 6,
            background:
              "linear-gradient(to right, rgba(251, 146, 60, 0.1), rgba(251, 146, 60, 0.05))"
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              fontWeight="600"
              textAlign="center"
              gutterBottom
            >
              Our Key Features
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)"
                },
                gap: 2,
                mt: 2
              }}
            >
              {specialFeatures.map((feature, index) => (
                <Chip
                  key={index}
                  label={feature}
                  variant="outlined"
                  sx={{ width: "100%", p: 1.5, justifyContent: "center" }}
                />
              ))}
            </Box>
          </CardContent>
        </Card>

        {/* Services Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "repeat(2, 1fr)" },
            gap: 4,
            mb: 8
          }}
        >
          {services.map((category, index) => (
            <Box key={index}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    color="primary.main"
                    fontWeight="600"
                    gutterBottom
                  >
                    {category.title}
                  </Typography>
                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2
                    }}
                  >
                    {category.services.map((service, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 2,
                          p: 2,
                          borderRadius: 1,
                          bgcolor: "grey.50",
                          "&:hover": { bgcolor: "grey.100" },
                          transition: "background-color 0.2s"
                        }}
                      >
                        <service.icon
                          style={{
                            width: 24,
                            height: 24,
                            color: "#fb923c",
                            flexShrink: 0,
                            marginTop: 4
                          }}
                        />
                        <Box>
                          <Typography variant="subtitle1" fontWeight="600">
                            {service.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {service.description}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Ziyafat Restaurant Highlight */}
        <Card sx={{ mb: 8, overflow: "hidden" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }
            }}
          >
            <Box>
              <Box
                component="img"
                src="https://hotelorangeinternational.com/assets/images/g1.jpg"
                alt="Ziyafat Restaurant"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  minHeight: 300
                }}
              />
            </Box>
            <Box>
              <CardContent
                sx={{
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%"
                }}
              >
                <Typography
                  variant="h5"
                  color="primary.main"
                  fontWeight="bold"
                  gutterBottom
                >
                  Our Best Ziyafat Restaurant
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  In Ziyafat Restaurant you can find the best fresh food for
                  eat. The food is excellent and our restaurant serves the
                  finest cuisine with exceptional service.
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  <Chip label="Best Restaurant in Surat" variant="outlined" />
                  <Chip label="Fresh Food Daily" variant="outlined" />
                  {/* <Chip label="24/7 Service Available" variant="outlined" /> */}
                </Box>
              </CardContent>
            </Box>
          </Box>
        </Card>

        {/* Fitness Center */}
        <Card sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}>
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h5"
              fontWeight="600"
              textAlign="center"
              gutterBottom
            >
              Fitness Center Facilities
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{ mb: 4, opacity: 0.9 }}
            >
              Stay active during your stay with our well-equipped fitness
              center, featuring modern equipment and facilities for all your
              workout needs.
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                gap: 3
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  src="https://hotelorangeinternational.com/assets/images/ft.jpg"
                  alt="Fitness Center"
                  sx={{
                    width: "100%",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    borderRadius: 2,
                    mb: 2
                  }}
                />
                <Typography variant="subtitle1" fontWeight="600">
                  Modern Equipment
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  src="https://hotelorangeinternational.com/assets/images/ft1.jpg"
                  alt="Fitness Center"
                  sx={{
                    width: "100%",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    borderRadius: 2,
                    mb: 2
                  }}
                />
                <Typography variant="subtitle1" fontWeight="600">
                  Spacious Layout
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  src="https://hotelorangeinternational.com/assets/images/ft3.jpg"
                  alt="Fitness Center"
                  sx={{
                    width: "100%",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    borderRadius: 2,
                    mb: 2
                  }}
                />
                <Typography variant="subtitle1" fontWeight="600">
                  Professional Grade
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default Services
