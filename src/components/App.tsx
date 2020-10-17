import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./common/Header";
import styles from "./App.scss";

const App = () => (
  <Fragment>
    <Header />
    <h1>My React and TypeScript Apps!!!!</h1>
    <div className={styles.sub}>Test red</div>
    <img src="./images/company-vision.jpg" />
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById("root"));
