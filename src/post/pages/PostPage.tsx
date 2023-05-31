import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import PostLayout from "../layout/PostLayout";
import AppTheme from "../../../theme/AppTheme";
import { PostFields } from "@typings/contentful";
import styles from "../../../styles/Home.module.css";
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

const PostPage = ({ post: { title, featuredImage } }: Props) => {
  const altImage: string = featuredImage?.fields.title?.toString() || "";
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
              height: "calc(30vh)",
              backgroundColor: "secondary.main",
              p: 0,
            }}
          >
            <Grid item xs={8} md={7} lg={6} sx={{ p: 2 }}>
              <h1>{title}</h1>
            </Grid>
            <Grid item xs={4}md={5} lg={6} sx={{ margin: 0, p: 0 }}>
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
          <Grid
            item
            container
            sx={{
              height: "calc(100vh)",
              backgroundColor: "secondary.dark",
              p: 3,
            }}
          >
            <h5>Body</h5>
          </Grid>
        </Grid>
      </PostLayout>
    </AppTheme>
  );
};

export default PostPage;
