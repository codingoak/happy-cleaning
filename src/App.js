import "./App.css";
import Header from "./Header.js";
import Room from "./Room.js";
import Navigation from "./Navigation.js";
import Flatmates from "./Flatmates.js";
import { useState } from "react";
import { useImmer } from "use-immer";

export default function App() {
  const [Rooms, updateRooms] = useImmer([
    {
      text: "Küche",
      description: "Herdplatte nicht vergessen",
      isDescriptionVisible: true,
      isClean: false,
    },
    {
      text: "Bad",
      description: "Eigener Lappen für das Klo",
      isDescriptionVisible: false,
      isClean: true,
    },
    {
      text: "Wohnzimmer",
      description: "Staub wischen",
      isDescriptionVisible: true,
      isClean: false,
    },
  ]);

  const [currentPage, setCurrentPage] = useState("Rooms"); // 'Rooms' or 'Flatmates'

  return (
    <div className="App">
      <Header>{currentPage}</Header>
      <main>
        {currentPage === "Rooms" &&
          Rooms.map(
            ({ text, description, isDescriptionVisible, isClean }, index) => (
              <Room
                key={text}
                text={text}
                description={description}
                isDescriptionVisible={isDescriptionVisible}
                isClean={isClean}
                toggleStatus={(event) => {
                  event.stopPropagation();
                  updateRooms((draft) => {
                    draft[index].isClean = !isClean;
                  });
                }}
              />
            )
          )}
        {currentPage === "Flatmates" && <Flatmates />}
      </main>

      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
