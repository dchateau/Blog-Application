import React from "react";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import { Category } from "@typings/contentful";

type Props = {
  categories: Category[];
};

const CategoriesInlineList = ({ categories }: Props) => {
  return (
    <Grid
      item
      container
      sx={{ p: 0, maxWidth: "95%", mt: 1 }}
      direction="row"
      alignItems="center"
      justifyContent="space-around"
    >
      {categories.map((category) => (
        <Chip label={category.fields.title} key={category.fields.slug}   sx={{fontSize: "0.9rem", backgroundColor: "#f2f1f1"}} />
      ))}
    </Grid>
  );
};

export default CategoriesInlineList;
