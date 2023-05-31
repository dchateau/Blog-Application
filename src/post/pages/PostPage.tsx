import React from "react";
import Image from "next/image";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import CategoriesInlineList from "../components/CategoriesInlineList";

import PostLayout from "../layout/PostLayout";
import AppTheme from "../../../theme/AppTheme";
import styles from "../../../styles/Home.module.css";

import { PostFields } from "@typings/contentful";

// interface EntryProps {
//   title: string;
//   creationDate: string;
//   metaDescription: string;
//   metaKeywords: Array<string>;
//   readingTime: number;
// }
type Props = {
  post: PostFields;
};

const PostPage = ({
  post: {
    author,
    body,
    categories,
    creationDate,
    featuredImage,
    readingTime,
    title,
  },
}: Props) => {
  const altImage: string = featuredImage?.fields.title?.toString() || "";
  const authors: string[] = author.map((author: any) => author.fields.fullName);
  const publishingDate: Date = new Date(creationDate);

  const renderOption: any = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
        return (
          <div className={styles.entryImageContainer}>
            <Image
              src={`https:${node.data.target.fields.file.url}`}
              alt={node.data.target.fields.title}
              fill
            />
          </div>
        );
      },
      [INLINES.HYPERLINK]: (node: any) => {
        const label = node.content[0].value;
        console.log("Hyperlink", node.data.uri, label);
        return (
          <Link
            underline="hover"
            sx={{
              color: "black",
              textDecoration: "none",
              ":hover": { color: "#8C0303", cursor: "pointer" },
            }}
            href={node.data.uri}
          >
            {label}
          </Link>
        );
      },
    },
  };

  const formatDate = (date: Date): string => {
    const day =
      date.getDay().toString().length < 2 ? "0" + date.getDay() : date.getDay();
    const month =
      date.getMonth().toString().length < 2
        ? `0${date.getMonth() + 1}`
        : date.getMonth();

    return `${day}/${month}/${date.getFullYear()}`;
  };

  // console.log("body: ", body)

  return (
    <AppTheme>
      <PostLayout>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <Grid
            item
            container
            spacing={0}
            sx={{
              // width: "100%",
              height: { md: "calc(38vh)", lg: "calc(35vh)" },
              backgroundColor: "secondary.main",
              p: 0,
            }}
          >
            <Grid item xs={8} md={7} lg={6} sx={{ p: 2 }}>
              <h1>{title}</h1>
              {/* <Divider/> */}
              <Grid
                container
                // spacing={0}
                sx={{ p: 0, maxWidth: "95%" }}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <h4>
                  Author:
                  <span className={styles.lightFont}>
                    {" "}
                    {authors.join(", ")}
                  </span>
                </h4>
                <span>{formatDate(publishingDate)}</span>
                <h4>
                  Reading time:
                  <span className={styles.lightFont}>
                    {" "}
                    {readingTime} minutes
                  </span>
                </h4>
                <CategoriesInlineList categories={categories || []} />
              </Grid>
            </Grid>
            <Grid item xs={4} md={5} lg={6} sx={{ margin: 0, p: 0 }}>
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
          {/* <Grid
            item
            container
            direction="column"
            overflow="scroll"
            spacing={0}
            columnGap={1}
            sx={{
              height: "calc(80vh)",
              // backgroundColor: "secondary.dark",
              p: 3,
            }}
          >
            
          </Grid> */}
          <Box sx={{ p: 3, height: "100%" }}>
            {documentToReactComponents(body, renderOption)}
          </Box>
        </Grid>
      </PostLayout>
    </AppTheme>
  );
};

export default PostPage;
