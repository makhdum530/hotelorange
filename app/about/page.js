import AboutSection from "@/components/AboutSection"
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Fade,
  Slide
} from "@mui/material"
import { TrendingUp, EmojiEvents } from "@mui/icons-material"

const About = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", pt: 10 }}>
      <AboutSection />

      {/* Our Story Section */}
      <Box
        sx={{
          py: 12,
          background:
            "linear-gradient(180deg, rgba(251, 146, 60, 0.03), rgba(251, 146, 60, 0.08), rgba(251, 146, 60, 0.03))",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Decorative background element */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "200px",
            background:
              "linear-gradient(to top, rgba(251, 146, 60, 0.05), transparent)",
            pointerEvents: "none"
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Fade in timeout={1000}>
            <Typography
              variant="h2"
              component="h2"
              fontWeight="bold"
              textAlign="center"
              sx={{ mb: 10 }}
            >
              Our Story
            </Typography>
          </Fade>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 6,
              alignItems: "start"
            }}
          >
            <Slide direction="right" in timeout={1200}>
              <Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      bgcolor: "primary.main",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 12px rgba(251, 146, 60, 0.3)"
                    }}
                  >
                    <TrendingUp sx={{ color: "white", fontSize: 28 }} />
                  </Box>
                  <Typography
                    variant="h4"
                    component="h3"
                    fontWeight="bold"
                    color="primary.main"
                  >
                    Since 1995
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.8 }}
                >
                  Hotel Orange International has been a beacon of hospitality
                  for over 25 years. What started as a small family business has
                  grown into one of the most trusted names in luxury
                  accommodation and fine dining.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.8 }}
                >
                  Our commitment to excellence, attention to detail, and genuine
                  care for our guests has earned us recognition both locally and
                  internationally.
                </Typography>
              </Box>
            </Slide>

            <Slide direction="left" in timeout={1200}>
              <Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      bgcolor: "primary.main",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 12px rgba(251, 146, 60, 0.3)"
                    }}
                  >
                    <EmojiEvents sx={{ color: "white", fontSize: 28 }} />
                  </Box>
                  <Typography
                    variant="h4"
                    component="h3"
                    fontWeight="bold"
                    color="primary.main"
                  >
                    Our Mission
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 4, lineHeight: 1.8 }}
                >
                  To provide exceptional hospitality experiences that create
                  lasting memories for our guests while maintaining the highest
                  standards of service, comfort, and culinary excellence.
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 3,
                    mt: 4
                  }}
                >
                  <Card
                    sx={{
                      textAlign: "center",
                      p: 3,
                      boxShadow: 3,
                      border: "2px solid",
                      borderColor: "primary.main",
                      transition: "all 0.3s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 6
                      }
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      <Typography
                        variant="h3"
                        fontWeight="bold"
                        color="primary.main"
                        sx={{ mb: 1 }}
                      >
                        500+
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontWeight={500}
                      >
                        Happy Guests Monthly
                      </Typography>
                    </CardContent>
                  </Card>

                  <Card
                    sx={{
                      textAlign: "center",
                      p: 3,
                      boxShadow: 3,
                      border: "2px solid",
                      borderColor: "primary.main",
                      transition: "all 0.3s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 6
                      }
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      <Typography
                        variant="h3"
                        fontWeight="bold"
                        color="primary.main"
                        sx={{ mb: 1 }}
                      >
                        25+
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontWeight={500}
                      >
                        Years of Excellence
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            </Slide>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default About
