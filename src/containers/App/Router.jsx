import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loader from "../Common/Loader";

const HomePage = lazy(() => import("../Pages/Home"));
const AboutPage = lazy(() => import("../Pages/About"));
const WhyITOTPage = lazy(() => import("../Pages/WhyITOT"));
const MarketPlacePage = lazy(() => import("../Pages/MarketPlace"));
const WebPortalPage = lazy(() => import("../Pages/WebPortal"));
const HelpPage = lazy(() => import("../Pages/Help"));
const LoginPage = lazy(() => import("../Pages/Login"));
const NotFoundPage = lazy(() => import("../ErrorPages/NotFoundPage"));

const Router = () => (
  <main>
    <Suspense fallback={true && <Loader />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/why-itot" component={WhyITOTPage} />
        <Route path="/market-place" component={MarketPlacePage} />
        <Route path="/web-portal" component={WebPortalPage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/not-found" component={NotFoundPage} />
        <Redirect from="*" to="/not-found" />
      </Switch>
    </Suspense>
  </main>
);

export default Router;
