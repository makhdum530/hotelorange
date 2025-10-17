import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <Box
      component="section"
      sx={{ py: 12, bgcolor: "rgba(251, 146, 60, 0.05)" }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            fontWeight="bold"
            gutterBottom
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: "auto" }}
          >
            Get in touch with us for reservations, inquiries, or any assistance
            you may need
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: 6,
          }}
        >
         
          <Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Quick Actions
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      mt: 3,
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{ py: 1.5, fontSize: "1.1rem", boxShadow: 2 }}
                    >
                      Make a Reservation
                    </Button>
                    {/* <Button
                      variant="outlined"
                      size="large"
                      fullWidth
                      sx={{ py: 2, fontSize: "1.1rem", boxShadow: 2 }}
                    >
                      Restaurant Booking
                    </Button> */}
                    <Button
                      variant="outlined"
                      size="large"
                      fullWidth
                      color="secondary"
                      sx={{ py: 1.5, fontSize: "1.1rem", boxShadow: 2 }}
                    >
                      Special Events Inquiry
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
          <Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Card
                sx={{
                  background:
                    "linear-gradient(135deg, #fb923c 0%, #f97316 100%)",
                  color: "white",
                  boxShadow: 3,
                }}
              >
                <CardContent sx={{ p: 5 }}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Special Offers
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
                    Join our newsletter to receive exclusive deals and updates
                    about our latest offerings and seasonal specials.
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      py: 2,
                      bgcolor: "white",
                      color: "primary.main",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                      boxShadow: 2,
                    }}
                  >
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
