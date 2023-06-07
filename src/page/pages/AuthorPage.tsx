import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import ShareList from "../../post/components/ShareList";
import PageLayout from "../layout/PageLayout";
import AppTheme from "../../../theme/AppTheme";
import styles from "../../../styles/Home.module.css";

import { AuthorFields } from "@typings/contentful";
import type { NextRouter } from "next/router";
import { contentfulRenderOptions } from "@post/helpers";

type Props = {
  author: AuthorFields;
};

const AuthorPage = ({
  author: { biography, fullName, resume, photo },
}: Props) => {
  const [postUrl, setPostUrl] = useState<string>("");
  const router: NextRouter = useRouter();
  const altPhoto: string = photo?.fields.title?.toString() || "";

  useEffect(() => {
    setPostUrl(`${window.location.origin}${router.asPath}`);
  }, []);

  return (
    <AppTheme>
      <PageLayout>
        <Grid
          container
          // spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <Grid
            item
            container
            columnSpacing={3}
            spacing={0}
            sx={{
              // width: "100%",
              height: {
                xs: "calc(28rem)",
                sm: "calc(20rem)",
                md: "calc(24rem)",
                lg: "calc(38vh)",
              },
              backgroundColor: "secondary.main",
              alignSelf: "center",
              p: 0,
            }}
          >
            <Grid
              item
              xs={4}
              md={3}
              lg={3}
              container
              direction="column"
              sx={{
                margin: 0,
                p: 0,
                // height: { xs: "calc(15vh)", md: "calc(20vh)", lg: "calc(24vh)" },
              }}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={`https:${photo?.fields.file?.url}`}
                  alt={altPhoto}
                  style={{ objectFit: "cover" }}
                  fill
                />
              </div>
            </Grid>
            <Grid item xs={8} md={8} lg={8} sx={{ p: 2 }}>
              <Typography variant="h2" sx={{ color: "white" }}>
                {fullName}
              </Typography>
              <Typography variant="h4" gutterBottom>
                My resume
              </Typography>
              <Typography variant="body2" sx={{ paddingTop: 1 }}>
                {resume}
              </Typography>
              <ShareList postUrl={postUrl} />
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ p: 3, maxheight: "calc(100%)" }}>
          {documentToReactComponents(biography, contentfulRenderOptions)}
        </Box>
      </PageLayout>
    </AppTheme>
  );
};

export default AuthorPage;
