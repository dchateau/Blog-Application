import React from "react";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/material";

const ShareList = () => {
  return (
    <Grid container direction="row"  justifyContent="space-between" mt={2}>
      <Chip icon={<TwitterIcon />} label="Share with twitter" sx={{marginTop: {xs: 2, md:0 ,lg:0}}} />
      <Chip icon={<FacebookIcon />} label="Share with Facebook" sx={{marginTop: {xs: 2, md:0 ,lg:0}}} />
      <Chip icon={<LinkedInIcon />} label="Share with LinkedIn" sx={{marginTop: {xs: 2, md:0 ,lg:0}}} />
    </Grid>
  );
};

export default ShareList;
