import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const useStyles = makeStyles({
  nav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default function MobileNav() {
  const styles = useStyles();
  const [value, setValue] = useState("Tab");
  return (
    <>
      <BottomNavigation
        className={styles.nav}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Dashboard"
          icon={<LineAxisIcon />}
          LinkComponent={Link}
          to={"/dashboard"}
        />
        <BottomNavigationAction
          label="Institutes"
          icon={<SchoolIcon />}
          LinkComponent={Link}
          to={"/institutes"}
        />
        <BottomNavigationAction
          label="Courses"
          icon={<MenuBookIcon />}
          LinkComponent={Link}
          to={"/courses"}
        />
        <BottomNavigationAction
          label="Approval"
          icon={<AssignmentTurnedInIcon />}
          LinkComponent={Link}
          to={"/approval"}
        />
      </BottomNavigation>
    </>
  );
}
