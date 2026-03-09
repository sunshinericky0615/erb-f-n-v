import { useState } from "react";
import logo from "./assets/TBC.png";

import tour1 from "./assets/tour1.jpg";
import tour2 from "./assets/tour2.jpg";
import tour3 from "./assets/tour3.jpg";
import tour4 from "./assets/tour4.jpg";
import HERO from "./components/HERO";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-flex">
          <img src={logo} alt="logo" className="logo" />
          <div className="main-menu">
            <ul className="main-menu-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#tours">Tours</a>
              </li>
            </ul>
            <ul className="main-menu-icons">
              <li>
                <a
                  href="http://www.instragram.com"
                  target="_blank"
                  className="nav-icon"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="http://www.twitter.com"
                  target="_blank"
                  className="nav-icon"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="http://www.facebook.com"
                  target="_blank"
                  className="nav-icon"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="mobile-menu">
            <div className="mobile-menu-toggle">
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className="mobile-menu-items">
              <ul className="mobile-menu-list">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#tours">Tours</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <HERO />
      <About />
      <Services />
      <section className="section tours" id="tours">
        <h2>
          featured <span>tours</span>
        </h2>
        <div className="tour-center">
          <div className="tour-card">
            <div className="tour-img-container">
              <img src={tour1} alt="" />
              <p className="tour-date">Aug 26th, 2026</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>tibet adventure</h4>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fa-solid fa-map"></i>
                  </span>{" "}
                  China
                </p>
                <p>6 days</p>
                <p>from $2100</p>
              </div>
            </div>
          </div>

          <div className="tour-card">
            <div className="tour-img-container">
              <img src={tour2} alt="" />
              <p className="tour-date">Aug 26th, 2026</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>tibet adventure</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, laboriosam saepe quibusdam aliquid inventore numquam
                qui vitae aperiam ex nemo!
              </p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fa-solid fa-map"></i>
                  </span>{" "}
                  China
                </p>
                <p>6 days</p>
                <p>from $2100</p>
              </div>
            </div>
          </div>

          <div className="tour-card">
            <div className="tour-img-container">
              <img src={tour3} alt="" />
              <p className="tour-date">Aug 26th, 2026</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>tibet adventure</h4>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fa-solid fa-map"></i>
                  </span>{" "}
                  China
                </p>
                <p>6 days</p>
                <p>from $2100</p>
              </div>
            </div>
          </div>

          <div className="tour-card">
            <div className="tour-img-container">
              <img src={tour4} alt="" />
              <p className="tour-date">Aug 26th, 2026</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>tibet adventure</h4>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i classNmae="fa-solid fa-map"></i>
                  </span>{" "}
                  China
                </p>
                <p>6 days</p>
                <p>from $2100</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="section footer">
        <ul className="footer-menu-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#tours">Tours</a>
          </li>
        </ul>
        <ul className="footer-menu-icons">
          <li>
            <a href="http://www.facebook.com" target="_blank" class="nav-icon">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="http://www.instagram.com" target="_blank" class="nav-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="http://www.twitter.com" target="_blank" class="nav-icon">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>
        <p>
          Copyright &copy; Vivienne travel tours company<span id="date"></span>
          all rights reserved
        </p>
      </footer>
    </>
  );
}
export default App;
