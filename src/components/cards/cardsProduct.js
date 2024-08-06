// CardsProduct.js
import { Typography, CardMedia, Card, Button, Box, Container } from "@mui/material";
import React from "react";

export default function CardsProduct({ titleAlt, titleimg, image, title, description, specs, link }) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        maxHeight: 650,
        height: 650,
        width: "100%",
        ":hover": {
          backgroundColor: "ButtonHighlight",
          transform: "translateX(5px)",
          transition: "transform 0.3s ease-in-out",
        },
      }}
    >
      <Card elevation={0}>
        <CardMedia
          sx={{ height: 300 }}
          component="img"
          alt={titleAlt ? titleAlt : ""}
          title={titleimg ? titleimg : ""}
          image={image ? image : ""}
        />
      </Card>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Container>
          <Box>
            <Typography textAlign="center" sx={{ fontSize: "34px" }}>
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="justify"
              marginTop="40px"
            >
              {description}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
              marginTop="40px"
              dangerouslySetInnerHTML={{
                __html: specs ? specs : "",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "40px",
            }}
          >
            <Button
              size="medium"
              variant="contained"
              href={link ? link : ""}
              target="_blank"
              sx={{ borderRadius: "14px" }}
            >
              Más Información
            </Button>
          </Box>
        </Container>
      </Box>
    </Card>
  );
}
