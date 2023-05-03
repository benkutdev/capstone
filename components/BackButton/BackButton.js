import { useRouter } from "next/router";
import styled from "styled-components";

const BackButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  padding: 10px 20px;
`;

export default function Back() {
  const router = useRouter();

  return <BackButton onClick={() => router.back()}>Back</BackButton>;
}
