import Image from "next/image";
import styled from "styled-components";
import recordLogo from "../../public/images/recordLogo.png";

const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #f39c12;
`;

const Logo = styled(Image)`
  position: absolute;
  top: 1;
  left: 0;
`;

const AppHeader = () => {
  return (
    <Header>
      <Logo src={recordLogo} alt="vinyl-round-rlogo" height={60} width={60} />
    </Header>
  );
};

export default AppHeader;
