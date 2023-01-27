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
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
            <Button sx={{ fontSize: "15px" }} onClick={drawerOpen}>
              Add Code
            </Button>

            <Divider sx={{ my: 0.5 }} />
            <Typography sx={{ p: 2, marginTop: "-10px", fontSize: "15px" }}>
              Export to PDF
            </Typography>
            <Typography sx={{ p: 2, marginTop: "-20px", fontSize: "15px" }}>
              Export to Excel
            </Typography>
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
              <Select size="small" placeholder="Please Select..." width="100">
                <MenuItem>Please Select...</MenuItem>
                <MenuItem>Redeemables</MenuItem>
                <MenuItem>Percentage</MenuItem>
              </Select>
              {/* <CheckBox>efe</CheckBox> */}
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
