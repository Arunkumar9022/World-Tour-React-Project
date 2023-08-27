import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../../index.css";
import View1 from "../../../src/assets/Images/ThanjavurTample.jpg";
import View2 from "../../../src/assets/Images/Mountain4.jpg";
import View3 from "../../../src/assets/Images/malaysia.png";
import View4 from "../../../src/assets/Images/Singapore.jpg";
import View5 from "../../../src/assets/Images/Palaceshop.png";
import View6 from "../../../src/assets/Images/Australia.jpg";

function Aboutus() {
  return (
    <div className="container">
      <Navbar />
      <div>
        <h1 className="text-info">Welcome to Great Tourism Holidays</h1>
        <p>
          GreatTourism Holidays Pvt. Ltd is a subsidiary of Sangam Group of Hotels, one of
          the biggest hotel chains in south Tamil Nadu. The Sangam Group of
          Hotels founded in 1968 has for forty years provided impeccable service
          and outstanding hospitality. It currently has 19 properties in Tamil
          Nadu. Greattourism Holidays Pvt. Ltd built on this strong foundation aims to
          provide great customer satisfaction and an exemplary holiday
          experience. Planning a once in a lifetime holiday or a yearly
          corporate retreat? No problem! GT Holidays can get you what you want
          and in the minimal time. One of the best destination management
          companies in South India, it has the experience and infrastructure to
          handle any customer demand. In addition to destination management, GT
          Holidays also plans corporate tours, incentive trips, college/school
          excursions, business travel, arranges car/railway & hotel bookings and
          much, much more. Discover what makes Great tourism Holidays and its offerings
          distinct from the rest of the pack and indispensable to its customers.
        </p>
      </div>
      <div className="d-flex justify-content-center align-item-center">
        <div className="row">
          <div class="col-lg-4 col-md-4 col-sm-6 mb-4">
            <div
              className="card shadow-lg p-0 mb-5 bg-white rounded"
              style={{ width: "18rem" }}
            >
              <img src={View1} class="card-img-top" height={300} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Thanjavur-Shivan Temple</h5>
                <p className="card-text">
                  Thanjavur Brihadeeswarar Temple, is one of the unsung world
                  wonders,Thanjavur temple height is 212 ft towering Shiva
                  temple{" "}
                </p>
                <button className="btn btn-warning rounded-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
            <div
              className="card shadow-lg p-0 mb-5 bg-white rounded"
              style={{ width: "18rem" }}
            >
              <img
                src={View2}
                height={300}
                width={250}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Mauratius</h5>
                <p className="card-text">
                  Mauritius, island country in the Indian Ocean, located off the
                  eastern coast of Africa.The Capital is port louis
                </p>
                <button className="btn btn-warning rounded-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
            <div className="card shadow" style={{ width: "18rem" }}>
              <img
                src={View3}
                height={300}
                width={250}
                class="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Malaysia</h5>
                <p className="card-text">
                  Great Place to Visit in Malaysia,Malaysia, country of
                  Southeast Asia, lying just north of the Equator
                </p>
                <button className="btn btn-warning rounded-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-item-center mt-2">
        <div className="row">
          <div class="col-lg-4 col-md-4 col-sm-6 mb-4">
            <div
              className="card shadow-lg p-0 mb-5 bg-white rounded"
              style={{ width: "18rem" }}
            >
              <img src={View4} class="card-img-top" height={300} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Singapore</h5>
                <p className="card-text">
                  Fantabulous place to visit,Singapore is famous for being a
                  global financial center,
                </p>
                <button className="btn btn-warning rounded-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
            <div
              className="card shadow-lg p-0 mb-5 bg-white rounded"
              style={{ width: "18rem" }}
            >
              <img
                src={View5}
                height={300}
                width={250}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">UK(Restaurant) Palace</h5>
                <p className="card-text">
                  An Restaurant Looks like a palace view
                </p>
                <button className="btn btn-warning rounded-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
            <div className="card shadow" style={{ width: "18rem" }}>
              <img
                src={View6}
                height={300}
                width={250}
                class="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Australia</h5>
                <p className="card-text">
                  In Australia there are world amazing 26 Beaches there
                </p>
                <button className="btn btn-warning rounded-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Aboutus;
