import styled from "styled-components";

const UserInputStyle = styled.div`
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
`;

const UserInput = () => {
  return (
    <UserInputStyle>
      <p className="header">Enter weight here (lb):</p>
      <input type="text" id="weight-input" name="weight-input"></input>
    </UserInputStyle>
  );
};
export default UserInput;
