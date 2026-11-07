import type { JSX } from "solid-js";
import ArrowUpRight from "lucide-solid/icons/arrow-up-right";
import BrainCircuit from "lucide-solid/icons/brain-circuit";
import Database from "lucide-solid/icons/database";
import Wifi from "lucide-solid/icons/wifi";
import Printer from "lucide-solid/icons/printer";
import Languages from "lucide-solid/icons/languages";
import logoTypescript from "simple-icons/icons/typescript.svg?raw";
import logoPython from "simple-icons/icons/python.svg?raw";
import logoCplusplus from "simple-icons/icons/cplusplus.svg?raw";
import logoDassaultSystemes from "simple-icons/icons/dassaultsystemes.svg?raw";
import { LogoDeTecnologia } from "../logo-de-tecnologia";

export function Competencias(): JSX.Element {
  return (
    <section id="competencias" class="bg-base-100 py-secao">
      <div class="largura-do-conteudo">
        <h2 class="text-titulo-de-secao font-medium">Competências</h2>

        <div class="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 [&_h3]:mb-5 [&_h3]:text-base-content/50 [&_li]:flex [&_li]:items-center [&_li]:gap-2 [&_svg]:size-[1em] [&_svg]:shrink-0 [&_ul]:space-y-3 [&_ul]:text-lg">
          <div>
            <h3>Software</h3>
            <ul>
              <li>
                <LogoDeTecnologia svg={logoTypescript} nome="TypeScript" />
              </li>
              <li>
                <LogoDeTecnologia svg={logoPython} nome="Python" />
              </li>
              <li>
                <BrainCircuit aria-hidden="true" />
                IA
              </li>
              <li>
                <Database aria-hidden="true" />
                Banco de dados
              </li>
            </ul>
          </div>
          <div>
            <h3>Embarcados</h3>
            <ul>
              <li>
                <LogoDeTecnologia svg={logoCplusplus} nome="C/C++" />
              </li>
              <li>
                <Wifi aria-hidden="true" />
                IoT
              </li>
            </ul>
          </div>
          <div>
            <h3>Mecânica</h3>
            <ul>
              <li>
                <LogoDeTecnologia svg={logoDassaultSystemes} nome="SolidWorks" />
              </li>
              <li>
                <Printer aria-hidden="true" />
                Impressão 3D
              </li>
            </ul>
          </div>
          <div>
            <h3>Idiomas</h3>
            <ul>
              <li>
                <Languages aria-hidden="true" />
                Inglês
              </li>
            </ul>
          </div>
        </div>

        <a
          href="https://github.com/marcusvpires"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-14 inline-flex items-center gap-2 text-base-content/75 transition-colors hover:text-base-content"
        >
          Código no GitHub
          <ArrowUpRight class="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
