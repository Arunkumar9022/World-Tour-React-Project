import React, { useState } from "react";
import Categories from "./Categories";

function Category() {
  const [data, setData] = useState(Categories);

  const filterResult = (cartitem) => {
    const result = Categories.filter((catdata) => {
      return catdata.category === cartitem;
    });
    setData(result)
  };
  return (
    <>
      <h1 className="text-center text-warning">Amazon E-commerce</h1>
      <div className="container-fluid mt-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <button
              className="btn btn-warning w-100 mb-2"
              onClick={() => filterResult("men's clothing")}
            >
              Laptop Bags
            </button>
            <button
              className="btn btn-warning w-100 mb-2"
              onClick={() => filterResult("men's clothing")}
            >
              T-shirt
            </button>
            <button
              className="btn btn-warning w-100 mb-2"
              onClick={() => filterResult("men's clothing")}
            >
              Jackets
            </button>
            <button
              className="btn btn-warning w-100 mb-2"
              onClick={() => filterResult("men's clothing")}
            >
              Casual dress
            </button>
            <button
              className="btn btn-warning w-100 mb-2"
              onClick={() => filterResult("jewelery")}
            >
              Jewellery
            </button>
            <button
              className="btn btn-warning w-100 mb-2"
              onClick={() => filterResult("electronics")}
            >
              Hard Drive USB
            </button>
            <button
              className="btn btn-warning w-100 mb-2"
              onClick={() => filterResult("electronics")}
            >
              SD Card
            </button>
            <button
              className="btn btn-warning w-100 mb-2"
              onClick={() => filterResult("electronics")}
            >
              TV
            </button>
          </div>
          <div className="col-md-9">
            <div className="row">
              {data &&
                data.map((values) => {
                  const {
                    id,
                    title,
                    price,
                    description,
                    Category,
                    image,
                    rating,
                  } = values;
                  return (
                    <div className="col-md-4 mb-4" key={id}>
                      <div className="card">
                        <img src={image} className="card-top" alt="images" />
                        <div className="card-body">
                          <h4 className="card-Title">{title}</h4>
                          <p>Price:{price}</p>
                          <h4>Category:{Category}</h4>
                          <h5 className="card-text">
                            Description:{description}
                          </h5>
                          <h5>Rating:{rating.rate}</h5>
                          <button className="btn btn-dark">Buy Now</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
export default Category;
