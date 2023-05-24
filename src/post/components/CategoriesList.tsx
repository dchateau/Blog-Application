import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FeedIcon from '@mui/icons-material/Feed';

type Props = {
  categories: Array<any>;
};

const CategoriesList = ({ categories }: Props) => {
  return (
    <List>
      {categories.map((category) => {
        let { slug, title } = category.fields;
        slug = slug["en-US"];
        title = title["en-US"];
        // console.log(slug, title);
        return (
          <ListItem key={slug} sx={{padding: 1.4}}>
            <ListItemButton>
                <ListItemIcon>
                    <FeedIcon/>
                </ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default CategoriesList;
