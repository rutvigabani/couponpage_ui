import React from "react";
import {
  Button,
  Switch,
  Typography,
  Box,
  FormGroup,
  FormControlLabel,
  Drawer,
  Popover,
  Divider,
  Select,
  MenuItem,
  TextField,
  Stack,
  Grid,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CheckBox } from "@mui/icons-material";

const CustomStatusCell = () => {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} />
    </FormGroup>
  );
};
const CustomActionCell = () => {
  return (
    <>
      <div>
        <BorderColorOutlinedIcon
          sx={{ fontSize: 20 }}
        ></BorderColorOutlinedIcon>
      </div>
      <div>
        <DeleteOutlineOutlinedIcon
          sx={{ padding: 2 }}
          color="error"
        ></DeleteOutlineOutlinedIcon>
      </div>
    </>
  );
};
const columns = [
  // { field: 'id', headerName: 'ID', width: 90 },
  {
    field: "couponcode",
    headerName: "COUPON CODE",
    type: "number",
    width: 130,
    //   editable: true,
  },
  {
    field: "discounttype",
    headerName: "DISCOUNT TYPE",
    width: 150,
    //   editable: true,
  },
  {
    field: "pakage",
    headerName: "PACKAGE",
    width: 120,
    //   width: 110,
    //   editable: true,
  },
  {
    field: "discount",
    headerName: "DISCOUNT",
    width: 120,
  },
  {
    field: "quantity",
    headerName: "QUANTITY",
    type: "number",
    width: 100,
  },
  {
    field: "startdate",
    headerName: "START DATE",
    width: 160,
  },
  {
    field: "expirydate",
    headerName: "EXPIRY DATE",
    width: 170,
  },
  {
    field: "status",
    headerName: "STATUS",
    width: 140,
    renderCell: CustomStatusCell,
  },
  {
    field: "actions",
    headerName: "ACTIONS",
    renderCell: CustomActionCell,
  },
];

const rows = [
  {
    id: 1,
    couponcode: 310,
    discounttype: "Redeemables",
    pakage: "Basic",
    discount: "percentage",
    quantity: 2,
    startdate: "05/12/2022",
    expirydate: "06/12/2022",
  },
  // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 }
];

export const MainUi = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drawerOpen = () => {
    setAnchorEl(false);
    setIsDrawerOpen(true);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <div className="main-div">
        <span className="left-span">
          <div>
            <Typography fontFamily="sans-serif" variant="h6">
              Coupon Code
            </Typography>
          </div>
        </span>
        <span className="right-span">
          <Button
            variant="outlined"
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Actions
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            // transformOrigin={{
            //     vertical: 'top',
            //     horizontal: 'right',
            //   }}
          >
            <Button
              sx={{
                fontSize: "14px",
                color: "black",
              }}
              onClick={drawerOpen}
            > 
              Add Code
            </Button>
            <Divider sx={{ my: 0.5 }} />
            <Button
              sx={{
                fontSize: "14px",
                color: "black",
              }}
            >
              Export to PDF
            </Button>
            <br />
            <Button
              sx={{
                fontSize: "14px",
                color: "black",
              }}
            >
              Export to Excel
            </Button>
            
          </Popover>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box p={3} width="700px" role="presentation">
              <Typography
                sx={{ fontSize: "20px", fontWeight: "bold" }}
                variant="h5"
              >
                Add Coupon Code
              </Typography>
              <Divider sx={{ my: 1.5 }} />
              <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
                Discount type
              </Typography>
              <select
                style={{
                  marginTop: "5px",
                  width: "50em",
                  height: "38px",
                  fontSize: "14px",
                  borderColor: "rgba(0,0,0,.08)",
                  color: "#424242",
                  borderRadius: "5px",
                }}
              >
                <option className="option-style">Please select...</option>
                <option>Redeemables</option>
                <option>Percentage</option>
              </select>
              <Grid container style={{ marginTop: "10px" }}>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
                    Start Date
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
                    Expiry Date
                  </Typography>
                </Grid>
              </Grid>
              <Grid container style={{ marginTop: "5px" }}>
                <Grid item xs={6} style={{ width: "400px" }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      PopperProps={{
                        className: "test-date",
                      }}
                      renderInput={(params) => (
                        <TextField {...params} size="small" />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6} style={{ width: "400px" }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} size="small" />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Grid container style={{ marginTop: "10px" }}>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
                    Package
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
                    Code
                  </Typography>
                </Grid>
              </Grid>
              <Grid container style={{ marginTop: "5px" }}>
                <Grid item xs={6}>
                  <select
                    style={{
                      width: "332px",
                      height: "39px",
                      fontSize: "14px",
                      borderColor: "rgba(0,0,0,.08)",
                      color: "#424242",
                      borderRadius: "5px",
                    }}
                  >
                    <option className="option-style">Please select...</option>
                    <option>Basic</option>
                  </select>
                  <p
                    style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "0.80em" }}
                  >
                    Which package to make the code available for.
                  </p>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    style={{ width: "350px", borderColor: "rgba(0,0,0,.08)" }}
                    size="small"
                    placeholder="Enter Code"
                  ></TextField>
                </Grid>
              </Grid>
              <Grid container style={{ marginTop: "10px" }}>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
                    Quantity
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
                    Discount
                  </Typography>
                </Grid>
              </Grid>
              <Grid container style={{ marginTop: "5px" }}>
                <Grid item xs={6}>
                  <TextField
                    style={{ width: "330px" }}
                    size="small"
                    placeholder="Enter Quantity"
                    helperText="How many time the code can be used."
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    style={{ width: "350px" }}
                    size="small"
                    placeholder="Discount"
                    helperText="Choose a discount for the code"
                  ></TextField>
                </Grid>
              </Grid>
              <Divider sx={{ marginTop: "10em" }} />
              <div className="button-style">
                <Button
                  sx={{ color: "black" }}
                  variant="outlined"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Close
                </Button>
                <Button
                  sx={{ marginLeft: "15px" }}
                  variant="contained"
                  color="secondary"
                >
                  Add
                </Button>
              </div>
            </Box>
          </Drawer>
        </span>
        <Box sx={{ height: 400, width: "100%", marginTop: "50px" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </div>
    </>
  );
};
