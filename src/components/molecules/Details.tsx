import styled from "styled-components";
import { documents } from "../../documents";
import { Document, Page } from 'react-pdf';

interface DetailsProps {
  doctype: "indicadores" | "presidentes/leitores";
}

export const Details = ({ doctype }: DetailsProps) => {
  return (
    <Container>
      <summary>{documents[doctype].title}</summary>
      
      <Document file="">
        <Page />
      </Document>

    </Container>
  );
};

const Container = styled.details``;
