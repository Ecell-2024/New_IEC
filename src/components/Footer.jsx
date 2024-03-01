// import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
// import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  const socialMediaLinks = {
    facebook: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
    instagram: "https://www.instagram.com/",
  };

  return (
    <Box
      sx={{
        bgcolor: "Black",
        color: "#bdbdbd",
        py: 3,
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <img
              src="data:image/png;base64,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"
              alt="Logo"
              className="h-10 mix-blend-hard-light w-[130px]"
            />
            <Typography sx={{marginTop:2}} variant="h4" color="white" gutterBottom>
              {/* IEC KIET */}
            </Typography>

            {/* Add your logo component or image here */}
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="#e0e0e0" gutterBottom>
              INNOVATION
            </Typography>
            <Link href="#" color="inherit" display="block">
              Features
            </Link>
            <Link href="#" color="inherit" display="block">
              Integrations
            </Link>
            <Link href="#" color="inherit" display="block">
              Pricing
            </Link>
            <Link href="#" color="inherit" display="block">
              FAQ
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="#e0e0e0" gutterBottom>
              ENTREPRENEURSHIP
            </Typography>
            <Link href="#" color="inherit" display="block">
              About Us
            </Link>
            <Link href="#" color="inherit" display="block">
              Careers
            </Link>
            <Link href="#" color="inherit" display="block">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" display="block">
              Terms of Service
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="#e0e0e0" gutterBottom>
              CONSULTANCY
            </Typography>
            <Link href="#" color="inherit" display="block">
              Public API
            </Link>
            <Link href="#" color="inherit" display="block">
              Documentation
            </Link>
            <Link href="#" color="inherit" display="block">
              Guides
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="#e0e0e0" gutterBottom>
              SOCIAL MEDIA
            </Typography>
            <IconButton
              aria-label="Facebook"
              color="inherit"
              component="a"
              href={socialMediaLinks.facebook}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              color="inherit"
              component="a"
              href={socialMediaLinks.twitter}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              color="inherit"
              component="a"
              href={socialMediaLinks.instagram}
            >
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ pt: 4 }}
        >
          © 2024 KIET . All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
