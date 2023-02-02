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
  TextField,
  Grid,
} from "@mui/material";
import { useForm } from "react-hook-form";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

export const MainUi = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data) => {
    const couponData = { ...coupon, id: couponArray?.length + 1 };

    console.log("coupon", data);
    setcouponArray([...couponArray, { ...data, id: couponArray?.length + 1 }]);
    setIsDrawerOpen(false);
    setcoupon({
      discounttype: "",
      startdate: "",
      expirydate: "",
      pakage: "",
      couponcode: "",
      quantity: "",
      discount: "",
    });
  };
  const [startdatevalue, setStartdateValue] = useState(null);
  const [expirydatevalue, setExpirydateValue] = useState(null);

  const [couponArray, setcouponArray] = useState([
    {
      id: 0,
      couponcode: 310,
      discounttype: "Redeemables",
      pakage: "Basic",
      discount: 20,
      quantity: 2,
      startdate: "05/12/2022",
      expirydate: "06/12/2022",
    },
  ]);
  const [coupon, setcoupon] = useState({
    discounttype: "",
    startdate: "",
    expirydate: "",
    pakage: "",
    couponcode: "",
    quantity: "",
    discount: "",
    id: couponArray.length + 1,
  });

  const CustomStatusCell = () => {
    return (
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} />
      </FormGroup>
    );
  };
  const CustomActionCell = (props) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const drawerOpen = () => {
      setEditData(props.row);
      setIsDrawerOpen(true);
    };

    const [editData, setEditData] = useState([]);

    const onChangeEdit = (e) => {
      setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    const handleEdit = (data) => {
      let currentIndex = couponArray.findIndex((e) => e.id === data.id);

      if (currentIndex > -1) {
        let newArr = [...couponArray];

        newArr[currentIndex] = data;
        setcouponArray(newArr);
      }
      setIsDrawerOpen(false);
    };

    return (
      <>
        <div>
          <BorderColorOutlinedIcon
            sx={{ fontSize: 20 }}
            onClick={drawerOpen}
          ></BorderColorOutlinedIcon>

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
                Edit Coupon Code
              </Typography>
              <Divider sx={{ my: 1.5 }} />
              <form>
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
                  name="discounttype"
                  value={editData.discounttype}
                  onChange={onChangeEdit}
                >
                  <option className="option-style">Please select...</option>
                  <option value="Redeemables">Redeemables</option>
                  <option value="Percentage">Percentage</option>
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
                        name="startdate"
                        value={editData.startdate}
                        onChange={(newValue) => {
                          setEditData({
                            ...editData,
                            startdate: newValue.$d.toLocaleDateString(),
                          });
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
                        name="expirydate"
                        value={editData.expirydate}
                        onChange={(newValue) => {
                          setEditData({
                            ...editData,
                            expirydate: newValue.$d.toLocaleDateString(),
                          });
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
                      name="pakage"
                      value={editData.pakage}
                      onChange={onChangeEdit}
                    >
                      <option className="option-style">Please select...</option>
                      <option>Basic</option>
                      <option>Premium</option>
                    </select>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      style={{
                        width: "350px",
                        borderColor: "rgba(0,0,0,.08)",
                      }}
                      size="small"
                      placeholder="Enter Code"
                      value={editData.couponcode}
                      name="couponcode"
                      onChange={onChangeEdit}
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
                      value={editData.quantity}
                      style={{ width: "330px" }}
                      size="small"
                      onChange={onChangeEdit}
                      name="quantity"
                      placeholder="Enter Quantity"
                      // helperText="How many time the code can be used."
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      value={editData.discount}
                      style={{ width: "350px" }}
                      size="small"
                      onChange={onChangeEdit}
                      name="discount"
                      placeholder="Discount"
                      // helperText="Choose a discount for the code"
                    ></TextField>
                  </Grid>
                </Grid>

                <Divider sx={{ marginTop: "8em" }} />
                <div className="button-style">
                  <Button
                    sx={{ color: "black" }}
                    variant="outlined"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Close
                  </Button>
                  <Button
                    sx={{ marginLeft: "5px" }}
                    variant="contained"
                    color="secondary"
                    onClick={() => handleEdit(editData)}
                  >
                    Update
                  </Button>
                </div>
              </form>
            </Box>
          </Drawer>
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

  const onChange = (e) => {
    setcoupon({ ...coupon, [e.target.name]: e.target.value });
  };

  const saveCoupon = (newValue) => {
    setcouponArray([...couponArray, newValue]);
  };

  const handleAdd = (e) => {};
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drawerOpen = () => {
    setAnchorEl(false);
    setIsDrawerOpen(true);
    // setcoupon({});
  };
  const [anchorEl, setAnchorEl] = useState(null);

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
            <Box p={3} width="700px">
              <Typography
                sx={{ fontSize: "20px", fontWeight: "bold" }}
                variant="h5"
              >
                Add Coupon Code
              </Typography>

              <Divider sx={{ my: 1.5 }} />
              <form onSubmit={handleSubmit(onSubmit)}>
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
                  name="discounttype"
                  // value={coupon.discounttype}
                  {...register("discounttype", {
                    required: "discount type is required.",
                  })}

                  // helperText={errors.discounttype?.message}
                  // error={Boolean(errors.discounttype)}
                >
                  <option className="option-style">Please select...</option>
                  <option value="Redeemables">Redeemables</option>
                  <option value="Percentage">Percentage</option>
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
                        value={startdatevalue}
                        onChange={(newValue) => {
                          setStartdateValue(newValue.$d.toLocaleDateString());
                          setValue(
                            "startdate",
                            newValue.$d.toLocaleDateString()
                          );
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
                        value={expirydatevalue}
                        onChange={(newValue) => {
                          setExpirydateValue(newValue.$d.toLocaleDateString());
                          setValue(
                            "expirydate",
                            newValue.$d.toLocaleDateString()
                          );
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
                      name="pakage"
                      // value={coupon.pakage}
                      {...register("pakage", {
                        required: "package is required",
                      })}
                      helperText={errors.pakage?.message}
                    >
                      <option className="option-style">Please select...</option>
                      <option value="Basic">Basic</option>
                      <option value="Premium">Premium</option>
                    </select>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      style={{ width: "350px", borderColor: "rgba(0,0,0,.08)" }}
                      size="small"
                      placeholder="Enter Code"
                      name="couponcode"
                      {...register("couponcode", {
                        required: "Code is required.",
                      })}
                      helperText={errors.couponcode?.message}
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
                      name="quantity"
                      // value={coupon.quantity}
                      placeholder="Enter Quantity"
                      {...register("quantity", {
                        required: "quantity is required.",
                      })}
                      helperText={errors.quantity?.message}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="discount"
                      style={{ width: "350px", borderColor: "red" }}
                      size="small"
                      name="discount"
                      placeholder="Discount"
                      {...register("discount", {
                        required: "discount is required.",
                      })}
                      helperText={errors.discount?.message}
                    ></TextField>
                  </Grid>
                </Grid>

                <Divider sx={{ marginTop: "9em" }} />
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
                    type="submit"
                  >
                    Add
                  </Button>
                </div>
              </form>
            </Box>
          </Drawer>
        </span>
        <Box sx={{ height: 400, width: "100%", marginTop: "50px" }}>
          <DataGrid
            rows={couponArray}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            // checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </div>
    </>
  );
};
