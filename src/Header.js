import styled from "styled-components/macro";

export default function Header({ children }) {
  return <Heading>{children}</Heading>;
}

const Heading = styled.h1`
  text-align: center;
  padding: 5px 0;
  font-weight: bolder;
`;
