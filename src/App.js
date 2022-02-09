import "./App.css";
import Header from "./Header.js";
import Room from "./Room.js";

export default function App() {
  const rooms = [
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
  ];

  return (
    <main className="App">
      <Header>Happy Cleaning</Header>
      {rooms.map(({ text, description, isDescriptionVisible, isClean }) => (
        <Room
          key={text}
          text={text}
          description={description}
          isDescriptionVisible={isDescriptionVisible}
          isClean={isClean}
        />
      ))}
    </main>
  );
}
