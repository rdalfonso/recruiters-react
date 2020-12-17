import React, { Fragment } from "react";
import styles from "./Footer.scss";

const Footer = (): React.ReactElement => (
  <Fragment>
   <div className={styles.footer}>
     <div className={styles.links}>
       <a>About Us</a> |
       <a>Contact Us</a>
     </div>
   </div>
  </Fragment>
);

export default Footer;
