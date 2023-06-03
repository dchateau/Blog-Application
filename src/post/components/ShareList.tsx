import React from "react";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import type {SxProps} from "@mui/system"

type Props = {
  postUrl: string;
};

const chipConfig: SxProps = {
  marginTop: { xs: 2, md: 0, lg: 0 },
  backgroundColor: "white",
};

const ShareList = ({ postUrl }: Props) => {
  const encodedUrl = encodeURI(postUrl);
  const twitterURL = `https://twitter.com/share?url="${encodedUrl}"`;
  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const linkedInURL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  return (
    <Grid container direction="row" justifyContent="space-between" mt={3}>
      <Chip
        icon={<TwitterIcon />}
        label="Share with twitter"
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
  );
};

export default ShareList;
