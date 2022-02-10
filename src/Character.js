import styled from "styled-components/macro";

export default function Character({ name, status }) {
  return (
    <Flatmate>
      <h2>{name}</h2>
      <FlatmateStatus> {status}</FlatmateStatus>
    </Flatmate>
  );
}

const Flatmate = styled.li`
  padding: 20px;
  margin: 30px;
  border: 1px solid #ddd;
`;

const FlatmateStatus = styled.p`
  margin-top: 10px;
`;
