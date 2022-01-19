import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../scss/app.scss";
import Router from "./Router";
import store from "./store";
import ScrollToTop from "./ScrollToTop";
import Loader from "../Common/Loader";
import Layout from "../Layout";

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
