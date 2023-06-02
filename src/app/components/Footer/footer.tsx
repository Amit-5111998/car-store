"use client";
import React, { useEffect } from "react";
import styles from "./footer.module.scss";
import { useCarStore } from "../../store";
function Footer() {
  const zustData = useCarStore((state: any) => state.data);
  const zustDataFetch = useCarStore((state: any) => state.fetch);

  useEffect(() => {
    zustDataFetch();
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.divider}></div>
      <div className={styles.contactDetails}>
        <p>Questions? Call DriveTime</p>
        <p>{zustData?.branding?.phone}</p>
        <p>Your progress will be saved automatically.</p>
      </div>
      <div className={styles.footerMain}>
        <p>DriveTime, LLC.</p>
        <p className="footer-text">
          <a
            href={zustData?.branding?.privacy_link}
            target="_blank"
            className="footer-link"
          >
            GLBA Privacy Policy
          </a>{" "}
          |
          <a
            href={zustData?.branding?.terms_of_service_link}
            target="_blank"
            className="footer-link"
          >
            Terms of Service
          </a>
        </p>
        <p className="footer-text">
          © Copyright Informed, Inc. 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
