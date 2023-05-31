import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { NextRouter } from "next/router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FeedIcon from "@mui/icons-material/Feed";
import { CategoryFields } from "@typings/contentful";

type Props = {
  categories: CategoryFields[];
};

const CategoriesList = ({ categories }: Props) => {
  const router: NextRouter = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>("");

  useEffect(() => {
    const onRouteChange = (url: string): void => {
      // console.log("Category selected: ", url);
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
    // console.log("Clicked category", slug);
    if (slug !== "")
      router.push({
        pathname: "/",
        query: {
          category: slug,
        },
      });
    else router.replace("/", undefined, { shallow: true });
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
      {categories.map((category: CategoryFields) => {
        const { slug, title } = category;
        // console.log("CategoryItem: ", slug, activeCategory);
        // console.log(slug, title);
        return (
          <ListItem
            key={slug}
            sx={{ padding: 1.2, width: "100%" }}
            onClick={onClickCategory.bind(null, slug)}
          >
            <ListItemButton selected={slug === activeCategory} sx={{"&.Mui-selected": { backgroundColor: "primary.main"}}}>
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
