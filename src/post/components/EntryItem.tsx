import React from "react";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { getFormattedDate } from "@post/helpers";

import type { ReactElement } from "react";
import type { NextRouter } from "next/router";
import type { EntryItemProps } from "@typings/globals";

const EntryItem = ({
  date,
  entryId,
  excerpt,
  authors,
  imageUrl,
  readingTime,
  slug,
  title,
}: EntryItemProps): ReactElement => {
  const router: NextRouter = useRouter();

  const onClickCard = (): void => {
    const route: string = `/${slug}`;
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
      container
      xs={12}
      sm={12}
      md={6}
      lg={4}
      sx={{
        height: {
          xs: "calc(20rem)",
          sm: "calc(21rem)",
          md: "calc(26rem)",
          lg: "calc(64vh - 4px)",
        },
        flexWrap: "nowrap",
      }}
    >
      <Card
        sx={{
          flexGrow: 1,
          height: {
            xs: "calc(19rem)",
            sm: "calc(20rem)",
            md: "calc(24rem)",
            lg: "calc(60vh)",
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
            <Typography
              variant="h5"
              component="div"
              sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.3rem" } }}
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "0.78rem", sm: "0.87rem", md: "1rem" } }}
              gutterBottom
            >
              {excerpt}
            </Typography>
            <Grid
              container
              justifyContent="space-bewteen"
              alignItems="center"
              columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            >
              <Grid item xs={7} sm={6} md={10}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: { xs: "0.68rem", sm: ".82rem", md: "0.9rem" },
                  }}
                >
                  <strong>Entry by</strong> {authors.join(", ")}
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                sm={4}
                md={4}
                sx={{ display: { xs: "none", sm: "flex" } }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: { xs: "0.68rem", sm: ".82rem", md: "0.9rem" },
                  }}
                >
                  {getFormattedDate(date)}
                </Typography>
              </Grid>
              <Grid item xs={3} sm={4} md={4}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: { xs: "0.68rem", sm: ".82rem", md: "0.9rem" },
                  }}
                >
                  {readingTime} minutes
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
