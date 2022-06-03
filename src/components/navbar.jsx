import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.PNG";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <Wrapper className="navbar">
      <div className="nav-center">
        <figure className="nav-img">
          <img src={logo} alt="" />
        </figure>

        <div className="nav-links">
          <div>
            <FaPhoneAlt />
            <p>+769 586 4558</p>
          </div>
          <div>
            <FaEnvelope />
            <a href="mailto:service@openauto.ca">service@openauto.ca</a>
          </div>
          <div>
            <button>download the mobile app</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  background-color: var(--clr-primary-1);
  padding: 1.5rem 0;

  .nav-center {
    margin: 0 auto;
    /* background-color: yellow; */
    width: 90vw;
  }

  .nav-img {
    width: 8rem;
  }

  .nav-links {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-img {
      width: 8rem;
    }
    .nav-center {
      display: grid;
      grid-template-columns: 10rem auto;
      place-items: center;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0 2rem;
      place-self: end;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0 0.5rem;
        color: var(--clr-primary-3);
        font-size: 0.875rem;
      }
    }
  }
`;
