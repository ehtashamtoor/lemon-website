import React from "react";
import food from "../images/food1.avif";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <section>
        <div>
          <h2>Little Lemon</h2>
          <h3>Pakistan</h3>
          <p>
            We are a family owned Pakistani restaurant, focused on traditional
            recipes.
          </p>
          <Link to="/booking">
            <button aria-label="On click" style={{ cursor: "pointer" }}>
              Reserve a Table
            </button>
          </Link>
        </div>
        <div>
          <img src={food} alt="foodImage" />
        </div>
      </section>
    </header>
  );
};

export default Header;
