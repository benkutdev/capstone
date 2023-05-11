import React from "react";
import styled from "styled-components";
import Image from "next/image";
import plusButton from "../../public/images/plusButton.png";
import { useRouter } from "next/router";

const StyledButton = styled.button`
  position: absolute;
  left: 0;
  bottom: 0;
  border: 2px solid;
  border-color: #f39c12;
  color: #f39c12;
  font-size: 16px;
  background: transparent;
  cursor: pointer;
`;

const PlusButton = ({ onAdd, album }) => {
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    onAdd(album);
    router.push("/");
  };

  return (
    <StyledButton onClick={handleClick}>
      <Image
        src={plusButton}
        alt="add-plus"
        title="add-plus-button"
        height={40}
        width={40}
      />
    </StyledButton>
  );
};

export default PlusButton;
