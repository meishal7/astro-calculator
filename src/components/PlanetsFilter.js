import styled from "styled-components";

const PlanetsInputStyle = styled.div`
  .select-options {
    background: #fbf7ff;
    border-radius: 5px;
    border: 1px solid white;
    background-color: #e6e3e8;
    width: 200px;
    text-align: center;
  }
  .header {
    color: #eed5e6;
    font-size: 20px;
    text-align: center;
  }
`;

const PlanetsFilter = () => {
  return (
    <PlanetsInputStyle>
      <p className="header">Select a planet:</p>
      <select className="select-options">
        <option value="Jupiter">Jupiter</option>
        <option value="Mars">Mars</option>
        <option value="Mercury">Mercury</option>
        <option value="Neptune">Neptune</option>
        <option value="Uranus">Uranus</option>
        <option value="Saturn">Saturn</option>
        <option value="Venus">Venus</option>
      </select>
    </PlanetsInputStyle>
  );
};
export default PlanetsFilter;
