import styled from "styled-components";
import bg from "../images/space-pink.jpg";
import Form from "./Form";
import { useState } from "react";

const WrapperStyle = styled.div`
  background-image: url(${bg});
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  background-size: cover;
  .header {
    text-align: center;
    padding-top: 3em;
    font-size: 25px;
    font-weight: bold;
    color: #eed5e6;
  }
  .calc {
    display: flex;
    width: 70%;
    margin: 0 auto;
    margin-top: 8em;
    justify-content: space-around;
  }

  .buttons {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-top: 3em;
  }
  .weight-display {
    color: white;
    font-size: 30px;
    text-align: center;
  }
`;

const Wrapper = () => {
  // const toggleLoadding = () =>
  // document.querySelector(".loader").classList.toggle("loading");
  const [calculated, setCalculated] = useState(false);
  const [planet, setPlanet] = useState("");
  const [newWeight, setNewWeight] = useState(0);
  const [prevWeight, setPrevWeight] = useState(0);

  const submitWeightHandler = (data) => {
    setCalculated(true);
    setPlanet(data.planet);
    setNewWeight(data.newWeight);
    setPrevWeight(data.prevWeight);
  };

  return (
    <WrapperStyle>
      <p className="header">I am an Astro Weight Calculator!</p>
      {calculated && (
        <p className="weight-display">
          {prevWeight} lb on Earth is {newWeight} lb on {planet}!
        </p>
      )}
      <div className="calc">
        <Form onSubmitWeight={submitWeightHandler} />
      </div>
    </WrapperStyle>
  );
};
export default Wrapper;
