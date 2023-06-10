import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import PostsLayout from "../layout/PostsLayout";
import EntriesGrid from "../components/EntriesGrid";

import {
  ENTRIES_IF_SMALL,
  ENTRIES_IF_MEDIUM,
  ENTRIES_IF_LARGE,
} from "../../../constants";

import type { ReactElement } from "react";
import type { Theme } from "@mui/material/styles";
import type { CategoryFields, PostFields } from "@typings/contentful";
import { Typography } from "@mui/material";

interface Props {
  posts: PostFields[];
  categories: CategoryFields[];
  activeCategory: string;
}

const checkIfNeedsPagination = (
  mediaQueryMobile: boolean,
  mediaQueryLarge: boolean,
  postsLength: number
): boolean => {
  if (mediaQueryMobile && postsLength > ENTRIES_IF_SMALL) return true;
  else if (mediaQueryLarge && postsLength > ENTRIES_IF_LARGE) return true;
  else if (!mediaQueryLarge && postsLength > ENTRIES_IF_MEDIUM) return true;
  return false;
};

const getTotalPages = (
  mediaQueryMobile: boolean,
  mediaQueryLarge: boolean,
  postsLength: number
): number => {
  let totalPages: number = 1;

  if (mediaQueryMobile) totalPages = Math.ceil(postsLength / ENTRIES_IF_SMALL);
  else if (!mediaQueryLarge)
    totalPages = Math.ceil(postsLength / ENTRIES_IF_MEDIUM);
  else totalPages = Math.ceil(postsLength / ENTRIES_IF_LARGE);

  return totalPages;
};

const PostsPage = ({
  activeCategory,
  categories,
  posts,
}: Props): ReactElement => {
  const theme: Theme = useTheme();
  const mediaQueryMobile: boolean = useMediaQuery(
    theme.breakpoints.between("xs", "md")
  );
  const mediaQueryLarge: boolean = useMediaQuery(theme.breakpoints.up("lg"));

  const [isMobileView, setIsMobileView] = useState<boolean>(mediaQueryMobile);
  const [isLargeView, setIsLargeView] = useState<boolean>(mediaQueryLarge);
  const [needsPagination, setNeedsPagination] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [activePosts, setActivePosts] = useState<PostFields[]>(posts);

  useEffect(() => {
    console.log("Is mobile view? ", mediaQueryMobile);
    setIsMobileView(mediaQueryMobile);
  }, [mediaQueryMobile]);

  useEffect(() => {
    console.log("Is large view? ", mediaQueryLarge);
    setIsLargeView(mediaQueryLarge);
  }, [mediaQueryLarge]);

  useEffect(() => {
    let initIndex: number, lastIndex: number;
    if (isMobileView) {
      initIndex = (pageNumber - 1) * ENTRIES_IF_SMALL;
      lastIndex = initIndex + ENTRIES_IF_SMALL;
    } else if (!isLargeView) {
      initIndex = (pageNumber - 1) * ENTRIES_IF_MEDIUM;
      lastIndex = initIndex + ENTRIES_IF_MEDIUM;
    } else {
      initIndex = (pageNumber - 1) * ENTRIES_IF_LARGE;
      lastIndex = initIndex + ENTRIES_IF_LARGE;
    }
    setActivePosts(posts.slice(initIndex, lastIndex));
  }, [pageNumber]);

  useEffect(() => {
    if (checkIfNeedsPagination(isMobileView, isLargeView, posts.length)) {
      setNeedsPagination(true);
      setPageNumber(1);
      setTotalPages(getTotalPages(isMobileView, isLargeView, posts.length));

      if (isMobileView) {
        setActivePosts(posts.slice(0, ENTRIES_IF_SMALL));
      } else if (!isLargeView) {
        setActivePosts(posts.slice(0, ENTRIES_IF_MEDIUM));
      } else {
        setActivePosts(posts.slice(0, ENTRIES_IF_LARGE));
      }
    } else {
      setActivePosts(posts);
      setNeedsPagination(false);
      setTotalPages(1);
    }
  }, [posts, isMobileView, isLargeView]);

  const pageClicked = (evt: React.ChangeEvent<unknown>, page: number): void => {
    setPageNumber(page);
  };

  return (
    <PostsLayout categories={categories}>
      {activeCategory.length !== 0 && (
        <Typography variant="h4" mb={2}>
          {activeCategory}
        </Typography>
      )}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "calc(100vh - 110px)" }}
      >
        <EntriesGrid posts={activePosts} />
      </Grid>
      {needsPagination && (
        <>
          <Stack
            spacing={2}
            sx={{ display: { xs: "block", md: "none" } }}
            mt={2}
          >
            <Pagination
              defaultPage={1}
              page={pageNumber}
              count={totalPages}
              onChange={pageClicked}
              size="large"
            />
          </Stack>
          <Stack
            spacing={2}
            sx={{ display: { xs: "none", md: "block" } }}
            mt={1}
          >
            <Pagination
              defaultPage={1}
              page={pageNumber}
              count={totalPages}
              onChange={pageClicked}
              size="medium"
            />
          </Stack>
        </>
      )}
    </PostsLayout>
  );
};

export default PostsPage;
