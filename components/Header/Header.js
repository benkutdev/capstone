import Image from "next/image";
import styled from "styled-components";
import recordLogo from "../../public/images/greenvinyl.png";

const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: #f39c12;
`;

const AppHeader = () => {
  return (
    <Header>
      <Image
        src={recordLogo}
        alt="vinyl-round-logo"
        title="vinyl-record"
        height={63}
        width={63}
        style={{
          position: "absolute",
          top: 4,
          left: 4,
        }}
      />
    </Header>
  );
};

export default AppHeader;
