import React from "react";
import { useRouter } from "next/router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FeedIcon from "@mui/icons-material/Feed";

type Props = {
  categories: Array<any>;
};

const CategoriesList = ({ categories }: Props) => {
  const router = useRouter();

  const onClickCategory = (slug: string) => {
    // console.log("Clicked category", slug);
    if (slug !== "")
      router.push({
        pathname: "/",
        query: {
          category: slug,
        },
      });
    else 
      router.replace("/", undefined, {shallow: true})
  };

  return (
    <List>
      <ListItem onClick={onClickCategory.bind(null, "")}>
        <ListItemButton sx={{ padding: 1.2 }}>
          <ListItemIcon>
            <FeedIcon />
          </ListItemIcon>
          <ListItemText primary="All categories" />
        </ListItemButton>
      </ListItem>
      {categories.map((category) => {
        let { slug, title } = category.fields;
        slug = slug["en-US"];
        title = title["en-US"];
        // console.log(slug, title);
        return (
          <ListItem
            key={slug}
            sx={{ padding: 1.2 }}
            onClick={onClickCategory.bind(null, slug)}
          >
            <ListItemButton>
              <ListItemIcon>
                <FeedIcon />
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
