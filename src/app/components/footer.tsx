import React from "react";
import styles from "./footer.module.scss";
function Footer() {
  return (
    <div className={styles.footerMain}>
      <p>DriveTime, LLC.</p>
      <p className="footer-text">
        <a href="#" className="footer-link">
          GLBA Privacy Policy
        </a>{" "}
        |
        <a href="#" className="footer-link">
          Terms of Service
        </a>
      </p>
      <p className="footer-text">
        © Copyright Informed, Inc. 2023. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
