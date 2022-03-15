import AppBar from "./Appbar";
import { makeStyles } from "@mui/styles";
import MainImage from "../../assets/MainImage.png";
import aictelogo from "../../assets/Logo-circle.png";
import metaLogo from "../../assets/Meta.png";
import instaLogo from "../../assets/Insta.png";
import twitterLogo from "../../assets/Twitter.png";

const useStyles = makeStyles({
  sectionTitle: {
    color: "#1397AD",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontWeight: "500",
    fontSize: "30px",
    display: "flex",
    justifyContent: "center",
    paddingTop: "22px",
    paddingBottom: "22px",
  },
  aboutSection: {
    padding: "10px",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    marginBottom: "20px",
    textAlign: "center",
  },
  contactSection: {
    width: "100vw",
    height: "250px",
    background:
      "linear-gradient(360deg, rgba(29, 192, 220, 0.38) 0%, rgba(126, 232, 250, 0) 98.42%, rgba(126, 232, 250, 0.1064))",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: "30px",
    color: "#1397AD",
    display: "flex",
    justifyContent: "center",
  },
  footerSection: {
    backgroundColor: "#65D2E4",
    width: "100px",
    height: "100px",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: "10px",
    textAlign: "center",
  },
  logos: {
    paddingTop: "20px",
    paddingRight: "20px",
    paddingLeft: "10px",
    marginTop: "10px",
  },
});

export default function Home() {
  const styles = useStyles();
  return (
    <>
      <AppBar />
      <img style={{ width: "100vw", height: "300px" }} src={MainImage} />
      <span className={styles.sectionTitle}>About Us</span>
      <img
        style={{
          width: "150px",
          height: "150px",
          display: "flex",
          justifyContent: "center",
          margin: "auto",
        }}
        src={aictelogo}
      />
      <span className={styles.sectionTitle}>AICTE</span>
      <p className={styles.aboutSection}>
        The beginning of formal technical education in India can be dated back
        to the mid-19th century. Major policy initiatives in the
        pre-independence period included the appointment of the Indian
        Universities Commission in 1902, issue of the Indian Education Policy
        Resolution in 1904, and the Governor General’s policy statement of 1913
        stressing the importance of technical education, the establishment of
        IISc in Bangalore, Institute for Sugar, Textile & Leather Technology in
        Kanpur, N.C.E. in Bengal in 1905, and industrial schools in several
        provinces.
      </p>
      <p
        style={{
          fontFamily: ["Montserrat", "sans-serif"].join(","),
          fontSize: "30px",
          color: "#1397AD",
          textAlign: "center",
          fontWeight: "500",
        }}
      >
        Contact Us
      </p>
      <div className={styles.contactSection}>
        <span className={styles.logos}>
          <a href="https://www.facebook.com/OfficialAICTE/">
            <img
              style={{ height: "75px", paddingLeft: "10px" }}
              src={metaLogo}
            />
          </a>
        </span>
        <span className={styles.logos}>
          <a href="https://www.instagram.com/eduminofindia/?hl=en">
            <img style={{ height: "75px" }} src={instaLogo} />
          </a>
        </span>
        <span className={styles.logos}>
          <a href="https://twitter.com/AICTE_INDIA?s=20&t=oyCkLNqRMXkK8ETGiskP4A">
            <img style={{ height: "75px" }} src={twitterLogo} />
          </a>
        </span>
      </div>
    </>
  );
}
