import styled from "styled-components";
import { documents } from "../../documents";
import { useEffect, useState } from "react";

interface DetailsProps {
  doctype: "indicadores" | "presidentes_leitors";
}

export const Details = ({ doctype }: DetailsProps) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "scroll";
  }, [open]);

  return (
    <Container open={open}>
      <h4>{documents[doctype].title}</h4>

      <div className="img_container">
        <img
          src={documents[doctype].docUrl}
          onClick={toggle}
          alt="tabela de indicadores"
        />
      </div>
    </Container>
  );
};

const Container = styled.div<{ open: boolean }>`
  width: 100%;
  margin: 0 auto;

  h4 {
    margin-bottom: 5px;
  }

  .img_container {
    overflow: scroll;
    position: ${({ open }) => (open ? "fixed" : "static")};
    transition: width ease-in-out 300ms;
    top: ${({ open }) => (open ? "20px" : "auto")};
    left: ${({ open }) => (open ? "2.5vw" : "auto")};
    width: ${({ open }) => (open ? "95vw" : "100%")};
    height: ${({ open }) => (open ? "85vh" : "30vh")};
    border-radius: 10px;
  }

  img {
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
`;
