import Image from "next/image";
import styled from "styled-components";
import recordLogo from "../../public/images/greenvinyl.png";
import Link from "next/link";

const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: #f39c12;
  top: 0;
  left: 0;
  right: 0;
`;

const AppHeader = () => {
  return (
    <Header>
      <Link href="/">
        <Image
          src={recordLogo}
          alt="vinyl-round-logo"
          title="vinyl-record"
          height={63}
          width={63}
          style={{
            position: "absolute",
            top: "4px",
            left: "4px",
          }}
        />
      </Link>
    </Header>
  );
};

export default AppHeader;
