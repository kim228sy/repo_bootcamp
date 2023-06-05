import React from "react";

export default function App() {
  const pets = ["강아지", "고양이", "햄스터"];

  return (
    <ul>
      {/* <li>{pets[0]}</li>
      <li>{pets[1]}</li>
      <li>{pets[2]}</li> */}
      {pets.map((pet, idx) => {
        // return <li key={pet}>{pet}</li>;
        return <li key={idx}>{pet}</li>;
      })}
    </ul>
  );
}
