import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/context";
import React from "react";
import styled from "styled-components";

const Modal = () => {
  const {
    modal: { text },
    closeModal,
  } = useGlobalContext();

  return (
    <Wrapper>
      <div>
        <button onClick={closeModal}>{<FaTimes />}</button>
        <h4>{text}</h4>
      </div>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  place-items: center;

  div {
    background-color: white;
    width: 90vw;
    height: 12rem;
    max-width: 500px;
    display: grid;
    place-items: center;
    position: relative;
    border-radius: 0.5rem;

    button {
      position: absolute;
      color: red;
      font-size: 1.5rem;
      top: 1rem;
      right: 1rem;
      border: none;
      background: transparent;
    }

    h4 {
      text-align: center;
      text-transform: capitalize;
    }
  }
`;
