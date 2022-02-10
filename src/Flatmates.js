import { useState, useEffect } from "react";
import Character from "./Character";
import "./Flatmates.css";

export default function Flatmates() {
  const [characters, setCharacters] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    loadCharacters();
    console.log("useEffect was called");
  }, []);

  async function loadCharacters() {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/characters1,2,3"
      );

      if (response.ok) {
        // check, if there is "no 404"
        const data = await response.json();
        setCharacters(data);
      } else {
        // make code execution continue in catch block
        throw new Error("404 - not found");
      }
    } catch (error) {
      console.log(error.message);
      setHasError(true);
    }
  }

  return (
    <div>
      {hasError && <p>Error: could not load characters.</p>}
      <ul>
        {characters.map(({ name, status, id }) => (
          <Character key={id} name={name} status={status} />
        ))}
      </ul>
    </div>
  );
}
