import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Fade,
    Zoom
  } from "@mui/material"
  import { Star, Award, Users, Clock } from "lucide-react"
  
  const AboutSection = () => {
    const features = [
      { icon: Star, title: "Premium", desc: "Luxury Service" },
      { icon: Award, title: "Excellence", desc: "Award Winning" },
      { icon: Users, title: "Personal", desc: "Dedicated Staff" },
      { icon: Clock, title: "24/7", desc: "Always Available" }
    ]
  
    return (
      <Box
        component="section"
        sx={{
          py: 16,
          bgcolor: "background.default",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Animated background elements */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(251, 146, 60, 0.08), transparent)",
            borderRadius: "50%",
            filter: "blur(60px)"
          }}
        />
  
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Fade in timeout={1000}>
            <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center", mb: 10 }}>
              <Typography
                variant="h3"
                component="h2"
                fontWeight="bold"
                gutterBottom
                sx={{ mb: 3 }}
              >
                About Hotel Orange International
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ lineHeight: 1.8 }}
              >
                Established with a commitment to excellence, Hotel Orange
                International combines world-class hospitality with authentic
                dining experiences. Our dedication to service and attention to
                detail ensures every guest enjoys an unforgettable stay.
              </Typography>
            </Box>
          </Fade>
  
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
              gap: 4,
              mb: 12
            }}
          >
            {features.map((item, index) => (
              <Zoom in timeout={1200 + index * 150} key={index}>
                <Card
                  sx={{
                    textAlign: "center",
                    p: 4,
                    boxShadow: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      boxShadow: 8,
                      transform: "translateY(-12px)",
                      borderColor: "primary.main"
                    }
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Box
                      sx={{
                        width: 72,
                        height: 72,
                        bgcolor: "rgba(251, 146, 60, 0.1)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 3,
                        transition: "all 0.4s",
                        "&:hover": {
                          bgcolor: "rgba(251, 146, 60, 0.2)",
                          transform: "rotate(360deg) scale(1.1)"
                        }
                      }}
                    >
                      <item.icon
                        style={{ width: 36, height: 36, color: "#fb923c" }}
                      />
                    </Box>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Zoom>
            ))}
          </Box>
  
          <Fade in timeout={1800}>
            <Box
              sx={{
                maxWidth: 900,
                mx: "auto",
                background:
                  "linear-gradient(135deg, rgba(251, 146, 60, 0.12), rgba(251, 146, 60, 0.05))",
                p: { xs: 5, md: 8 },
                borderRadius: 4,
                boxShadow: 4,
                border: "1px solid",
                borderColor: "rgba(251, 146, 60, 0.2)",
                transition: "all 0.3s",
                "&:hover": {
                  boxShadow: 8,
                  transform: "translateY(-4px)"
                }
              }}
            >
              <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ mb: 3 }}
                >
                  Why Choose Hotel Orange International?
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: 6,
                  textAlign: "left"
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight="600"
                    gutterBottom
                    color="primary.main"
                    sx={{ mb: 2 }}
                  >
                    Our Restaurant
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                  >
                    Experience culinary excellence with our 
                    trained chefs who craft memorable dishes using the finest
                    local and imported ingredients.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight="600"
                    gutterBottom
                    color="primary.main"
                    sx={{ mb: 2 }}
                  >
                    Our Guesthouse
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                  >
                    Enjoy comfortable and elegant accommodations designed with
                    modern amenities and traditional hospitality to ensure your
                    complete satisfaction.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>
    )
  }
  
  export default AboutSection
  