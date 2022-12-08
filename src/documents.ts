import indicators from "./assets/indicadores.png";
import presidentes_leitors from "./assets/presidentes_leitors.png";

export const documents: { [key: string]: { title: string; docUrl: string } } = {
  indicadores: {
    title: "Indicadores 2023",
    docUrl: indicators,
  },
  presidentes_leitors: {
    title: "Presidentes / Leitors 2022",
    docUrl: presidentes_leitors,
  }
};
