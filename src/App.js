import "./App.css";
import Header from "./Header.js";
import Room from "./Room.js";
import { useImmer } from "use-immer";

export default function App() {
  const [rooms, updateRooms] = useImmer([
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

  return (
    <main className="App">
      <Header>Happy Cleaning</Header>
      {rooms.map(
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
    </main>
  );
}
