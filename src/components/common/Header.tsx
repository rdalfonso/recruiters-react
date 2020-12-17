import React, { Fragment } from "react";
import styles from "./Header.scss";

const Header = (): React.ReactElement => (
  <Fragment>
    <div className={styles.header}>
      <div>
          <button className={styles.info}>BETA VERSION</button>
      </div>
      <div>
        <h2 className={styles.tag}>Are you frustrated by bad recruiting?</h2>
      </div>
      <div className={styles.loggedout}>
        <button className={styles.join}>Sign Up Now</button>
        <button className={styles.info} >Login</button>
      </div>
  </div>
  </Fragment>
);

export default Header;
