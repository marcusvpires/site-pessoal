import type { JSX } from "solid-js";
import { ProjetosEmDestaque } from "./01-projetos-em-destaque";
import { Ciframento } from "./02-ciframento";
import { Radreader } from "./03-radreader";
import { Crossbots } from "./04-crossbots";

export function DuranteAGraduacao(): JSX.Element {
  return (
    <section id="durante-a-graduacao">
      <ProjetosEmDestaque />
      <Ciframento />
      <Radreader />
      <Crossbots />
    </section>
  );
}
