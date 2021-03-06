import React from "react"
import styled from "styled-components"

const Header = () => {
  return (
    <div>
      <NavWrapper>
        {/* <!-- ======= Header ======= --> */}
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo mr-auto">
              <a href="index.html">Restaurantly</a>
            </h1>

            {/* <a href="index.html" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}

            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#menu">Menu</a>
                </li>
                <li>
                  <a href="#specials">Specials</a>
                </li>
                <li>
                  <a href="#events">Events</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
                <li>
                  <a href="#chefs">Chefs</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li className="book-a-table text-center">
                  <a href="#book-a-table">Book a table</a>
                </li>
              </ul>
            </nav>
            {/* <!-- .nav-menu --> */}
          </div>
          <button type="button" class="mobile-nav-toggle d-lg-none">
            <i class="icofont-navigation-menu"></i>
          </button>
        </header>
        {/* <!-- End Header --> */}
      </NavWrapper>
    </div>
  )
}
export default Header

const NavWrapper = styled.div`
  #header {
    background: rgba(12, 11, 9, 0.6);
    border-bottom: 1px solid rgba(12, 11, 9, 0.6);
    transition: all 0.5s;
    z-index: 997;
    padding: 15px 0;
    top: 40px;
    background-color: #1a1814;
  }

  #header.header-scrolled {
    top: 0;
    background: rgba(0, 0, 0, 0.85);
    border-bottom: 1px solid #37332a;
  }

  #header .logo {
    font-size: 28px;
    margin: 0;
    padding: 0;
    line-height: 1;
    font-weight: 300;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
  }

  #header .logo a {
    color: #fff;
  }

  #header .logo img {
    max-height: 40px;
  }

  .nav-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .nav-menu > ul {
    display: flex;
    align-items: center;
  }

  .nav-menu > ul > li {
    position: relative;
    white-space: nowrap;
    padding-left: 28px;
  }

  .nav-menu a {
    display: block;
    position: relative;
    color: white;
    transition: 0.3s;
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
  }

  .nav-menu a:hover,
  .nav-menu .active > a,
  .nav-menu li:hover > a {
    color: #d9ba85;
  }

  .nav-menu .book-a-table a {
    border: 2px solid #cda45e;
    color: #fff;
    border-radius: 50px;
    padding: 8px 25px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1px;
    transition: 0.3s;
  }

  .nav-menu .book-a-table a:hover {
    background: #cda45e;
    color: #fff;
  }

  .nav-menu .drop-down ul {
    display: block;
    position: absolute;
    left: 15px;
    top: calc(100% + 30px);
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    padding: 10px 0;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: 0.3s;
  }

  .nav-menu .drop-down:hover > ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  .nav-menu .drop-down li {
    min-width: 180px;
    position: relative;
  }

  .nav-menu .drop-down ul a {
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    text-transform: none;
    color: #1a1814;
  }

  .nav-menu .drop-down ul a:hover,
  .nav-menu .drop-down ul .active > a,
  .nav-menu .drop-down ul li:hover > a {
    color: #cda45e;
  }

  .nav-menu .drop-down > a:after {
    content: "\ea99";
    font-family: IcoFont;
    padding-left: 5px;
  }

  .nav-menu .drop-down .drop-down ul {
    top: 0;
    left: calc(100% - 30px);
  }

  .nav-menu .drop-down .drop-down:hover > ul {
    opacity: 1;
    top: 0;
    left: 100%;
  }

  .nav-menu .drop-down .drop-down > a {
    padding-right: 35px;
  }

  .nav-menu .drop-down .drop-down > a:after {
    content: "\eaa0";
    font-family: IcoFont;
    position: absolute;
    right: 15px;
  }

  @media (max-width: 1366px) {
    .nav-menu .drop-down .drop-down ul {
      left: -90%;
    }
    .nav-menu .drop-down .drop-down:hover > ul {
      left: -100%;
    }
    .nav-menu .drop-down .drop-down > a:after {
      content: "\ea9d";
    }
  }

  /* Mobile Navigation */
  .mobile-nav-toggle {
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 9998;
    border: 0;
    background: none;
    font-size: 24px;
    transition: all 0.4s;
    outline: none !important;
    line-height: 1;
    cursor: pointer;
    text-align: right;
  }

  .mobile-nav-toggle i {
    color: #fff;
  }

  .mobile-nav {
    position: fixed;
    top: 15px;
    right: 15px;
    bottom: 15px;
    left: 15px;
    z-index: 9999;
    overflow-y: auto;
    background: #1a1814;
    border: 2px solid rgba(255, 255, 255, 0.1);
    transition: ease-in-out 0.2s;
    opacity: 0;
    visibility: hidden;
    border-radius: 10px;
    padding: 10px 0;
  }

  .mobile-nav * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile-nav .mobile-nav-close {
    margin: 0 15px 0 auto;
    display: block;
    border: 0;
    background: none;
    font-size: 24px;
    transition: all 0.4s;
    outline: none !important;
    line-height: 1;
    cursor: pointer;
    text-align: right;
    color: rgba(255, 255, 255, 0.5);
  }

  .mobile-nav .mobile-nav-close:hover {
    color: #fff;
  }

  .mobile-nav a {
    display: block;
    position: relative;
    color: #fff;
    padding: 10px 20px;
    font-weight: 500;
    outline: none;
    transition: 0.3s;
  }

  .mobile-nav a:hover,
  .mobile-nav .active > a,
  .mobile-nav li:hover > a {
    color: #cda45e;
    text-decoration: none;
  }

  .mobile-nav .drop-down > a:after {
    content: "\ea99";
    font-family: IcoFont;
    padding-left: 10px;
    position: absolute;
    right: 15px;
  }

  .mobile-nav .active.drop-down > a:after {
    content: "\eaa1";
  }

  .mobile-nav .book-a-table a {
    color: #fff;
    border: 2px solid #cda45e;
    border-radius: 50px;
    margin: 20px 0 0 0;
    padding: 10px 25px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1px;
    transition: 0.3s;
    display: inline-block;
  }

  .mobile-nav .book-a-table a:hover {
    background: #cda45e;
    color: #fff;
  }

  .mobile-nav .drop-down > a {
    padding-right: 35px;
  }

  .mobile-nav .drop-down ul {
    display: none;
    overflow: hidden;
  }

  .mobile-nav .drop-down li {
    padding-left: 20px;
  }

  .mobile-nav-overly {
    width: 100%;
    height: 100%;
    z-index: 9997;
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.6);
    overflow: hidden;
    display: none;
    transition: ease-in-out 0.2s;
  }

  .mobile-nav-active {
    overflow: hidden;
  }

  .mobile-nav-active .mobile-nav {
    opacity: 1;
    visibility: visible;
  }

  .mobile-nav-active .mobile-nav-toggle i {
    color: #fff;
  }
`
