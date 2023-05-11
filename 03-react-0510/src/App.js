import React from "react";
import Counter from "./Counter";
import FontChanges from "./FontChange";

function Hello(props) {
  return (
    <div>
      안녕하세요,{" "}
      <span
        style={{
          color: props.color,
          fontStyle: props.fontStyle,
          fontWeight: props.fontWeight,
        }}
      >
        {props.name}님!
      </span>
    </div>
  );
}

function City(props) {
  return (
    <div>
      Address :
      <span
        style={{
          fontSize: 20,
        }}
      >
        {props.brand.model}!
      </span>
    </div>
  );
}

function CityDetail() {
  const cityAddress = {
    name: "MetaTower",
    model: "382, Gangnam-daero, Gangnam-gu, Seoul, Republic of Korea",
  };
  return (
    <>
      {" "}
      <h1> I live in {cityAddress.name}</h1> <City brand={cityAddress} />{" "}
    </>
  );
}

function App() {
  return (
    <>
      <Hello name="react" color="red" fontStyle="italic" fontWeight="bold" />
      <CityDetail />
      <Counter />
      <FontChanges />
    </>
  );
}

export default App;

// function Car(props) {
//   return <h2>I am a { props.brand.model }!</h2>;
// }

// function Garage() {
//   const carInfo = { name: "Ford", model: "Mustang" };
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <Car brand={ carInfo } />
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);
