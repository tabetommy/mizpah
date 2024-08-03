import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";

function Header() {
  const isNotDesktop = useMediaQuery({
    query: "(max-width: 992px)",
  });

  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {isNotDesktop && (
        <Menu isOpen={isOpen}>
          <a className="menu-item" href="/">
            Home
          </a>
          <a className="menu-item" href="/about-us">
            About us
          </a>
          <a className="menu-item" href="/what-we-do">
            What we do
          </a>
          <a className="menu-item" href="/products">
            Products
          </a>
          <a className="menu-item" href="/services">
            Services
          </a>

          <a className="menu-item" href="/contact-us">
            Contact us
          </a>
        </Menu>
      )}

      <div
        className="w-100 h-100"
        style={{
          background: "#636363",
          color: "white",
        }}
      >
        <div className="container py-3">
          <div className="d-flex align-items-center">
            <span class="material-symbols-outlined me-2">mail</span>{" "}
            info@mizpahgh.com
          </div>
        </div>
      </div>
      <div style={{ boxShadow: "0px 8px 24px 0px rgb(0 0 0 / 8%)" }}>
        <div className="container py-2 d-flex justify-items-between">
          <div>
            <img src={Logo} style={{ height: 90 }} />
          </div>
          <ul className="menu d-none d-lg-flex">
            <div class="vr"></div>
            <li>
              <a
                href="/"
                className={window.location.pathname == "/" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <div class="vr"></div>
            <li>
              <a
                href="about-us"
                className={
                  window.location.href.includes("about-us") ? "active" : ""
                }
              >
                About us
              </a>
            </li>
            <div class="vr"></div>
            <li>
              <a
                href="what-we-do"
                className={
                  window.location.href.includes("what-we-do") ? "active" : ""
                }
              >
                What we do
              </a>
            </li>
            <div class="vr"></div>
            <li>
              <a
                href="products"
                className={
                  window.location.href.includes("products") ? "active" : ""
                }
              >
                Products
              </a>
            </li>

            <div class="vr"></div>
            <li>
              <a
                href="services"
                className={
                  window.location.href.includes("services") ? "active" : ""
                }
              >
                Services
              </a>
            </li>

            <div class="vr"></div>
            <li>
              <a
                href="contact-us"
                className={
                  window.location.href.includes("contact-us") ? "active" : ""
                }
              >
                Contact us
              </a>
            </li>
            <div class="vr"></div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
