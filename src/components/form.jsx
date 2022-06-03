import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";

const Form = () => {
  const [formValuevalue, setFormValue] = useState({
    name: "",
    email: "",
  });

  const { openModal } = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameValue = formValuevalue.name;
    const emailValue = formValuevalue.email;

    if (nameValue === "") {
      openModal("Please provide a value for name field.");
      return;
    }

    const validateName = /^[a-zA-Z" "]+$/.test(nameValue);

    if (!validateName) {
      openModal("Only alphabets are allowed in the name field.");
      return;
    }

    if (emailValue === "") {
      openModal("Please provide a value for email field.");
      return;
    }

    const validateEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        emailValue
      );

    if (!validateEmail) {
      openModal("Please provide a valid email address.");
      return;
    }

    const response = await fetch(
      "https://vocally-project-d5154-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameValue,
          email: emailValue,
        }),
      }
    );

    if (response) {
      openModal("form successfully submitted");
      setFormValue({ name: "", email: "" });
    } else {
      alert("Please check the form values again!!!");
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValue({ ...formValuevalue, [name]: value });
  };

  return (
    <Wrapper>
      <form className="form" method="POST" onSubmit={handleSubmit} noValidate>
        <div>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            value={formValuevalue.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            value={formValuevalue.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  margin-bottom: 2rem;
  .form {
    div {
      margin-bottom: 1rem;
      input {
        width: 21rem;
        border-radius: 2rem;
        border: 1px solid var(--clr-primary-4);
        padding: 0.8rem 1rem;
        background: transparent;
        color: var(--clr-primary-4);
      }
    }

    button {
      border: 1px solid var(--clr-primary-4);
      margin-top: 0.5rem;
      width: 21rem;
      color: var(--clr-primary-4);

      &:hover {
        background-color: var(--clr-primary-5);
        color: white;
        transition: var(--main-transition);
        border: none;
      }
    }
  }

  @media (min-width: 992px) {
    .form {
      div {
        input {
          width: 23rem;
        }
      }

      button {
        width: 23rem;
      }
    }
  }
`;
