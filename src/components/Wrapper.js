import styled from "styled-components";
import bg from "../images/space-cropped-2.jpg";
import Form from "./Form";
import Button from "@mui/material/Button";

const WrapperStyle = styled.div`
  background-image: url(${bg});
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
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
    margin-top: 6em;
    justify-content: space-around;
  }
  .calc-btn {
    border-radius: 5px;
    border: 1px solid white;
    background-color: #e6e3e8;
    width: 200px;
    height: 50px;
    color: black;
  }
  .calc-btn:hover {
    background-color: pink;
  }
  .buttons {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-top: 3em;
  }
`;

const Wrapper = () => {
  //   const calculateWeight = (weight, ) => {
  //     let planetWeight = 0;
  //   };
  return (
    <WrapperStyle>
      <p className="header">I am an Astro Weight Calculator!</p>
      <div className="calc">
        <Form />
      </div>
    </WrapperStyle>
  );
};
export default Wrapper;
