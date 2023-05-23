import React from "react";
import AppTheme from "../theme/AppTheme";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NavBar from "./UI/components/NavBar";
import PostsLayout from "./post/pages/PostsLayout";

const MainApp = () => {
  return (
    <AppTheme>
        <PostsLayout>
            <h1>Content</h1>
        </PostsLayout>
    </AppTheme>
  );
};

export default MainApp;
