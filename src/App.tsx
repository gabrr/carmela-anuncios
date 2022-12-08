import styled from "styled-components";
import { Header } from "./components/Header";
import { Details } from "./components/molecules/Details";

function App() {
  return (
    <Div>
      <Header />

      <Details doctype="indicadores" />
    </Div>
  );
}

const Div = styled.div``;

export default App;
