import styled from "styled-components";

const AddAlbumButton = styled.button`
  width: 140px;
  height: 140px;
  background-color: #145a32;
  color: #f39c12;
  border: 2px solid #f39c12;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: rgba(243, 156, 18, 0.2);
    border-color: #f39c12;
  }

  &:active {
    background-color: #f39c12;
    transform: scale(0.95);
  }
`;

export default AddAlbumButton;
