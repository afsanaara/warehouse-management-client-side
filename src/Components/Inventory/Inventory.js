import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Spinner from "../Spinner/Spinner";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(products);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch("https://intense-meadow-16226.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.slice(0, 6), setIsLoading(false));
      });
  }, []);
  const navigateToInventories = () => {
    navigate("/manageitems");
  };

  const handleStock = (id) => {
    console.log(id);
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-center text-black">
        Collection Of <span className="text-warning fw-bold">Foods</span>{" "}
      </h1>
      <div className="row mt-5">
        {isLoading ? (
          <Spinner></Spinner>
        ) : (
          products.map((product) => (
            <div className="container  gy-5 col-md--12 col-md-6 col-lg-4  text-center">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={product.image} alt="" />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="fw-bold">${product.price}</p>
                  <h5 className="card-title">Quantity : {product.quantity}</h5>
                  <h5 className="card-title">Supplier : {product.supplier}</h5>
                  <p className="card-text">{product.description}</p>
                  <button
                    onClick={() => handleStock(product._id)}
                    className="btn btn-danger"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
        <button
          onClick={navigateToInventories}
          className="btn btn-success text-center w-25 mx-auto mt-5"
        >
          Manage Inventory
        </button>
      </div>
    </div>
  );
};

export default Inventory;
