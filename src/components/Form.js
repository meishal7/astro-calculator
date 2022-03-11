import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const FormStyle = styled.div`
  .fields {
    display: flex;
    justify-content: space-between;
    min-width: 500px;
  }
  .input-set {
    display: flex;
    flex-direction: column;
  }
  label {
    padding-bottom: 10px;
    color: white;
    text-align: center;
  }
  #weight-input {
    border-radius: 5px;
    border: 1px solid white;
    background-color: #e6e3e8;
  }
  .header {
    color: #eed5e6;
    font-size: 20px;
    text-align: center;
  }
  .planets-filter {
    background: #fbf7ff;
    border-radius: 5px;
    border: 1px solid white;
    background-color: #e6e3e8;
    width: 200px;
    text-align: center;
  }
  .calc-btn {
    border-radius: 5px;
    border: 1px solid white;
    background-color: #e6e3e8;
    width: 200px;
    height: 50px;
    color: black;
    margin-top: 3em;
  }
  .calc-btn:hover {
    background-color: #a061df;
  }
  .form-buttons {
    display: flex;
    justify-content: center;
    margin-top: 3em;
  }
`;

const Form = ({ onSubmitWeight }) => {
  const [weight, setWeight] = useState(" ");
  const [error, setError] = useState();
  const [planet, setPlanet] = useState("Jupiter");

  const weightHandler = (event) => {
    setWeight(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (+weight === 0 || weight < 0) {
      setError({
        title: "Invalid input.",
        message: "Weight is invalid.",
      });
      return;
    }
    let newWeight = 0;
    switch (planet) {
      case "Jupiter":
        newWeight = Math.floor((weight / 9.81) * 24.79);
        break;
      case "Mars":
        newWeight = Math.floor((weight / 9.81) * 3.711);
        break;
      case "Mercury":
        newWeight = Math.floor((weight / 9.81) * 3.7);
        break;
      case "Venus":
        newWeight = Math.floor((weight / 9.81) * 8.87);
        break;
      case "Neptune":
        newWeight = Math.floor((weight / 9.81) * 11.15);
        break;
      case "Uranus":
        newWeight = Math.floor((weight / 9.81) * 8.69);
        break;
      case "Saturn":
        newWeight = Math.floor((weight / 9.81) * 10.44);
        break;
      default:
        console.log("There is an error in weight calculating.");
    }

    let data = {
      prevWeight: weight,
      newWeight: newWeight,
      planet: planet,
    };

    onSubmitWeight(data);
    setWeight(" ");
  };

  const errorHandler = () => {
    setError(null);
  };

  let planets = [
    "Jupiter",
    "Mars",
    "Mercury",
    "Venus",
    "Neptune",
    "Uranus",
    "Saturn",
  ];

  return (
    <FormStyle>
      <form onSubmit={submitHandler}>
        <div className="fields">
          <div className="input-set">
            <label htmlFor="weight-input">Weight on Earth (lb): </label>
            <input
              className="weight-input"
              type="text"
              id="weight-input"
              name="weight-input"
              placeholder="Weight (lb)"
              value={weight}
              onChange={weightHandler}
            />
          </div>
          <div className="input-set">
            <label>Choose a planet:</label>
            <select
              className="planets-filter"
              onChange={(event) => {
                setPlanet(event.target.value);
              }}
            >
              {planets.map((planet) => (
                <option key={planet} value={planet}>
                  {planet}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-buttons">
          <button type="submit" className="calc-btn">
            Calculate
          </button>
        </div>
      </form>
    </FormStyle>
  );
};

export default Form;
