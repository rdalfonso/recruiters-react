import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import styles from "./App.scss";

const App = () => (
  <Fragment>
    <Header />
    <div className={styles.primary}>
    <div className={styles.heading}>Welcome to Headhunt Reviews</div>
    <div className={styles.body}>
        <div className={styles.sub}><h3>Most online recruiters are dishonest or fake.</h3></div>
        <div className={styles.blurb}><b>Don't get burned. Reduce spam. Less harassment.</b></div>
        <div><img src="./images/rr.jpg" height="300px" width="495px" className={styles.promo}/></div>
        <div><h3>Trusted Reviews by real engineers</h3></div>
        <div>
          <div className={styles.ctas}>
            <button className={styles.cta1}>Industry Peers</button>
            <button className={styles.cta2}>Honest Reviews</button>
            <button className={styles.cta3}>Valuble Information</button>
          </div>
        </div>
    </div>
    </div>
    <Footer />
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById("root"));
