import React from "react";
import { Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Layout from "./hoc/Layout/Layout";

import NewsMain from "./components/Articles/News/Main/index";
import NewsArticles from "./components/Articles/News/Post/index";
import VideoArticle from "./components/Articles/Videos/Video/index";
import VideosMain from "./components/Articles/Videos/Main/index";
import SignIn from "./components/SignIn/SignIn";
import Dashboard from "./components/Dashboard/Dashboard";

import PrivateRoutes from "./components/AuthRoutes/PrivateRoutes";
import PublicRoutes from "./components/AuthRoutes/PublicRoutes";

const Routes = props => {
  return (
    <Layout user={props.user}>
      <Switch>
        <PublicRoutes
          {...props}
          restricted={false}
          path="/"
          exact
          component={Home}
        />
        <PublicRoutes
          {...props}
          restricted={false}
          path="/news"
          exact
          component={NewsMain}
        />
        <PublicRoutes
          {...props}
          restricted={false}
          path="/articles/:id"
          exact
          component={NewsArticles}
        />
        <PublicRoutes
          {...props}
          restricted={false}
          path="/videos/:id"
          exact
          component={VideoArticle}
        />
        <PublicRoutes
          {...props}
          restricted={false}
          path="/videos"
          exact
          component={VideosMain}
        />
        <PublicRoutes
          {...props}
          restricted={true}
          path="/sign-in"
          exact
          component={SignIn}
        />
        <PrivateRoutes
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
