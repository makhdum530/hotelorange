import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Phone, Users, Wifi, Coffee, Car, Utensils } from "lucide-react";

const Rooms = () => {
  const roomTypes = [
    {
      name: "Executive King",
      prices: {
        single: "₹3,500",
        double: "₹4,300",
      },
      image: "/EXECUTIVE_SINGLE.jpg",
      capacity: "2 Guests",
      amenities: [
        "Free WiFi",
        "LED TV",
        "Tea/Coffee Maker",
        "24hrs Room Service",
      ],
    },
    {
      name: "Executive Twin",
      prices: {
        single: "₹3,500",
        double: "₹4,300",
      },
      image: "/ED.jpg",
      capacity: "2 Guests",
      amenities: [
        "Free WiFi",
        "LED TV",
        "Tea/Coffee Maker",
        "24hrs Room Service",
      ],
    },
    {
      name: "Superior King",
      prices: {
        single: "₹4,000",
        double: "₹4,800",
      },
      image: "/SUPERIOR_SINGLE.jpg",
      capacity: "2 Guests",
      amenities: [
        "Free WiFi",
        "LED TV",
        "Tea/Coffee Maker",
        "24hrs Room Service",
        "Hair Dryer",
      ],
    },
    {
      name: "Superior Twin",
      prices: {
        single: "₹4,000",
        double: "₹4,800",
      },
      image: "/SUPERIOR_DOUBLE.jpg",
      capacity: "2 Guests",
      amenities: [
        "Free WiFi",
        "LED TV",
        "Tea/Coffee Maker",
        "24hrs Room Service",
        "Hair Dryer",
      ],
    },
    {
      name: "Superior Triple",
      prices: {
        triple: "₹5,600",
      },
      image: "/TRIPLE_BED.jpg",
      capacity: "3 Guests",
      amenities: [
        "Free WiFi",
        "LED TV",
        "Tea/Coffee Maker",
        "24hrs Room Service",
        "Hair Dryer",
      ],
    },
  ];

  const facilities = [
    { icon: Wifi, name: "Free WiFi" },
    { icon: Utensils, name: "Complimentary Breakfast" },
    { icon: Car, name: "Car Parking" },
    { icon: Coffee, name: "24hrs Room Service" },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", pt: 10 }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Our Rooms & Suites
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 900, mx: "auto" }}
          >
            Experience comfort and luxury in our well-appointed rooms, designed
            for the modern traveler
          </Typography>
        </Box>

        {/* Facilities */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            gap: 3,
            mb: 8,
          }}
        >
          {facilities.map((facility, index) => (
            <Box key={index} sx={{ textAlign: "center", p: 2 }}>
              <facility.icon
                style={{
                  width: 32,
                  height: 32,
                  color: "#fb923c",
                  marginBottom: 8,
                }}
              />
              <Typography variant="body2" fontWeight="500">
                {facility.name}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Room Types */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 4,
            mb: 8,
          }}
        >
          {roomTypes.map((room, index) => (
            <Box key={index}>
              <Card
                sx={{
                  "&:hover": { boxShadow: 6, transition: "box-shadow 0.3s" },
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={room.image}
                  alt={room.name}
                  sx={{
                    "&:hover": {
                      transform: "scale(1.05)",
                      transition: "transform 0.3s",
                    },
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 2,
                      flexWrap: "wrap", // responsive
                      gap: 1,
                    }}
                  >
                    {/* Room Name */}
                    <Typography
                      variant="h5"
                      fontWeight={600}
                      sx={{
                        flex: "1 1 auto",
                        color: "text.primary",
                        textTransform: "capitalize",
                      }}
                    >
                      {room.name}
                    </Typography>

                    {/* Price Section */}
                    <Box
                      sx={{
                        textAlign: "right",
                        minWidth: 140,
                      }}
                    >
                      {room.prices?.single && room.prices?.double ? (
                        <>
                          <Typography
                            variant="h6"
                            fontWeight="semibold"
                            color="primary.main"
                            sx={{ lineHeight: 1.3 }}
                          >
                            <Users style={{ width: 16, height: 16 }} /> {room.prices.single}
                          </Typography>

                          <Typography
                            variant="h6"
                            fontWeight="bold"
                            color="primary.main"
                            sx={{ lineHeight: 1.3 }}
                          >
                            <Users style={{ width: 16, height: 16 }} /> <Users style={{ width: 16, height: 16 }} /> {room.prices.double}
                          </Typography>

                          <Typography variant="caption" color="text.secondary">
                            per night
                          </Typography>
                        </>
                      ) : (
                        <>
                          <Typography
                            variant="h6"
                            fontWeight="bold"
                            color="primary.main"
                            sx={{ lineHeight: 1.3 }}
                          >
                            {room.prices?.triple}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            per night
                          </Typography>
                        </>
                      )}
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                      color: "text.secondary",
                    }}
                  >
                    <Users style={{ width: 16, height: 16 }} />
                    <Typography variant="body2">{room.capacity}</Typography>
                  </Box>
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    sx={{ mb: 2, gap: 1 }}
                  >
                    {room.amenities.map((amenity, idx) => (
                      <Chip
                        key={idx}
                        label={amenity}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    startIcon={<Phone style={{ width: 16, height: 16 }} />}
                  >
                    Book Now: +91 95121 32001
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Tariff Table */}
        <Card sx={{ mb: 8 }}>
          <CardContent>
            <Typography variant="h5" fontWeight="600" gutterBottom>
              Hotel Orange International Tariff
            </Typography>
            <TableContainer component={Paper} elevation={0}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography fontWeight="600">Room Type</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography fontWeight="600">Single</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography fontWeight="600">Double</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography fontWeight="600">Triple</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography fontWeight="500">Executive</Typography>
                    </TableCell>
                    <TableCell>₹3,500</TableCell>
                    <TableCell>₹4,300</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography fontWeight="500">Superior</Typography>
                    </TableCell>
                    <TableCell>₹4,000</TableCell>
                    <TableCell>₹4,800</TableCell>
                    <TableCell>₹5,600</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ mt: 3 }}>
              <Typography
                variant="subtitle2"
                color="primary.main"
                fontWeight="600"
                gutterBottom
              >
                Important Notes:
              </Typography>
              <Box
                component="ul"
                sx={{ pl: 2, color: "text.secondary", "& li": { mb: 0.5 } }}
              >
                <Typography component="li" variant="body2">
                  Extra Person Charge: ₹800
                </Typography>
                <Typography component="li" variant="body2">
                  All major cards accepted
                </Typography>
                <Typography component="li" variant="body2">
                  Complimentary breakfast included
                </Typography>
                <Typography component="li" variant="body2">
                  Free WiFi facilities
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Contact for Booking */}
        <Card
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            textAlign: "center",
          }}
        >
          <CardContent sx={{ py: 6 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Ready to Book Your Stay?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Contact us directly for reservations and special requests
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="outlined"
                size="large"
                startIcon={<Phone style={{ width: 16, height: 16 }} />}
                sx={{
                  borderColor: "white",
                  color: "white",
                  "&:hover": {
                    borderColor: "white",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Call: +91 261 2412001
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Phone style={{ width: 16, height: 16 }} />}
                sx={{
                  borderColor: "white",
                  color: "white",
                  "&:hover": {
                    borderColor: "white",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Mobile: +91 95121 32001
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Rooms;
