import "./Character.css";

export default function Character({ name, status }) {
  return (
    <li>
      <h2>{name}</h2>
      <p> {status}</p>
    </li>
  );
}
