import React from "react";
import AppTheme from "../theme/AppTheme";
import PostsPage from "./post/pages/PostsPage";

const MainApp = () => {
  return (
    <AppTheme>
      <PostsPage />
    </AppTheme>
  );
};

export default MainApp;
