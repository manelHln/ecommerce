import { useState, useEffect } from "react";
import axios from "axios";
import {
  BestSeller,
  Header,
  Services,
  Categories,
  NewsLetter,
} from "../components";
import Latests from "../components/latests/Latests";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENV}products`)
      .then((response) => {
        if (response.status === 200) {
          setProducts(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Header />
      <Latests AllProducts={products} />
      <BestSeller AllProducts={products} />
      <Services />
      <NewsLetter />
      <Categories />
    </div>
  );
}

export default Home;
