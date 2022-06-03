import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import styled from "styled-components";

const SocialIcons = () => {
  return (
    <Wrapper className="social-icons">
      <a href="https:www.facebook.com" target="_blank" rel="noreferrer">
        {<FaFacebookF />}
      </a>
      <a href="https:www.twitter.com" target="_blank" rel="noreferrer">
        {<FaTwitter />}
      </a>
      <a href="https:www.yotube.com" target="_blank" rel="noreferrer">
        {<FaYoutube />}
      </a>
      <a href="https:www.linkedin.com" target="_blank" rel="noreferrer">
        {<FaLinkedin />}
      </a>
      <a href="https:www.instagram.com" target="_blank" rel="noreferrer">
        {<FaInstagram />}
      </a>
    </Wrapper>
  );
};

export default SocialIcons;

const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 2rem;

  @media (min-width: 768px) {
    justify-self: flex-end;
  }
`;
