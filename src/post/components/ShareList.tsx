import React from "react";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import type { ReactElement } from "react";
import type { SxProps } from "@mui/system";

interface Props {
  postUrl: string;
}

const chipConfig: SxProps = {
  marginTop: { xs: 2, md: 0, lg: 0 },
  backgroundColor: "white",
};

const ShareList = ({ postUrl }: Props): ReactElement => {
  const encodedURL: string = encodeURI(postUrl);
  const twitterURL: string = `https://twitter.com/share?url="${encodedURL}"`;
  const facebookURL: string = `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`;
  const linkedInURL: string = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`;

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        mt={3}
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <IconButton href={twitterURL} target="_blank">
          <TwitterIcon />
        </IconButton>
        <IconButton href={facebookURL} target="_blank">
          <FacebookIcon />
        </IconButton>
        <IconButton href={linkedInURL} target="_blank">
          <LinkedInIcon />
        </IconButton>
      </Grid>
      <Grid
        sx={{ display: { xs: "none", md: "flex  " } }}
        container
        direction="row"
        justifyContent="space-between"
        mt={3}
      >
        <Chip
          icon={<TwitterIcon />}
          label="Share with Twitter"
          clickable
          component="a"
          href={twitterURL}
          target="_blank"
          sx={chipConfig}
        />
        <Chip
          icon={<FacebookIcon />}
          label="Share with Facebook"
          clickable
          component="a"
          href={facebookURL}
          target="_blank"
          sx={chipConfig}
        />
        <Chip
          icon={<LinkedInIcon />}
          label="Share with LinkedIn"
          clickable
          component="a"
          href={linkedInURL}
          target="_blank"
          sx={chipConfig}
        />
      </Grid>
    </>
  );
};

export default ShareList;
