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
      <a href="https:www.facebook.com" target="_blank">
        {<FaFacebookF />}
      </a>
      <a href="https:www.twitter.com" target="_blank">
        {<FaTwitter />}
      </a>
      <a href="https:www.yotube.com" target="_blank">
        {<FaYoutube />}
      </a>
      <a href="https:www.linkedin.com" target="_blank">
        {<FaLinkedin />}
      </a>
      <a href="https:www.instagram.com" target="_blank">
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
