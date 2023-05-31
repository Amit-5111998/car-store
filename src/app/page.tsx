import Image from "next/image";
import styles from "./page.module.scss";

async function getData() {
  const res = await fetch(
    "https://6ca13a92-b734-44be-a3de-9e047346479a.mock.pstmn.io/applicant"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home = async () => {
  const data = await getData();

  return (
    <main className={styles.main}>
      <div className={styles.jumbotron}></div>
      <div className={styles.card}>
        <Image
          src={data?.vehicle_info.image_url}
          className={styles.carImage}
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
          {data.categories &&
            typeof data.categories === "object" &&
            Object.entries(data.categories).map(([categoryName, category]) => (
              <div className={styles.childCard} key={categoryName}>
                <h1>{categoryName}</h1>
                <span>{category.status}</span>
              </div>
            ))}
        </div>
        <p className={styles.privacyPolicy}>
          By proceeding, I agree to DriveTime’s{" "}
          <a
            href={data?.branding?.privacy_link}
            target="_blank"
            className={styles.focusedText}
          >
            GLBA Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href={data?.branding?.terms_of_service_link}
            target="_blank"
            className={styles.focusedText}
          >
            Terms of Use.
          </a>
        </p>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.contactDetails}>
        <p>Questions? Call DriveTime</p>
        <p>{data?.branding?.phone}</p>
        <p>Your progress will be saved automatically.</p>
      </div>
    </main>
  );
};

export default Home;
