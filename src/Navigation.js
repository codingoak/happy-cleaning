import "./Navigation.css";
import styled from "styled-components/macro";

export default function Navigation({ currentPage, setCurrentPage }) {
  return (
    <div>
      <NavigationButton
        onClick={() => setCurrentPage("Rooms")}
        className={currentPage === "Rooms" && "Navigation__button--active"}
      >
        Rooms
      </NavigationButton>
      <NavigationButton
        onClick={() => setCurrentPage("Flatmates")}
        className={currentPage === "Flatmates" && "Navigation__button--active"}
      >
        Flatmates
      </NavigationButton>
    </div>
  );
}

const NavigationButton = styled.button`
  font-size: 1.3rem;
  border: none;
  border-radius: 13px 13px 0 0;
  padding: 10px 25px;
  width: 50%;
`;
