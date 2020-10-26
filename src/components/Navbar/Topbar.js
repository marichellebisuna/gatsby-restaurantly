import React from "react"
import styled from "styled-components"

const Topbar = () => {
  return (
    <div>
      <Wrapper>
        {/* <!-- ======= Top Bar ======= --> */}
        <div id="topbar" className="d-flex align-items-center fixed-top">
          <div className="container d-flex">
            <div className="contact-info mr-auto">
              <i className="icofont-phone"></i> +1 5589 55488 55
              <span className="d-none d-lg-inline-block">
                <i className="icofont-clock-time icofont-rotate-180"></i>{" "}
                Mon-Sat: 11:00 AM - 23:00 PM
              </span>
            </div>
            <div className="languages">
              <ul>
                <li>En</li>
                <li>
                  <a href="#">De</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
export default Topbar
const Wrapper = styled.div`
  #topbar {
    height: 40px;
    font-size: 14px;
    transition: all 0.5s;
    background-color: #1a1814;
  }

  #topbar.topbar-scrolled {
    top: -40px;
  }

  #topbar .contact-info {
    color: white;
  }

  #topbar .contact-info i {
    color: #d9ba85;
    padding-right: 4px;
  }

  #topbar .contact-info i + i {
    margin-left: 15px;
  }

  #topbar .languages ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    color: #cda45e;
  }

  #topbar .languages ul a {
    color: white;
  }

  #topbar .languages ul li + li {
    padding-left: 10px;
  }

  #topbar .languages ul li + li::before {
    display: inline-block;
    padding-right: 10px;
    color: rgba(255, 255, 255, 0.5);
    content: "/";
  }
`
