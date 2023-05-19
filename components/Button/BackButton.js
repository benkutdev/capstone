import React from "react";
import Image from "next/image";
import styled from "styled-components";
import newArrow from "../../public/images/newArrow.png";
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

export default function BackButton() {
  return (
    <StyledLink href="/">
      <Image
        src={newArrow}
        alt="back-arrow"
        title="back-record"
        height={40}
        width={40}
      />
    </StyledLink>
  );
}
