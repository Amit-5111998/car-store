"use client";
import React from "react";
import Button from "../components/Buttons/Button";
import { useRouter } from "next/navigation";
import styles from "./category.module.scss";
import Image from "next/image";

function Category({ params }: any) {
  const router = useRouter();

  return (
    <section className={styles.categoryPage}>
      <div className={styles.categoryHeader}>
        <div className={styles.breadCrum}>
          <Image
            src="/icons/home.svg"
            width={25}
            height={25}
            alt="home"
            onClick={() => router.push("/")}
          />
          <p> &gt; {params.category}</p>
        </div>
        <div>
          <Image
            src="/icons/DriveTime_logo.svg"
            alt="logo"
            width={70}
            height={45}
            onClick={() => router.push("/")}
          />
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h1>{params.category}</h1>
            <span>new</span>
          </div>
          <p>
            <span></span>Verify Your {params.category}
          </p>
        </div>
        <h1>Upload any of thse documents</h1>
        <div className={styles.documentContainer}>
          <p>State ID</p>
          <div className={styles.uploadIcons}>
            <Image
              src={"/icons/cameraCar.svg"}
              width={25}
              height={25}
              alt="camera"
            />
            <Image
              src={"/icons/cloudUpload.svg"}
              width={25}
              height={25}
              alt="camera"
            />
          </div>
        </div>
        <div className={styles.horizontalLine}>
          <span className={styles.horizontalLineText}>or</span>
        </div>
        <div className={styles.documentContainer}>
          <p>Passport</p>
          <div className={styles.uploadIcons}>
            <Image
              src={"/icons/cameraCar.svg"}
              width={25}
              height={25}
              alt="camera"
            />
            <Image
              src={"/icons/cloudUpload.svg"}
              width={25}
              height={25}
              alt="camera"
            />
          </div>
        </div>
      </div>
      <Button
        cssClass="skipButton"
        onSubmit={() => router.push("/")}
        label="Skip for later"
      />
    </section>
  );
}

export default Category;
