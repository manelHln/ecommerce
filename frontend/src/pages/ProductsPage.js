import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
// @mui
import { Container, Stack, Button, Typography } from "@mui/material";
// components
import { ProductList } from "../sections/@dashboard/products";
import { BasicModal, AddProductForm } from "../components";

import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  // const [openFilter, setOpenFilter] = useState(false);

  // const handleOpenFilter = () => {
  //   setOpenFilter(true);
  // };

  // const handleCloseFilter = () => {
  //   setOpenFilter(false);
  // };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENV}products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title> Dashboard: Products | Minimal UI </title>
      </Helmet>

      <Container>
        <BasicModal
          open={openModal}
          handleClose={()=>setOpenModal(false)}
          renderBody={() => <AddProductForm setShow={setOpenModal} />}
          renderHeader={()=> <Typography>Add a new Product</Typography>}
          title={"Add a new Product"}
          fullWidth
          maxWidth={"sm"}
        />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Products
          </Typography>
          <Button
            variant="contained"
            startIcon={<AiOutlinePlus />}
            onClick={() => setOpenModal(true)}
          >
            New Product
          </Button>
        </Stack>
        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack> */}

        <ProductList products={products} />
        {/* <ProductCartWidget /> */}
      </Container>
    </>
  );
}
