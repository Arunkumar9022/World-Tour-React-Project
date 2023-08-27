import React, { Component } from "react";
import Footer from "./Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css";
import Beach1 from "../../../src/assets/Images/Beach1.jpg";
import Beach2 from "../../../src/assets/Images/Beach2.jpg";
import Mountain3 from "../../../src/assets/Images/Mountain3.jpg";
import Mountain4 from "../../../src/assets/Images/Mountain4.jpg";
import Beach4 from "../../../src/assets/Images/Beach4.jpg";
import Beach5 from "../../../src/assets/Images/Beach5.jpg";
import Event1 from "../../../src/assets/Images/Event1.png";
import Anniversary from "../../../src/assets/Images/Anniversary.png";
import Graduation from "../../../src/assets/Images/Graduation.png";
import promotion from "../../../src/assets/Images/promotion.jpg";
import Babyshowers from "../../../src/assets/Images/Babyshowers.jpg";
import Parentsday from "../../../src/assets/Images/parentsday.png";
import Farewellss from "../../../src/assets/Images/Farewellss.jpg";
import Valentines from "../../../src/assets/Images/Valentines.jpg";
import Star from "../../../src/assets/Images/Star.jpg";
import Cafe1 from "../../../src/assets/Images/Cafe1.png";
import Cafe2 from "../../../src/assets/Images/Cafe2.png";
import IceCoffeeShop from "../../../src/assets/Images/IceCoffeeShop.jpg";
import Palaceshop from "../../../src/assets/Images/Palaceshop.png";
import Cafe from "../../../src/assets/Images/Cafe.jpg";
import CoffeeCafe from "../../../src/assets/Images/CoffeeCafe.jpg";
import Vacation from "../../../src/assets/Images/Vacation.png";
import Vacation1 from "../../../src/assets/Images/Vacation1.jpg";
import Vacation2 from "../../../src/assets/Images/Vacation2.jpg";
import Vacation3 from "../../../src/assets/Images/Vacation3.jpg";
import Himalayas from "../../../src/assets/Images/Himalayas.jpg";
import Malaysia from "../../../src/assets/Images/Malaysia.jpg";
import LondonWinter from "../../../src/assets/Images/LondonWinter.jpg";
import NewYork from "../../../src/assets/Images/NewYork.jpg";
import Italy from "../../../src/assets/Images/Italy.jpg";
import Spain from "../../../src/assets/Images/Spain.jpg";
import Thailand from "../../../src/assets/Images/Thailand.jpg";
import Tajmahal from "../../../src/assets/Images/Tajmahal.jpg";
import England from "../../../src/assets/Images/England.jpg";
import France from "../../../src/assets/Images/France.jpg";
import Australia from "../../../src/assets/Images/Australia.jpg";
import Singapore from "../../../src/assets/Images/Singapore.jpg";
import malaysia from "../../../src/assets/Images/malaysia.png";
import Elephantherd from "../../../src/assets/Images/Elephantherd.jpg";
import Elephants from "../../../src/assets/Images/Elephants.jpg";
import Elephant from "../../../src/assets/Images/Elephant.jpg";
import Lionherd from "../../../src/assets/Images/Lion.png";
import Lion from "../../../src/assets/Images/Lion.png";

import Navbar from "./Navbar";

function Home() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitalSlide: 0,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        },
      },
    ],
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          autoplay: true,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="contaniner">
        <div>
          <Navbar />
        </div>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Himalayas} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Singapore} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Elephantherd} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Elephants} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Elephant} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={malaysia} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Lionherd} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Lion} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        {/* <div class="py-2 mt-2">
        <div class="row">
          <div class="col-md-5 mx-auto">
            <div class="input-group">
              <input
                class="form-control border-end-0 border rounded-pill"
                type="search"
                value="search"
                id="example-search-input" />
              <span class="input-group-append">
                <button
                  class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5"
                  type="button"
                >
                  <i class="fa fa-search"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
  </div>*/}
        <div className="mt-2">
          <Slider className="img-fluid" {...settings}>
            <div className="card">
              <img
                src={Himalayas}
                alt="Himalayas view"
                height={300}
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="card">
              <img
                src={Beach1}
                alt="Beach1"
                height={300}
                className="ms-2"
                style={{ borderRadius: "px" }}
              />
            </div>
            <div className="card">
              <img
                src={Malaysia}
                alt="Malaysia"
                height={300}
                className="ms-2"
                style={{ borderRadius: "px" }}
              />
            </div>
            <div className="card">
              <img
                src={LondonWinter}
                alt="London in Winter season"
                height={300}
                className="ms-2"
                style={{ borderRadius: "px" }}
              />
            </div>
            <div className="card">
              <img
                src={NewYork}
                alt="NewYork"
                height={300}
                className="ms-2"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="card">
              <img
                src={Beach5}
                alt="Beach5"
                height={300}
                className="ms-2"
                style={{ borderRadius: "5px" }}
              />
            </div>
          </Slider>
        </div>
        <div className="mt-5">
          <h2 className="text-center mb-5">
            Hi Buddy, What's your Vacation Plan
          </h2>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-3 mb-3 d-flex flex-column align-items-center text-center">
              <img
                src={Event1}
                alt="Birthday Celebration"
                height={290}
                width={320}
                className="img-fluid"
                style={{ borderRadius: "2px" }}
              />
              <p className="mt-2">Birthday Celebration</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3 d-flex flex-column align-items-center text-center">
              <img
                src={Graduation}
                alt="Graduation"
                height={190}
                width={220}
                className="img-fluid"
                style={{ borderRadius: "px" }}
              />
              <p className="mt-2">Graduation</p>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-3 d-flex flex-column align-items-center text-center">
              <img
                src={promotion}
                alt="Promotion"
                height={170}
                width={200}
                className="img-fluid"
                style={{ borderRadius: "px" }}
              />
              <p className="mt-2">Promotion</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3 d-flex flex-column align-items-center text-center">
              <img
                src={Anniversary}
                alt="Happy Anniversary"
                height={150}
                width={290}
                className="img-fluid"
                style={{ borderRadius: "px" }}
              />
              <p className="mt-2">Anniversary Celebration</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-3 mb-3">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src={Babyshowers}
                  alt="Beach2"
                  height={140}
                  width={250}
                  className="img-fluid"
                  style={{ borderRadius: "px", marginLeft: "40px" }}
                />
                <p className="mt-2">Baby Shower</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src={Parentsday}
                  alt="Beach2"
                  height={290}
                  width={310}
                  className="img-fluid"
                  style={{ borderRadius: "px" }}
                />
                <p className="mt-2">Happy Parent's day</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src={Valentines}
                  alt="Valentines image"
                  height={190}
                  width={230}
                  className="img-fluid"
                  style={{ borderRadius: "px" }}
                />
                <p className="mt-2">Valentines Day</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src={Farewellss}
                  alt="Beach2"
                  height={240}
                  width={170}
                  className="img-fluid"
                  style={{ borderRadius: "px" }}
                />
                <p className="mt-2">Farewell Celebration</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 mb-4">
          <div className="text-center">
            <h2>
              <img src={Star} height={50} alt="Star" />
              <strong> Most Popular Venue</strong>
              <img src={Star} height={50} alt="Star" />
            </h2>
          </div>
        </div>

        <div className="d-flex justify-content-center align-item-center">
          <div className="row">
            <div class="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div className="card shadow-lg" style={{ width: "18rem" }}>
                <img src={CoffeeCafe} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    New Astounishing Restaurant
                  </h5>
                  <p className="card-text text-center text-sm-start">
                    When you visit Prague, you’ll find there are many coffee
                    shops. Municipal House is one of the best coffee shops in
                    the world because of the beautiful art nouveau architecture
                    and interior design. Artists, musicians, and poets
                    frequented this spot in the 1900s. Arguably serving some of
                    the best coffee in Prague Old Town.
                  </p>
                  <button className="btn btn-warning rounded-4 d-block mx-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div className="card shadow-lg" style={{ width: "18rem" }}>
                <img
                  src={Cafe2}
                  height={300}
                  width={250}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center"> Dome Cafe</h5>
                  <p className="card-text text-center text-sm-start">
                    The Dome Cafe is a F&B-Casual Dining outlet that offers a
                    wide variety of delicious food and drinks. It is a great
                    place to hang out with friends and family, and enjoy a
                    relaxed atmosphere. The cafe has a modern and stylish
                    interior, with comfortable seating and a friendly staff. The
                    menu features a variety of dishes
                  </p>
                  <button className="btn btn-warning rounded-4 d-block mx-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div className="card shadow-lg" style={{ width: "18rem" }}>
                <img
                  src={IceCoffeeShop}
                  height={300}
                  width={250}
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">ICED COFFEE - NHA TRANG</h5>
                  <p className="card-text text-center text-sm-start">
                    To make iced coffee with hot coffee, you simply need to mix
                    it with cold milk, add ice cubes and a sweetener of your
                    choice, like vanilla syrup, sugar, or even maple syrup.
                    Sometimes, iced coffee gets confused with its cool cousin:
                    cold brew coffee. However, they’re actually very different,
                    Frappuccino is a type of cold coffee.
                  </p>
                  <button className="btn btn-warning rounded-4 d-block mx-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div className="card shadow-lg" style={{ width: "18rem" }}>
                <img
                  src={Palaceshop}
                  class="card-img-top"
                  height={300}
                  width={250}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    The Allure of Viennese Coffee Culture
                  </h5>
                  <p className="card-text text-center text-sm-start">
                    Vienna, Austria, has raised the beverage to an art form and
                    made drinking it a way of life. Customers can spend entire
                    days in a delightful atmosphere by purchasing a single cup
                    of coffee Georg Franz Kolschitzky (1640 - 1694) was the
                    first to get a licence to serve coffee in the city(Veinna)
                  </p>
                  <button className="btn btn-warning rounded-4 d-block mx-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center mb-3">
            <h2>Best Tourist Places to Visit</h2>
            <span>Explore our exclusive vacation plans</span>
          </div>
        </div>

        <div className="d-flex justify-content-center align-item-center">
          <div className="row">
            <div class="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div
                className="card shadow-lg p-0 mb-5 bg-white rounded"
                style={{ width: "18rem" }}
              >
                <img
                  src={Vacation2}
                  class="card-img-top"
                  height={300}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Mountain Scenario</h5>
                  <p className="card-text text-center">
                    Best Place to Visit in Monsoon Season
                  </p>
                  <button className="btn btn-warning rounded-4 d-block mx-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div
                className="card shadow-lg p-0 mb-5 bg-white rounded"
                style={{ width: "18rem" }}
              >
                <img
                  src={Vacation}
                  height={300}
                  width={250}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    American Falls View
                  </h5>
                  <p className="card-text text-center">
                    Awesome place to visit during winter season
                  </p>
                  <button className="btn btn-warning rounded-4 d-block mx-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div className="card shadow" style={{ width: "18rem" }}>
                <img
                  src={Vacation1}
                  height={300}
                  width={250}
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Kuttralam-Five Falls
                  </h5>
                  <p className="card-text text-center">
                    Five Falls one of the Amazing falls in Kuttralam
                  </p>
                  <button className="btn btn-warning rounded-4 d-block mx-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div className="card shadow-lg" style={{ width: "18rem" }}>
                <img
                  src={Vacation3}
                  class="card-img-top"
                  height={300}
                  width={250}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">UK-Tower Bridge</h5>
                  <p className="card-text text-center">
                    Uk Tower Bridge one of the Ancient Strongest bridge
                  </p>
                  <button className="btn btn-warning rounded-4 d-block mx-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center mb-3">
            <h2 class="text-center">Special Package Offer</h2>
            <span class="text-center">
              Exclusive special offers are available for this package. Buy this
              offer and enjoy your vacation.
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-center align-item-center">
          <div className="row">
            <div class="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div
                className="card shadow-lg p-0 mb-5 bg-white rounded"
                style={{ width: "18rem" }}
              >
                <img src={Italy} class="card-img-top" height={330} alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">Spain</h5>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <h5 className="text-success">Italy</h5>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <h5 className="text-danger">$4999</h5>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <p>6Days&7Nights</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <p>Lodging</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <p>BestTransportation</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <p>Food Faclities</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 test-end">
                      <p>19544 Review</p>
                    </div>
                  </div>
                  <button className="btn btn-warning rounded-4 d-block mx-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div
                className="card shadow-lg p-0 mb-5 bg-white rounded"
                style={{ width: "18rem" }}
              >
                <img
                  src={Spain}
                  height={330}
                  width={250}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Malaysia-KulaLampur
                  </h5>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <h5 className="text-success">Malaysia</h5>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <h5 className="text-danger">$7999</h5>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <p>6Days&7Nights</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <p>Lodging</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <p>BestTransportation</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <p>Food Faclities</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 test-end">
                      <p>19544 Review</p>
                    </div>
                  </div>
                  <button className="btn btn-warning rounded-4 d-block mx-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div className="card shadow" style={{ width: "18rem" }}>
                <img
                  src={Thailand}
                  height={330}
                  width={250}
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Thailand</h5>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <h5 className="text-success">Thailand</h5>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <h5 className="text-danger">$2999</h5>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <p>2Days&3Nights</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <p>Lodging</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <p>BestTransportation</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <p>Food Faclities</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 test-end">
                      <p>5444 Review</p>
                    </div>
                  </div>
                  <button className="btn btn-warning rounded-4 d-block mx-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div className="card shadow" style={{ width: "18rem" }}>
                <img
                  src={Singapore}
                  height={330}
                  width={250}
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Singapore</h5>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <h5 className="text-success">Singapore</h5>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <h5 className="text-danger">$5999</h5>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <p>4Days&5Nights</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <p>Lodging</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <p>BestTransportation</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <p>Food Faclities</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 test-end">
                      <p>19544 Review</p>
                    </div>
                  </div>
                  <button className="btn btn-warning rounded-4 d-block mx-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-item-center">
          <div className="row">
            <div class="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div
                className="card shadow-lg p-0 mb-5 bg-white rounded"
                style={{ width: "18rem" }}
              >
                <img
                  src={Tajmahal}
                  class="card-img-top"
                  height={330}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Tajmahal(INDIA)</h5>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <h5 className="text-success">TajMahal</h5>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <h5 className="text-danger">$499</h5>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <p>1-2 days Visit</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <p>Lodging</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <p>BestTransportation</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <p>Food Faclities</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 test-end">
                      <p>19544 Review</p>
                    </div>
                  </div>
                  <button className="btn btn-warning rounded-4 d-block mx-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div
                className="card shadow-lg p-0 mb-5 bg-white rounded"
                style={{ width: "18rem" }}
              >
                <img
                  src={England}
                  height={330}
                  width={250}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">England(UK)</h5>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <h5 className="text-success">UK-England</h5>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <h5 className="text-danger">$7999</h5>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <p>6Days&7Nights</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <p>Lodging</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <p>BestTransportation</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <p>Food Faclities</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 test-end">
                      <p>19544 Review</p>
                    </div>
                  </div>
                  <button className="btn btn-warning rounded-4 d-block mx-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div className="card shadow" style={{ width: "18rem" }}>
                <img
                  src={France}
                  height={330}
                  width={250}
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">France</h5>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <h5 className="text-success">France</h5>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <h5 className="text-danger">$2999</h5>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <p>2Days&3Nights</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <p>Lodging</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <p>BestTransportation</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <p>Food Faclities</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 test-end">
                      <p>5444 Review</p>
                    </div>
                  </div>
                  <button className="btn btn-warning rounded-4 d-block mx-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div className="card shadow" style={{ width: "18rem" }}>
                <img
                  src={Australia}
                  height={330}
                  width={250}
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Australia</h5>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <h5 className="text-success">Australia</h5>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <h5 className="text-danger">$5999</h5>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <p>5Days&7Nights</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <p>Lodging</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <p>BestTransportation</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                      <p>Food Faclities</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-start">
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                      <i class="fas fa-star gold-star"></i>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 test-end">
                      <p>12444 Review</p>
                    </div>
                  </div>
                  <button className="btn btn-warning rounded-4 d-block mx-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
