/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import {
  BlogDropdownMenus,
  ContactDropdownMenus,
  DemoDropdownMenus,
  ElementsMegaMenu,
  PagesDropdownMenus,
} from "../navbar/menu-data";
import NavItem from "../navbar/nav-item";
import Navbar from "../navbar/navbar";
import useScroll from "./../../../hooks/useScroll";

export default function HeaderHomeThree() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scroll = useScroll();
  return (
    <header
      className={`site-header site-header--menu-right BL--header-section BL--header-three ${
        scroll ? "sticky-menu" : ""
      }`}
      id="sticky-menu"
    >
      <div className="container-fluid">
        <nav className="navbar site-navbar">
          <div className="brand-logo cursor-scale small">
            <a href="/">
              <img
                src="/images/logo/Logo.png"
                alt="logo"
                className="light-version-logo"
              />
            </a>
          </div>
          <div className="menu-block-wrapper">
            <div
              className={`menu-overlay ${isMobileMenuOpen ? "active" : null}`}
              onClick={handleCloseMobileMenu}
            ></div>
            <nav
              className={`menu-block ${isMobileMenuOpen ? "active" : null}`}
              id="append-menu-header"
            >
              <div className="mobile-menu-head">
                <div
                  className="mobile-menu-close"
                  onClick={handleCloseMobileMenu}
                >
                  &times;
                </div>
              </div>

              <Navbar>
                <NavItem
                  navItemText="Organizations"
                  pathSite="/Organizations"
                />
                <NavItem navItemText="Musicians" pathSite="/Musicians" />
                {/* <NavItem navItemText="Investors"  pathSite="/Investors" />
									<NavItem navItemText="Creatives" pathSite="/Creatives" /> */}
              </Navbar>
            </nav>
          </div>
          <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            <a className="BL--btn BL--menu-btn1" href="/">
              Request Demo
            </a>
          </div>
          <div
            className="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
