import React from "react";
import styled from "styled-components";
import infoLofo from "../assets/info.png";

const Info = () => {
  return (
    <Wrapper id="section2">
      <div>
        <article className="content">
          <h1 className="title">focused on time saving</h1>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            consequatur cumque veritatis veniam non asperiores maxime distinctio
            tempora eius! Explicabo odit, numquam eligendi ea facere corporis
            nisi ratione accusantium id cupiditate natus quisquam at.
            Architecto, rerum dolore quos consequatur laborum dolor. Deserunt ea
            ratione eveniet veniam autem, temporibus tenetur quas, at culpa modi
            iste facere cum distinctio eos obcaecati! Velit!
          </p>
          <button>download the mobile app</button>
        </article>

        <figure>
          <img src={infoLofo} alt="IMAGE" />
        </figure>
      </div>
    </Wrapper>
  );
};

export default Info;

const Wrapper = styled.section`
  background-color: var(--clr-primary-2);
  padding: 5rem 0;

  div {
    width: 90vw;
    margin: 0 auto;

    .content {
      text-align: center;
      text-transform: capitalize;
      margin-bottom: 2rem;

      .title {
        color: var(--clr-primary-3);
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
      }

      .subtitle {
        color: var(--clr-primary-4);
        line-height: 2;
        font-size: 0.875rem;
        text-justify: inter-word;
        margin-bottom: 1.5rem;
      }

      button {
        width: 100%;
        max-width: 21rem;
      }
    }

    figure {
      width: 100%;
      max-width: 25rem;
      margin: 0 auto;
    }
  }

  @media (min-width: 992px) {
    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 2.5rem;
      place-items: center;
      direction: rtl;

      .content {
        text-align: end;

        .title {
          font-size: 2.5rem;
          max-width: 15rem;
          margin-right: auto;
        }

        .subtitle {
          font-size: 1rem;
        }

        button {
          font-size: 1rem;
        }
      }
    }
  }
`;
