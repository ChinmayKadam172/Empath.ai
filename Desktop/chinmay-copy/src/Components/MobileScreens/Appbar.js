import { makeStyles } from "@mui/styles";
import aicteHeader from "../../assets/aicte-logo.png";

const useStyles = makeStyles((theme) => ({
  navbar: {
    padding: "10px",
    paddingRight: "0px",
    paddingLeft: "10px",
    width: "97vw",
    backgroundColor: 'rgba(101, 210, 228, 0.5);',
    display: "flex",
    alignItems: "center",
    fontFamily: ["Poppins", "serif"].join(","),
    fontWeight: "500",
    justifyContent: "center",
    height:"7vh",
    fontSize:"20px",
    marginBottom:"5px",
  },
  logo: {
      width:"500px",
  },
}));

export default function Appbar({name}) {
  const styles = useStyles();
  return (
    <div className={styles.navbar}>
      {name?<span>{name}</span> : <img src={aicteHeader} style={{width:"260px"}}
        className={styles.logo}
      />}
    </div>
  );
}
