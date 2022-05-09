import React, { useEffect, useState } from "react";

const UseProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://intense-meadow-16226.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 6)));
  }, []);
  return [products, setProducts];
};

export default UseProducts;
