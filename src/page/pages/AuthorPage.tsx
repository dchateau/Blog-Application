import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import PageLayout from "../layout/PageLayout";
import AppTheme from "../../../theme/AppTheme";
import styles from "../../../styles/Home.module.css";

import { AuthorFields } from "@typings/contentful";
import ShareList from "../../post/components/ShareList";

type Props = {
  author: AuthorFields;
};

const AuthorPage = ({ author: { biography, fullName, resume, photo } }: Props) => {
  const altPhoto: string = photo?.fields.title?.toString() || "";
  return (
    <AppTheme>
      <PageLayout>
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
              height: { xs:"calc(50vh)" ,md: "calc(36vh)", lg: "calc(34vh)" },
              backgroundColor: "secondary.main",
              p: 3,
            }}
          >
            <Grid
              item
              xs={2.1}
              md={2.1}
              lg={2.2}
              direction="column"
              sx={{
                margin: 0,
                p: 0,
                height: { xs: "calc(15vh)", md: "calc(20vh)", lg: "calc(24vh)" },
              }}
            >
              <div className={styles.profileImage}>
                <Image
                  src={`https:${photo?.fields.file?.url}`}
                  alt={altPhoto}
                  style={{ objectFit: "cover" }}
                  fill
                />
              </div>
            </Grid>
            <Grid item xs={9} md={8} lg={8} >
              <Typography variant="h2" >{fullName}</Typography>
              <Typography variant="h4" gutterBottom>My resume</Typography>
              <Typography variant="body2" sx={{paddingTop: 1}}>
                {resume}
              </Typography>
              <ShareList/>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{p:3, maxheight: "calc(100%)"}}>
            {documentToReactComponents(biography)}
        </Box>
      </PageLayout>
    </AppTheme>
  );
};

export default AuthorPage;
