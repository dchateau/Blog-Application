import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

import { getFormattedDate } from "@post/helpers";
import type { EntryItemProps } from "@typings/globals";

// type Props = {
//   authors: Array<string>;
//   date: Date;
//   entryId: string;
//   excerpt: string;
//   imageUrl: string;
//   readingTime: number;
//   slug: string;
//   title: string;
// };

const EntryItem = ({
  date,
  entryId,
  excerpt,
  authors,
  imageUrl,
  readingTime,
  slug,
  title,
}: EntryItemProps) => {
  const router = useRouter();

  const onClickCard = () => {
    console.log("Card clicked, navigate to: ", slug);
    const route = `/${slug}`;
    router.push(
      {
        pathname: route,
        query: { entryId },
      },
      route
    );
  };

  return (
    <Grid
      item
      xs={4}
      md={6}
      lg={4}
      sx={{
        height: {
          md: "calc(68vh - 4px)",
          lg: "calc(64vh - 4px)",
        },
      }}
    >
      <Card
        sx={{
          height: {
            sm: "calc(82vh)",
            md: "calc(60vh)",
            lg: "calc(58vh)",
          },
        }}
      >
        <CardActionArea sx={{ height: "100%" }} onClick={onClickCard}>
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
              <Grid item xs={8}>
                <Typography variant="subtitle1">
                  <strong>Published</strong> {getFormattedDate(date)}
                </Typography>
              </Grid>
              <Grid item xs={10}>
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
