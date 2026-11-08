import type { JSX } from "solid-js";
import { Cabecalho } from "./01-cabecalho";
import { Abertura } from "./02-abertura";
import { Sobre } from "./03-sobre";
import { DuranteAGraduacao } from "./04-durante-a-graduacao";
import { DesdeOs13Anos } from "./05-desde-os-13-anos";
import { Competencias } from "./06-competencias";
import { Contato } from "./07-contato";

export default function Inicio(): JSX.Element {
  return (
    <>
      <Cabecalho />
      <main id="conteudo">
        <Abertura />
        <Sobre />
        <DuranteAGraduacao />
        <DesdeOs13Anos />
        <Competencias />
      </main>
      <Contato />
    </>
  );
}
