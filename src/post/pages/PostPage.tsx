import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import type { SxProps } from "@mui/system";

import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { DiscussionEmbed } from "disqus-react";

import CategoriesInlineList from "../components/CategoriesInlineList";
import ShareList from "../components/ShareList";
import { NavLink } from "@ui/components";

import PostLayout from "../layout/PostLayout";
import AppTheme from "../../../theme/AppTheme";
import styles from "../../../styles/Home.module.css";

import { contentfulRenderOptions, getFormattedDate } from "@post/helpers";
import { PostFields } from "@typings/contentful";
import type { NextRouter } from "next/router";
import YouTubePlayer from "../components/YouTubePlayer";


// interface EntryProps {
//   title: string;
//   creationDate: string;
//   metaDescription: string;
//   metaKeywords: Array<string>;
//   readingTime: number;
// }
type Props = {
  post: PostFields;
  disqusSiteName: string;
};

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
}: Props) => {
  const [postUrl, setPostUrl] = useState<string>("");
  const router: NextRouter = useRouter();
  const altImage: string = featuredImage?.fields.title?.toString() || "";
  const publishingDate: Date = new Date(creationDate);

  useEffect(() => {
    // console.log(disqusSiteName);
    setPostUrl(`${window.location.origin}${router.asPath}`);
  }, []);
  // const postUrl = `${window.location.origin}${router.asPath}`;

  console.log(`Post URL: ${postUrl}`);
  const disqusConfig = {
    url: postUrl,
    title,
    identifier: slug,
    language: "en-US",
  };

  // const renderOption: any = {
  //   renderNode: {
  //     [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
  //       return (
  //         <Grid
  //           container
  //           sx={{
  //             position: "relative",
  //             width: "60%",
  //             height: { xs: "calc(30vmax)", sm: "calc(40vmax)", md: "calc(50vh)", lg: "calc(60vh)" },
  //           }}
  //         >
  //           <Image
  //             src={`https:${node.data.target.fields.file.url}`}
  //             alt={node.data.target.fields.title}
  //             fill
  //             sizes="(max-width: 768px) 190vw, (max-width: 1200px) 80vw"
  //           />
  //         </Grid>
  //       );
  //     },
  //     [INLINES.HYPERLINK]: (node: any) => {
  //       const label = node.content[0].value;
  //       let url: any = node.data.uri;
  //       url = url.split("/");
  //       console.log("Hyperlink", url, url[3], label);
  //       return (
  //         <>
  //           <NavLink fontColor="black" to={node.data.uri} title={label} />
  //           <YouTubePlayer title={label} videoId={url[3]} />
  //         </>
  //         // <Link
  //         //   underline="hover"
  //         //   sx={{
  //         //     color: "black",
  //         //     textDecoration: "none",
  //         //     ":hover": { color: "#8C0303", cursor: "pointer" },
  //         //   }}
  //         //   href={node.data.uri}
  //         // >
  //         //   {label}
  //         // </Link>
  //       );
  //     },
  //     [BLOCKS.QUOTE]: (node: any) => {
  //       // console.log("Quote: ", node, node.content[0].content[0].value);
  //       const quote: string = node.content[0].content[0].value;
  //       return (
  //         <Card>
  //           <CardContent>
  //             <blockquote>
  //               <Typography color="GrayText" variant="h5">
  //                 {quote}
  //               </Typography>
  //             </blockquote>
  //             <Divider sx={{ marginBottom: 2 }} />
  //             <Typography
  //               variant="h6"
  //               textAlign="right"
  //               sx={{ marginRight: 2 }}
  //             >
  //               Author
  //             </Typography>
  //           </CardContent>
  //         </Card>
  //       );
  //     },
  //   },
  // };

  // const formatDate = (date: Date): string => {
  //   const day =
  //     date.getDay().toString().length < 2 ? "0" + date.getDay() : date.getDay();
  //   const month =
  //     date.getMonth().toString().length < 2
  //       ? `0${date.getMonth() + 1}`
  //       : date.getMonth();

  //   return `${day}/${month}/${date.getFullYear()}`;
  // };

  // console.log("body: ", body)
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
              // width: "100%",
              height: containersHeight,
              backgroundColor: { xs: "transparent", sm: "secondary.main" },
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
              }}
              justifyContent="center"
            >
              <h1 style={{ color: "white" }}>{title}</h1>
              {/* <Divider/> */}
              <Grid
                container
                // spacing={0}
                sx={{ p: 0, maxWidth: "100%" }}
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
                          {/* <Link
                            key={slug}
                            href={path}
                            underline="hover"
                            sx={{
                              color: "black",
                              textDecoration: "none",
                              ":hover": { color: "#8C0303", cursor: "pointer" },
                            }}
                          >
                            {fullName}
                          </Link>{" "} */}
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
            {documentToReactComponents(body, contentfulRenderOptions)}
            <DiscussionEmbed shortname={disqusSiteName} config={disqusConfig} />
          </Box>
        </Grid>
      </PostLayout>
    </AppTheme>
  );
};

export default PostPage;
