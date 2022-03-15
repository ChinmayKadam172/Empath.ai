import React,{useState,useEffect} from "react";
import { DataGrid , GridToolbarContainer, GridToolbarFilterButton,} from "@mui/x-data-grid";
import Appbar from './Appbar';
import {InputLabel , TextField, Select, MenuItem} from "@mui/material";
import {makeStyles} from '@mui/styles';
import { institute_data } from "../data/institute_data";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Modalstyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90vw",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SubmitButton = {
  padding:"10px",
}

// const rows = [
// 	{ id: 1, col1: "Hello", col2: "World", col3: "afif" },
// 	{ id: 2, col1: "DataGridPro", col2: "is Awesome", col3: "afif" },
// 	{ id: 3, col1: "MUI", col2: "is Amazing", col3: "afif" },
// ]

const useStyles = makeStyles({
  filterBar:{
    width:"90%",
    margin:"auto",
    marginBottom:"5px",
    display:"flex",
  },
})

const columns = [
	{ field: "col1", headerName: "AICTE ID", width: 150 },
	{ field: "col2", headerName: "Name", width: 200 },
	{ field: "col3", headerName: "Address", width: 150 },
	{ field: "col4", headerName: "District", width: 150 },
	{ field: "col5", headerName: "Institution Type", width: 150 },
	{ field: "col6", headerName: "Women", width: 150 },
	{ field: "col7", headerName: "Minority", width: 150 },
];

export default function Institutes() {
  //modal start
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //modal end
	const [rows,setRows] = useState([]); // for filtering
  const [raw,setRaw] = useState(institute_data);  // raw array
  const [json,setJson] = useState([]); // mapped
  const [year,setYear] = useState("2021-2022");
  const [type,setType] = useState("Government");
  const [women,setWomen] = useState("N");
  const [minority,setMinority] = useState("N");
  const [searchTerm,setSearchTerm] = useState("");
  const styles = useStyles();

  useEffect(() => {
    setJson(raw.map((ele)=>{
      return {'id':ele[0],'col1':ele[0],'col2':ele[1],'col3':ele[2],'col4':ele[3],'col5':ele[4],'col6':ele[5],'col7':ele[6]};
    }))
    setRows(json);
  }, [])
  

	return (
		<div>
		<Appbar name={"Institutes"}/>
    <div className={styles.filterBar}>
    <TextField id="outlined-basic" label="Search" variant="outlined" value={searchTerm} onChange={(e)=>{
      setSearchTerm(e.target.value);
      //console.log(json);
      setRows(json.filter((val)=>{
        if(searchTerm == '')
        {
          return val;
        }
        else
        {
          if((val['col1']+" "+val['col2']+" "+val['col3']+" "+val['col4']+" "+val['col5']).toLowerCase().includes(searchTerm.toLowerCase()))
          {
            return val;
            
          }
        }
      })
  )
    }}/>
    <Button onClick={handleOpen} variant="outlined">Advanced</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Modalstyle}>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Year"
          onChange={(e)=>{
            setYear(e.target.value);
          }}
        >
          <MenuItem value={"2021-2022"}>2021-2022</MenuItem>
          <MenuItem value={"2020-2021"}>2020-2021</MenuItem>
          <MenuItem value={"2019-2020"}>2019-2020</MenuItem>
          <MenuItem value={"2018-2019"}>2018-2019</MenuItem>
          <MenuItem value={"2017-2018"}>2017-2018</MenuItem>
        </Select>
        <InputLabel id="demo-simple-select-label">Institute Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Type"
          onChange={(e)=>{
            setType(e.target.value);
          }}
        >
          <MenuItem value={"Central University"}>Central University</MenuItem>
          <MenuItem value={"Private"}>Private</MenuItem>
          <MenuItem value={"Deemed to be University(Govt)"}>Deemed to be University(Govt)</MenuItem>
          <MenuItem value={"Government"}>Government</MenuItem>
          <MenuItem value={"Govt aided"}>Govt aided</MenuItem>
        </Select>

        <InputLabel id="demo-simple-select-label">Women</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={women}
          label="Women"
          onChange={(e)=>{
            setType(e.target.value);
          }}
        >
          <MenuItem value={"Y"}>Yes</MenuItem>
          <MenuItem value={"N"}>No</MenuItem>
        </Select>
        <Button className={styles.SubmitButton} variant="contained" onClick={()=>{
          setRows(json.filter((val)=>{
            if((val['col5'] == type) && (val['col6'] == women) && (val['col7'] == minority))
            {
              return val;
            }
          }))
        }}>Search</Button>
        </Box>
      </Modal>
    </div>
		<div style={{ height: "70vh", width: "90%",margin:"auto"}}>
			{rows[0] && <DataGrid
				rows={rows}
				columns={columns}
			/>}
		</div>
		</div>
	);
}
