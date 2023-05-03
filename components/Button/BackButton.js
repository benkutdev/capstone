import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import orangeArrow from "../../public/images/orangeArrow.png";

const Button = styled.button`
  background-color: #145a32;
  border: 1px solid;
  color: #f39c12;
  font-family: "Bebas Neue";
  font-size: 16px;
`;

export default function BackButton() {
  const router = useRouter();

  return (
    <Button onClick={() => router.push("/")}>
      <Image
        src={orangeArrow}
        alt="vinyl-round-logo"
        title="vinyl-record"
        height={30}
        width={30}
      />
    </Button>
  );
}
