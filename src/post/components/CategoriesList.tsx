import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import FeedIcon from "@mui/icons-material/Feed";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import type { ReactElement } from "react";
import type { NextRouter } from "next/router";
import type { CategoryFields } from "@typings/contentful";

interface Props {
  categories: CategoryFields[];
  onHandleClick?: () => void;
}

const CategoriesList = ({ categories, onHandleClick }: Props): ReactElement => {
  const router: NextRouter = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>("");

  useEffect(() => {
    const onRouteChange = (url: string): void => {
      let category: string[] | string = url.split("?");

      if (category.length === 1) {
        setActiveCategory("");
        return;
      }
      category = category[1].split("=");
      category = category[1];
      setActiveCategory(category);
    };

    router.events.on("routeChangeComplete", onRouteChange);
  }, [router.events]);

  const onClickCategory = (slug: string): void => {
    if (slug !== "") {
      router.push({
        pathname: "/",
        query: {
          category: slug,
        },
      });
      if (onHandleClick) onHandleClick();
    } else {
      router.replace("/", undefined, { shallow: true });
      if (onHandleClick) onHandleClick();
    }
  };

  return (
    <List>
      <ListItem onClick={onClickCategory.bind(null, "")} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <FeedIcon />
          </ListItemIcon>
          <ListItemText primary="All categories" />
        </ListItemButton>
      </ListItem>
      {categories.map((category: CategoryFields) => {
        const { slug, title } = category;
        return (
          <ListItem
            key={slug}
            sx={{ mt: 2, width: "100%" }}
            onClick={onClickCategory.bind(null, slug)}
            disablePadding
          >
            <ListItemButton
              selected={slug === activeCategory}
              sx={{ "&.Mui-selected": { backgroundColor: "primary.main" } }}
            >
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
