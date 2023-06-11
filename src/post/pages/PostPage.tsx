import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { DiscussionEmbed } from "disqus-react";

import { NavLink } from "@ui/components";
import CategoriesInlineList from "../components/CategoriesInlineList";
import ShareList from "../components/ShareList";

import PostLayout from "../layout/PostLayout";
import AppTheme from "../../../theme/AppTheme";
import styles from "../../../styles/Home.module.css";

import { contentfulRenderOptions, getFormattedDate } from "@post/helpers";

import type { ReactElement } from "react";
import type { NextRouter } from "next/router";
import type { SxProps } from "@mui/system";
import type { PostFields } from "@typings/contentful";
import type { DisqusConfig } from "@typings/globals";

interface Props {
  post: PostFields;
  disqusSiteName: string;
}

const PostPage = ({
  disqusSiteName,
  post: {
    author,
    body,
    categories,
    creationDate,
    featuredImage,
    readingTime,
    slug,
    title,
  },
}: Props): ReactElement => {
  const [postUrl, setPostUrl] = useState<string>("");
  const router: NextRouter = useRouter();
  const altImage: string = featuredImage?.fields.title?.toString() || "";
  const publishingDate: Date = new Date(creationDate);

  useEffect(() => {
    setPostUrl(`${window.location.origin}${router.asPath}`);
  }, []);

  const disqusConfig: DisqusConfig = {
    url: postUrl,
    title,
    identifier: slug,
    language: "en-US",
  };

  const containersHeight: SxProps = {
    xs: "calc(80vmax)",
    sm: "calc(60vmin)",
    md: "calc(48vh)",
    lg: "calc(46vh)",
  };

  return (
    <AppTheme>
      <PostLayout>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "100%",
          }}
        >
          <Grid
            item
            container
            spacing={0}
            sx={{
              height: containersHeight,
              backgroundColor: { sm: "secondary.main" },
              backgroundImage: {
                xs: `url('https:${featuredImage?.fields.file?.url}')`,
                sm: "none",
              },
              backgroundRepeat: { xs: "no-repeat" },
              backgroundSize: { xs: "cover" },
              "& .MuiGrid-root": {
                xs: { backdropFilter: "contrast(20%)" },
                sm: { backdropFilter: "none" },
              },
              "& .MuiGrid-container": {
                // backgroundColor: "transparent",
                bgcolor: "transparent"
              },
              p: 0,
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={7}
              lg={6}
              sx={{
                p: 2,
                alignSelf: { xs: "center", sm: "flex-start" },
                // backgroundColor: {xs: "blue", sm: "red"},
                // "& .MuiGrid-root": { backgroundColor: "transparent" },
              }}
              justifyContent="center"
            >
              <h1 style={{ color: "white" }}>{title}</h1>
              {/* <Divider/> */}
              <Grid
                container
                // spacing={0}
                sx={{
                  p: 0,
                  maxWidth: "100%",
                  // backgroundColor: "transparent",
                  bgcolor: "transparent",
                  "& .MuiGrid-root": {
                    // backgroundColor: "transparent",
                    bgcolor: "transparent"
                  },
                }}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <h4>
                  Author:
                  <span className={styles.lightFont}>
                    {" "}
                    {author.map((author) => {
                      const { fullName, slug } = author.fields;
                      const path = `/author/${slug}`;
                      return (
                        <>
                          <NavLink
                            key={slug}
                            to={path}
                            fontColor="black"
                            title={fullName}
                          />{" "}
                        </>
                      );
                    })}
                  </span>
                </h4>
                <span>{getFormattedDate(publishingDate)}</span>
                <h4>
                  Reading time:
                  <span className={styles.lightFont}>
                    {" "}
                    {readingTime} minutes
                  </span>
                </h4>
                <CategoriesInlineList categories={categories || []} />
                <ShareList postUrl={postUrl} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={0}
              sm={6}
              md={5}
              lg={6}
              sx={{
                margin: 0,
                p: 0,
                height: containersHeight,
                display: { xs: "none", sm: "flex" },
              }}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={`https:${featuredImage?.fields.file?.url}`}
                  alt={altImage}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Grid>
          </Grid>
          <Box sx={{ p: 3, height: "100%" }}>
            {
              //@ts-ignore
              documentToReactComponents(body, contentfulRenderOptions)
            }
            <DiscussionEmbed shortname={disqusSiteName} config={disqusConfig} />
          </Box>
        </Grid>
      </PostLayout>
    </AppTheme>
  );
};

export default PostPage;
