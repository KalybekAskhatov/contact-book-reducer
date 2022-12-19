import React from "react";
import mac from "../../assets/contact-book-icon-vector-13819944.jpg";
import "./Home.css";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="container-header">
        <div className="header-text" id="header-go">
          <h1>
            Welcome, User! <br />
            Push to add your contact <br />
            on our resource!
          </h1>
          <button id="header-btn">
            <NavLink to="/add">Start now!</NavLink>
          </button>
        </div>

        <div className="header-mac">
          <img
            id="mac"
            src={mac}
            alt="BG2"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "350px",
              margin: "100px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
