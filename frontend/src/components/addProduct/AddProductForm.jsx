import React, { useState } from "react";
import axios from "axios";
import { RiAddLine } from "react-icons/ri";
import {
  Grid,
  Button,
  TextField,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

const AddProductForm = ({setShow}) => {
  const [isLoading, setIsLoading] = useState(false)
  function handleProductSubmit(event) {
    setIsLoading(true)
    event.preventDefault();
    const formData = new FormData(event.target);
    axios
      .post(`${process.env.REACT_APP_API_ENV}products`, formData)
      .then((response) => {
        console.log(response.data);
        setIsLoading(false)
        setShow(false)
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false)
        setShow(false)
      });
  }

  return (
    <form onSubmit={handleProductSubmit}>
      <Grid container spacing={1} direction="column">
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Product Name"
            variant="outlined"
            autoComplete="off"
            name="name"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Price"
            variant="outlined"
            autoComplete="off"
            name="price"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Categories"
            variant="outlined"
            autoComplete="off"
            name="category"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            multiline
            rows={3}
            id="outlined-multiline-static"
            label="Description"
            variant="outlined"
            autoComplete="off"
            name="desc"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            type="file"
            id="outlined-basic"
            variant="outlined"
            autoComplete="off"
            name="image"
            label="Display image"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            type="file"
            id="outlined-basic"
            variant="outlined"
            autoComplete="off"
            name="gallery"
            label="Image gallery"
            inputProps={{multiple: true}}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            type="file"
            id="outlined-basic"
            variant="outlined"
            autoComplete="off"
            name="videoTutorials"
            label="Videos tutorials"
            inputProps={{multiple: true}}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <LoadingButton
            type="submit"
            variant="contained"
            fullWidth
            startIcon={<RiAddLine />}
            loading={isLoading}
          >
            Add Product
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddProductForm;
