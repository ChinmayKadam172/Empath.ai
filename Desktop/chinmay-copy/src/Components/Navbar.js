import { makeStyles } from "@mui/styles";
import aicteHeader from "../assets/aicte-logo.png";
import MainImage from "../assets/MainImage2.png";
import circleLogo from "../assets/Logo-circle.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "350px",
    paddingTop: "15px",
    paddingLeft: "10px",
  },
  header: {
    backgroundColor: "rgba(203, 218, 255, 0.5)",
    height: "100px",
  },
  circleNav: {
    backgroundColor: "rgba(255, 255, 255, 0.41)",
    border: "5px solid #7EE8FA",
    borderRadius: "66px",
    height: "40px",
    paddingTop: "10px",
    alignItems: "center"
  },
  newNav: {
    padding: "20px",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontWeight: "400",
    fontSize: "20px",
    margin: "auto",
  },
  
}));

export default function Navbar() {
  const styles = useStyles();
  return (
    <>
      <div className={styles.header}>
        <img src={aicteHeader} className={styles.logo} />
      </div>
      <div className={styles.circleNav}>
        <span className={styles.newNav}>  Home</span>
        <span className={styles.newNav}>Institutes</span>
        <span className={styles.newNav}>Courses</span>
        <span className={styles.newNav}>Approval</span>
        <span className={styles.newNav}>NBA</span>
        <span className={styles.newNav}>Faculties</span>
        <span className={styles.newNav}>Autonomous</span>
        <span className={styles.newNav}>Closed Courses</span>
        <span className={styles.newNav}>Unapproved</span>
      </div>
      <img src={MainImage} style={{ paddingTop:"18px"}} />
      <div style={{fontFamily: ["Montserrat", "sans-serif"].join(","), color: "rgba(126, 232, 250, 0.8)", fontWeight: "400", fontSize: "60px", paddingLeft: "12px", paddingTop:"15px"}}>ABOUT US</div>
      <div>
        <span>
        <img src={circleLogo} style={{ paddingTop:"18px", paddingLeft: "12px"}} />
        </span>
        <span style={{fontFamily: ["Montserrat", "sans-serif"].join(","), fontSize: "20px"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </span>
      </div>
    </>
  );
}
