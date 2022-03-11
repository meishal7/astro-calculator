import React, { useContext, useState } from "react";
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
    margin-top: 3em;
  }
  .form-buttons {
    display: flex;
    justify-content: center;
    margin-top: 3em;
  }
`;

const Form = (props) => {
  const [weight, setWeight] = useState(" ");
  const [error, setError] = useState();

  const weightHandler = (event) => {
    setWeight(event.target.value);
  };

  const planetHandler = (event) => {};

  const submitHandler = (event) => {
    event.preventDefault();

    if (+weight === 0 || weight < 0) {
      setError({
        title: "Invalid input.",
        message: "Weight is invalid.",
      });
      return;
    }
  };

  // const expenseData = {
  //   title: title,
  //   date: date,

  //   year: +format(new Date(date), "yyyy"),
  //   month: format(new Date(date), "MMM"),
  //   // day: format(new Date(date), "dd"),
  //   cost: cost,
  //   category: category,
  // };

  //     props.onSubmitNewWeight(expenseData, authCtx.token);
  //     setTitle("");
  //     setDate("");
  //     setCost("");
  //     setCategory("Choose Category");
  //   };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <FormStyle>
      <form onSubmit={submitHandler}>
        <div className="fields">
          <div className="input-set">
            <label htmlFor="weight-input">Weight on Earth: </label>
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
            <select className="planets-filter" onChange={planetHandler}>
              <option value="Jupiter">Jupiter</option>
              <option value="Mars">Mars</option>
              <option value="Mercury">Mercury</option>
              <option value="Neptune">Neptune</option>
              <option value="Uranus">Uranus</option>
              <option value="Saturn">Saturn</option>
              <option value="Venus">Venus</option>
            </select>
          </div>
        </div>

        <div className="form-buttons">
          <Button className="calc-btn">Calculate</Button>
        </div>
      </form>
    </FormStyle>
  );
};

export default Form;
