import React from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import { NavLink } from "@ui/components";
import YouTubePlayer from "../components/YouTubePlayer";

const renderOptions: any = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
      return (
        <Grid
          container
          sx={{
            position: "relative",
            width: "60%",
            height: {
              xs: "calc(20vmax)",
              sm: "calc(40vmax)",
              md: "calc(50vh)",
              lg: "calc(60vh)",
            },
          }}
        >
          <Image
            src={`https:${node.data.target.fields.file.url}`}
            alt={node.data.target.fields.title}
            fill
            sizes="(max-width: 768px) 190vw, (max-width: 1200px) 80vw"
          />
        </Grid>
      );
    },
    [INLINES.HYPERLINK]: (node: any) => {
      const label: string = node.content[0].value;
      const isYouTubeVideo: boolean = node.data.uri.includes(
        "youtu" || "youtube"
      );
      let url: string[] = [""];

      if (isYouTubeVideo) {
        url = node.data.uri.split("/");
      }
      return (
        <>
          <NavLink fontColor="black" to={node.data.uri} title={label} />
          {isYouTubeVideo && <YouTubePlayer title={label} videoId={url[3]} />}
        </>
      );
    },
    [BLOCKS.QUOTE]: (node: any) => {
      const quote: string = node.content[0].content[0].value;
      return (
        <Card>
          <CardContent>
            <blockquote>
              <Typography color="GrayText" variant="h5">
                {quote}
              </Typography>
            </blockquote>
            <Divider sx={{ marginBottom: 2 }} />
            <Typography variant="h6" textAlign="right" sx={{ marginRight: 2 }}>
              Author
            </Typography>
          </CardContent>
        </Card>
      );
    },
  },
};

export default renderOptions;
