import styled from "styled-components";
import { Header } from "./components/Header";
import { Details } from "./components/molecules/Details";

function App() {
  return (
    <Div>
      <Header />

      <div className="row">
        <Details doctype="indicadores" />
        <Details doctype="presidentes_leitors" />
      </div>
    </Div>
  );
}

const Div = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 20px;

  .row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export default App;
