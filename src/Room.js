import "./Room.css";
import styled from "styled-components/macro";

import { useState } from "react";

export default function Room({ text, description, isClean, toggleStatus }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const statusClassName = isClean
    ? "Room__status--clean"
    : "Room__status--dirty";

  return (
    <Rooms onClick={toggleDescription}>
      <RoomHeader>
        {text}
        <RoomStatus
          onClick={toggleStatus}
          className={statusClassName}
        ></RoomStatus>
      </RoomHeader>
      <p hidden={!isDescriptionVisible}>{description}</p>
    </Rooms>
  );

  function toggleDescription() {
    setIsDescriptionVisible(!isDescriptionVisible);
  }
}

const Rooms = styled.section`
  padding: 12px;
  margin: 30px;
  border: 1px solid #ddd;
`;

const RoomHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RoomStatus = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
`;
