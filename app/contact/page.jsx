import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Stack
} from "@mui/material"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const Contact = () => {
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
            gap: 6
          }}
        >
          {/* Contact Information */}
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Get In Touch
            </Typography>

            <Stack spacing={3}>
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
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <MapPin
                      style={{ color: "#fb923c", marginTop: 4, flexShrink: 0 }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        fontWeight="600"
                        gutterBottom
                      >
                        Address
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Hotel Orange International
                        <br />
                        Opposite Railway Station
                        <br />
                        Railway Station Main Road, Surat
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

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
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <Phone
                      style={{ color: "#fb923c", marginTop: 4, flexShrink: 0 }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        fontWeight="600"
                        gutterBottom
                      >
                        Phone
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Main: 0261-2412001
                        <br />
                        Alternate: 0261-2412002
                        <br />
                        Mobile: +91 95121 32001
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

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
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <Mail
                      style={{ color: "#fb923c", marginTop: 4, flexShrink: 0 }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        fontWeight="600"
                        gutterBottom
                      >
                        Email
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        General: hotelorangeinternational@gmail.com
                        <br />
                        Info: info@hotelorangeinternational.com
                        <br />
                        Website: www.hotelorangeinternational.com
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

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
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <Clock
                      style={{ color: "#fb923c", marginTop: 4, flexShrink: 0 }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        fontWeight="600"
                        gutterBottom
                      >
                        Hours
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Front Desk: 24/7
                        <br />
                        Check-in: 12:00 PM
                        <br />
                        Check-out: 11:00 AM
                        <br />
                        Ziyafat Restaurant: 7:30 AM - 11:00 PM
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Stack>
          </Box>

          {/* Contact Form */}
          <Box>
            <Card sx={{ boxShadow: 4 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight="600" gutterBottom>
                  Send us a Message
                </Typography>
                <Stack spacing={3} sx={{ mt: 3 }}>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                      gap: 2
                    }}
                  >
                    <TextField
                      fullWidth
                      label="First Name"
                      placeholder="John"
                    />
                    <TextField fullWidth label="Last Name" placeholder="Doe" />
                  </Box>

                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    placeholder="john@example.com"
                  />

                  <TextField
                    fullWidth
                    label="Phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                  />

                  <TextField
                    fullWidth
                    label="Subject"
                    placeholder="Reservation Inquiry"
                  />

                  <TextField
                    fullWidth
                    label="Message"
                    placeholder="Please let us know how we can help you..."
                    multiline
                    rows={5}
                  />

                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{ py: 1.5 }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Map Section */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
          >
            Find Us
          </Typography>
          <Card sx={{ mt: 4, boxShadow: 4 }}>
            <Box
              sx={{
                height: 384,
                bgcolor: "grey.200",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column"
              }}
            >
              <MapPin style={{ width: 48, height: 48, marginBottom: 16 }} />
              <Typography variant="h6" fontWeight="500">
                Interactive Map
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Map integration would be placed here
              </Typography>
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact
