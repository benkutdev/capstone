import React, { forwardRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import recordLogo from "../../public/images/orangeRecord.png";
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar.js";

const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: #145a32;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
`;

const AppHeader = ({ searchBarRef }) => {
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
      <SearchBar ref={searchBarRef} />
    </Header>
  );
};

export default AppHeader;
