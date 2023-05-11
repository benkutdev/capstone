import React from "react";
import Image from "next/image";
import styled from "styled-components";
import deleteButton from "../../public/images/deleteButton.png";
import { useRouter } from "next/router";

const StyledButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const DeleteButton = ({ onDelete }) => {
  const router = useRouter();

  const handleClick = () => {
    onDelete();
    router.push("/");
  };

  return (
    <StyledButton onClick={handleClick}>
      <Image
        src={deleteButton}
        alt="delete-bin"
        title="bin"
        height={40}
        width={40}
      />
    </StyledButton>
  );
};

export default DeleteButton;
