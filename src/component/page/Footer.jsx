import React from "react";
import "../../App.css";

function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-3 mt-3">
            <h2 class="footer-logo">World Tour</h2>
            <p>Your gateway to global adventures.</p>
            <div class="social-icons">
              <a href="#">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="#">
                <i class="bi bi-instagram"></i>
              </a>
            </div>
          </div>
          <div class="col-md-3 footer-item d-flex flex-column justify-content-center">
            <h2 class="footer-heading">Company</h2>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>Tourist Travel Guide Policy</li>
            </ul>
          </div>
          <div class="col-md-3 footer-item d-flex flex-column justify-content-center">
            <h2 class="footer-heading">Best Offers</h2>
            <ul>
              <li>Australia</li>
              <li>Japan</li>
              <li>China</li>
              <li>Mauratius</li>
              <li>Austria</li>
            </ul>
          </div>
          <div class="col-md-3 footer-address">
            <h4>Contact Us</h4>
            <p>Arunkumar-pesagus World Tour Way</p>
            <p>City, Country</p>
            <p>Email: contact@worldtour.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
