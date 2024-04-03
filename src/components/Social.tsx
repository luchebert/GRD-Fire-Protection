import React from "react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/linkedin";
import "react-social-icons/instagram";

const Social = () => {
  return (
    <div>
      <SocialIcon url="www.linkedin.com" />
      &nbsp;&nbsp;
      <SocialIcon url="www.instagram.com" />
    </div>
  );
};

export default Social;
