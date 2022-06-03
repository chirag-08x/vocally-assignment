import React from "react";
import styled from "styled-components";
import Form from "./form";
import mainImg from "../assets/main.png";
import SocialIcons from "./socialIcons";
import { useGlobalContext } from "../context/context";
import Modal from "./modal";
import { AiOutlineUpCircle } from "react-icons/ai";

const Main = () => {
  const {
    modal: { isOpen },
  } = useGlobalContext();

  return (
    <Wrapper>
      {isOpen && <Modal />}
      <div className="wrapper">
        <article className="main-container">
          <h1 className="title">
            vehicle maintenance from the comfort of your home
          </h1>
          <p className="subtitle">
            open auto soothes the hassle of maintaining your vehicle and helps
            you deal with unexpected repairs worry-free.
          </p>
          <Form />
        </article>

        <figure className="img-container">
          <img src={mainImg} alt="Image" />
        </figure>
      </div>

      <article className="footer-container">
        <div></div>
        <div className="scroll-icon">
          <a href="#section2">
            <AiOutlineUpCircle />
          </a>
        </div>
        <SocialIcons />
      </article>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.section`
  background-color: var(--clr-primary-1);
  position: relative;
  padding-top: 3rem;
  padding-bottom: 1rem;
  display: grid;
  place-items: center;
  .wrapper {
    margin: 0 auto;
    width: 85vw;
    height: 100%;

    .main-container {
      text-transform: capitalize;
      text-align: center;
      letter-spacing: 1px;
      .title {
        color: var(--clr-primary-3);
        font-size: 1.8rem;
        max-width: 20rem;
        margin: 0 auto;
        margin-bottom: 1rem;
      }

      .subtitle {
        color: var(--clr-primary-4);
        max-width: 24rem;
        margin: 0 auto;
        font-size: 0.875rem;
        line-height: 1.25;
        margin-bottom: 2rem;
      }
    }
    .img-container {
      width: 18rem;
      margin: 0 auto;
      margin-bottom: 2rem;
    }
  }

  .footer-container {
    width: 90vw;
    margin: 0 auto;
    display: grid;
    place-items: center;
    .scroll-icon {
      display: none;
    }
  }

  @media (min-width: 992px) {
    min-height: calc(100vh - 82px);
    .wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      place-items: center;

      .main-container {
        text-align: start;
        .title {
          font-size: 2.5rem;
          max-width: 30rem;
          margin: initial;
          margin-bottom: 1rem;
        }

        .subtitle {
          font-size: 1rem;
          max-width: initial;
        }
      }

      .img-container {
        margin: initial;
        width: initial;
      }
    }

    .footer-container {
      grid-template-columns: 1fr 1fr 1fr;
      .scroll-icon {
        display: initial;
        justify-self: center;

        &:hover {
          transform: rotate(180deg);
          transition: var(--main-transition);
        }

        a {
          border: none;
          font-size: 2rem;
        }
      }
    }
  }
`;
