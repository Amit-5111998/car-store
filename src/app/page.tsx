import Image from "next/image";
import styles from "./page.module.scss";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

import { ApiResponse } from "@/api/api";

type HomeProps = {
  data: ApiResponse | null;
};

const Home: NextPage<HomeProps> = ({ data }) => {
  console.log("check data--------->", data); 
  
  return (
    <main className={styles.main}>
      <div className={styles.jumbotron}></div>
      <div className={styles.card}>
        <Image
          src={
            "https://collectiq-evox-images-qa.s3.us-west-2.amazonaws.com/Honda/Accord/2014/side-1683708138.png"
          }
          width={384}
          height={288}
          alt="car"
        />
        <h1>Help DriveTime finalize your application.</h1>
        <p>
          Tap or click the cards below to verify the information needed by
          DriveTime.
        </p>
        <div className={styles.category}>
          <div className={styles.childCard}>
            <h1>Identity</h1>
            <span>New</span>
          </div>
          <div className={styles.childCard}>
            <h1>Identity</h1>
            <span>New</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const res = await fetch(
      "https://6ca13a92-b734-44be-a3de-9e047346479a.mock.pstmn.io/applicant"
    );
    const data: ApiResponse | null = await res.json();
    console.log("data.....",data);

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching API data:", error);
    return {
      props: {
        data: null, // or provide a default value/error handling
      },
    };
  }
};

export default Home;
