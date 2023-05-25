import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

type Props = {
  authors: Array<string>;
  date: Date;
  excerpt: string;
  imageUrl: string;
  readingTime: number;
  title: string;
};

const EntryItem = ({
  date,
  excerpt,
  authors,
  imageUrl,
  readingTime,
  title,
}: Props) => {
  return (
    <Grid
      item
      xs={4}
      md={6}
      lg={4}
      sx={{
        height: {
            lg: "calc(55vh - 4px)",
            md: "calc(55vh - 4px)"
        },
      }}
    >
      <Card
        sx={{
          height: {
            sm: "calc(82vh)",
            md: "calc(50vh)",
            lg: "calc(48vh)",
          },
        }}
      >
        <CardActionArea sx={{ height: "100%" }}>
          <CardMedia
            component="img"
            sx={{ objectFit: "cover", height: "140px" }}
            image={`https:${imageUrl}`}
          />

          <CardContent sx={{ height: "100%" }}>
            <Typography variant="h5" component="div" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {excerpt}
            </Typography>
            <Grid
              container
              justifyContent="space-bewteen"
              alignItems="center"
              columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            >
              <Grid item xs={10}>
                <Typography variant="subtitle1">
                  <strong>Entry by</strong> {authors.join(", ")}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">
                  <strong>Published</strong> {date.toLocaleDateString()}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="subtitle1">
                  <strong>Reading time</strong> {readingTime} minutes
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default EntryItem;
