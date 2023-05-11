import React from "react";
import Image from "next/image";
import styled from "styled-components";
import heartButton from "../../public/images/heartButton.png";
import Link from "next/link";

const StyledLink = styled(Link)`
  position: absolute;
  left: 0;
  top: 0;
  border: 2px solid;
  border-color: #f39c12;
  color: #f39c12;
  font-size: 16px;
`;

export default function HeartButton() {
  return (
    <StyledLink href="/">
      <Image
        src={heartButton}
        alt="heart-icon"
        title="heart-marker"
        height={40}
        width={40}
      />
    </StyledLink>
  );
}
