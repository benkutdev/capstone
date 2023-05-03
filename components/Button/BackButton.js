import React from "react";
import Image from "next/image";
import styled from "styled-components";
import orangeArrow from "../../public/images/orangeArrow.png";
import Link from "next/link";

const StyledLink = styled(Link)`
  background-color: #145a32;
  border: 1px solid;
  color: #f39c12;
  font-size: 16px;
`;

export default function BackButton() {
  return (
    <StyledLink href="/">
      <Image
        src={orangeArrow}
        alt="vinyl-round-logo"
        title="vinyl-record"
        height={27}
        width={27}
      />
    </StyledLink>
  );
}
