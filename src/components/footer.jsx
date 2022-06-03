import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";
import footerLogo from "../assets/logo.PNG";
import SocialIcons from "./socialIcons";

const Footer = () => {
  return (
    <Wrapper>
      <hr />
      <article className="container">
        <div className="img-container">
          <img src={footerLogo} alt="" />
        </div>

        <div className="phev">
          <article>
            <button>
              <FaPhoneAlt />
            </button>
            <p>+769 586 4558</p>
          </article>

          <article>
            <button>
              <FaEnvelope />
            </button>
            <a href="mailto:service@openauto.ca">service@openauto.ca</a>
          </article>
        </div>

        <div className="copyright">
          <p>open auto @ all rights reserved</p>
        </div>

        <div className="footer-links">
          <a href="#">privacy policy</a>
          <a href="#">terms of use</a>
          <a href="#">cookie policy</a>
        </div>

        <SocialIcons />
      </article>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  background-color: var(--clr-primary-2);

  padding: 1rem 0;

  hr {
    background-color: var(--clr-primary-6);
    height: 0.1rem;
    width: 100%;
    border: none;
  }

  .container {
    width: 90vw;
    margin: 0 auto;
    display: grid;
    place-items: center;

    div {
      color: var(--clr-primary-3);
      font-size: 0.875rem;
    }

    .img-container {
      margin: 3rem 0 1rem 0;
      img {
        width: 10rem;
      }
    }

    .phev {
      margin: 1rem 0 1rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0 2rem;

      article {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      button {
        background: transparent;
        border: none;
      }
    }

    .copyright {
      text-transform: capitalize;
      margin: 1rem 0;
    }

    .footer-links {
      display: flex;
      gap: 0 2rem;
      text-transform: capitalize;
      margin: 1rem 0;
    }

    .social-icons {
      justify-content: space-evenly;
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    hr {
      width: 90vw;
      margin: 0 auto;
    }
    .container {
      grid-template-columns: 1fr 1fr;
      gap: 1rem 0;

      .footer-links {
        display: none;
      }

      .phev {
        margin: 0;
        justify-self: end;
        margin: 2.5rem 0 1rem 0;
      }

      .copyright {
        margin: 0;
        justify-self: start;
      }

      .img-container {
        margin: 2.5rem 0 1rem 0;
        justify-self: start;
        img {
          width: 12rem;
        }
      }

      .social-icons {
        justify-content: flex-end;
        margin: 0;
      }
    }
  }
`;
