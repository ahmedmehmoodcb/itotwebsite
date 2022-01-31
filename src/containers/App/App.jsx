import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import store from "./store";
import ScrollToTop from "./ScrollToTop";
import Loader from "../Common/Loader";
import Layout from "../Layout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
import "../../scss/app.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    window.addEventListener("load", () => {
      setTimeout(() => this.setState({ loading: false }), 500);
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            <>
              {loading ? (
                <Loader />
              ) : (
                <Layout>
                  <Router />
                </Layout>
              )}
            </>
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default hot(module)(App);
