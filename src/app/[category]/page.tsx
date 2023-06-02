"use client";
import React, { useEffect, useState } from "react";
import Button from "../components/Buttons/Button";
import { useRouter } from "next/navigation";
import styles from "./category.module.scss";
import Image from "next/image";
import { useCarStore } from "../store";

interface DocumentsState {
  [key: string]: any;
}

function Category({ params }: any) {
  const zustData = useCarStore((state: any) => state.data);
  const router = useRouter();
  const [documents, setDocuments] = useState<DocumentsState>({});
  // let category;

  useEffect(() => {
    if (Object.keys(zustData).length > 0) {
      let { categories } = zustData;
      setDocuments(categories[params.category]);
    }
  }, [zustData]);
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

        {Object.keys(documents).length > 0 &&
          Object.keys(documents.documents).map((key, index) => (
            <>
              <div className={styles.documentContainer} key={key}>
                <p>{key}</p>
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
              {Object.keys(documents.documents).length !== index + 1 && (
                <div className={styles.horizontalLine}>
                  <span className={styles.horizontalLineText}>or</span>
                </div>
              )}
            </>
          ))}
        <Button
          cssClass="skipButton"
          onSubmit={() => router.push("/")}
          label="Skip for later"
        />
      </div>
    </section>
  );
}

export default Category;
