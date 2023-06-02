import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/system";
import { Grid, Typography, Divider } from "@mui/material";
import { Category } from "../../templates";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENV}categories`)
      .then((response) => {
        if (response.status === 200) {
          setCategories(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container maxWidth="lg" spacing={5}>
      <Typography
        variant="h3"
        my={5}
        style={{ fontFamily: "var(--logo-font)" }}
      >
        <Divider textAlign="left" className="section-titles">
          Categories
        </Divider>
      </Typography>
      <Grid container spacing={5} mb={5}>
        {categories.map((cat, index) => (
          <Grid key={`${cat.name}-${index}`} item xs={12} sm={6} lg={3} mb={3}>
            <Category category={cat} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
