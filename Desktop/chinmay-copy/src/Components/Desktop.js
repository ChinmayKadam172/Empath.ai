import Navbar from "./Navbar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	body: {
		backgroundColor: "#D7F3FF",
		height: "100vh",
	},
}));

export default function Desktop() {
	const styles = useStyles();
	return (
			<Navbar />
	);
}
