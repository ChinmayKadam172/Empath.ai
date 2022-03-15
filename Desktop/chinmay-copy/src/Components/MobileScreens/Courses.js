import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const rows = [];

const columns = [
  {
    field: "CURRENT_INSTITUTE_NAME",
    headerName: "Institute Name",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "INSTI_STATE",
    headerName: "State",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "INSTITUTE_DISTRICT",
    headerName: "District",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "INST_TYPE",
    headerName: "Type",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "AFFILIATING_UNIVERSITY",
    headerName: "Affiliating University",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "PROGRAMME",
    headerName: "Program",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "LEVEL_OF_COURSE",
    headerName: "Level",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "COURSE",
    headerName: "Course",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
];

const divstyle = {
  height: "400px",
  width: "90%",
  margin: "10px auto 0 auto",
};

const boxstyle = {
  height: 300,
  width: 1,
  backgroundColor: "#fcedda",
  "& .super-app-theme--header": {
    backgroundColor: "#29B888",
  },
};

export default function Courses() {
  return (
    <div style={{ ...divstyle }}>
      <Box sx={{ ...boxstyle }}>
        <DataGrid sx={{}} rows={rows} columns={columns} />
      </Box>
    </div>
  );
}
