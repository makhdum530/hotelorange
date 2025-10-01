import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Alert,
  AlertTitle
} from "@mui/material"
import {
  Clock,
  CreditCard,
  Utensils,
  AlertTriangle,
  Shield,
  Phone
} from "lucide-react"

const Terms = () => {
  const termsAndConditions = [
    {
      title: "Check-In & Check-Out",
      icon: Clock,
      items: [
        "Check-In time: 12:00 Noon",
        "Check-Out time: 11:00 AM",
        "Early check-in and late check-out subject to availability"
      ]
    },
    {
      title: "Pricing & Payment",
      icon: CreditCard,
      items: [
        "Tariff rates are subject to change without prior notice",
        "All major credit and debit cards accepted",
        "Taxes applicable as per government regulations",
        "Extra person charge: ₹800 per person per night"
      ]
    },
    {
      title: "Dining Policies",
      icon: Utensils,
      items: [
        "Complimentary breakfast only served in Ziyafat Restaurant",
        "Complimentary breakfast ordered in room will be charged",
        "Buffet breakfast timing: 07:30 AM to 10:00 AM"
      ]
    },
    {
      title: "Guest Conduct",
      icon: AlertTriangle,
      items: [
        "Unmarried couples are not allowed to share rooms",
        "Drinking alcohol is strictly prohibited in rooms and hotel premises",
        "Guests are responsible for any damage to hotel property"
      ]
    },
    {
      title: "Hotel Rights",
      icon: Shield,
      items: [
        "All rights reserved with the management of Hotel Orange International",
        "Subject to Surat jurisdiction",
        "Management reserves the right to refuse service",
        "Hotel is not responsible for loss of personal belongings"
      ]
    }
  ]

  const importantNotes = [
    "Free WiFi facilities available",
    "All major cards accepted",
    "Same day laundry service available",
    "Wake-up call service provided",
    "Hair dryer available in all rooms",
    "24 hours running hot and cold water",
    "First aid kit available",
    "24 hours room service available"
  ]

  const contactInfo = [
    { label: "Hotel Phone", value: "0261-2412001 / 0261-2412002" },
    { label: "Mobile", value: "+91 95121 32001" },
    { label: "Email", value: "hotelorangeinternational@gmail.com" },
    { label: "Website", value: "www.hotelorangeinternational.com" }
  ]

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", pt: 10 }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Terms & Conditions
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 900, mx: "auto" }}
          >
            Please read our terms and conditions carefully before making your
            reservation
          </Typography>
        </Box>

        {/* Important Alert */}
        <Alert
          severity="warning"
          icon={<AlertTriangle style={{ width: 20, height: 20 }} />}
          sx={{ mb: 6 }}
        >
          <AlertTitle>Important Notice</AlertTitle>
          By making a reservation, you agree to comply with all hotel policies
          and terms mentioned below. Please ensure you read and understand these
          terms before your stay.
        </Alert>

        {/* Terms Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "repeat(2, 1fr)" },
            gap: 4,
            mb: 8
          }}
        >
          {termsAndConditions.map((section, index) => (
            <Box key={index}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2
                    }}
                  >
                    <section.icon
                      style={{ width: 24, height: 24, color: "#fb923c" }}
                    />
                    <Typography variant="h6" fontWeight="600">
                      {section.title}
                    </Typography>
                  </Box>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {section.items.map((item, idx) => (
                      <Box key={idx} component="li" sx={{ mb: 1.5 }}>
                        <Typography variant="body2" color="text.secondary">
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Important Notes */}
        <Card sx={{ mb: 6 }}>
          <CardContent>
            <Typography
              variant="h5"
              fontWeight="600"
              textAlign="center"
              gutterBottom
            >
              Important Notes & Services
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
              {importantNotes.map((note, index) => (
                <Chip
                  key={index}
                  label={note}
                  variant="outlined"
                  sx={{ width: "100%", p: 1.5, justifyContent: "center" }}
                />
              ))}
            </Box>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card sx={{ mb: 6 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                mb: 3
              }}
            >
              <Phone style={{ width: 24, height: 24, color: "#fb923c" }} />
              <Typography variant="h5" fontWeight="600">
                Contact Information
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                gap: 3
              }}
            >
              {contactInfo.map((info, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                    bgcolor: "grey.50",
                    borderRadius: 1
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="600">
                    {info.label}:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {info.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>

        {/* Address */}
        <Card
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            textAlign: "center"
          }}
        >
          <CardContent sx={{ py: 6 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Hotel Location
            </Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Hotel Orange International
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
              Opposite Railway Station, Railway Station Main Road, Surat
            </Typography>
            <Chip
              label="Prime Location - Only 200m from Railway Station"
              sx={{ bgcolor: "white", color: "primary.main", fontWeight: 600 }}
            />
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Box sx={{ mt: 6, textAlign: "center", color: "text.secondary" }}>
          <Typography variant="body2">
            © 2024 Hotel Orange International. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            These terms and conditions are subject to change without prior
            notice. For the most current version, please contact the hotel
            directly.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Terms
