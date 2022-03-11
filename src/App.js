import "./style/normalize.css";
import { GlobalStyle } from "./style/globalStyles";
import styled from "styled-components";
import { Fragment } from "react";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper />
    </Fragment>
  );
}

export default App;
