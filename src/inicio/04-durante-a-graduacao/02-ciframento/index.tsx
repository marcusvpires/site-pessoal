import type { JSX } from "solid-js";
import ArrowUpRight from "lucide-solid/icons/arrow-up-right";
import logoPython from "simple-icons/icons/python.svg?raw";
import logoSqlite from "simple-icons/icons/sqlite.svg?raw";
import logoFastapi from "simple-icons/icons/fastapi.svg?raw";
import logoSolid from "simple-icons/icons/solid.svg?raw";
import logoKotlin from "simple-icons/icons/kotlin.svg?raw";
import { LogoDeTecnologia } from "../../logo-de-tecnologia";
import { FichaTecnica } from "../ficha-tecnica";
import { ItemDaFichaTecnica } from "../item-da-ficha-tecnica";
import { MockAplicativo } from "./mock-aplicativo";
import { VideoDeDemonstracao } from "./video-de-demonstracao";

export function Ciframento(): JSX.Element {
  return (
    <article id="ciframento" class="bg-base-200 py-secao">
      <div class="largura-do-conteudo grid items-center gap-x-10 gap-y-14 lg:grid-cols-12">
        <div class="lg:col-span-6">
          <p class="text-base-content/55">Autor · registro no INPI</p>
          <h3 class="mt-2 text-titulo-de-projeto font-medium">Ciframento</h3>
          <p class="mt-5 max-w-[46ch] text-destaque text-base-content/80">
            Cifra que acompanha a música em tempo real, com IA local e sem internet. Resolve a leitura de cifras durante apresentações, sem custo
            operacional, e automatiza a produção de conteúdo para criadores.
          </p>
          <div class="mt-10 max-w-md">
            <FichaTecnica>
              <ItemDaFichaTecnica rotulo="Registro">INPI BR 51 2026 009329-5</ItemDaFichaTecnica>
              <ItemDaFichaTecnica rotulo="Backend">
                <LogoDeTecnologia svg={logoPython} nome="Python" />
                <LogoDeTecnologia svg={logoSqlite} nome="SQLite" />
                <LogoDeTecnologia svg={logoFastapi} nome="FastAPI" />
              </ItemDaFichaTecnica>
              <ItemDaFichaTecnica rotulo="Desktop">
                <LogoDeTecnologia svg={logoSolid} nome="SolidJS" />
              </ItemDaFichaTecnica>
              <ItemDaFichaTecnica rotulo="Celular">
                <LogoDeTecnologia svg={logoKotlin} nome="Kotlin" />
              </ItemDaFichaTecnica>
            </FichaTecnica>
          </div>
          <a
            href="https://ciframento-v08.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-10 inline-flex items-center gap-2 rounded-full bg-base-content px-5 py-2.5 text-[0.95rem] font-medium text-base-100 transition-opacity hover:opacity-85"
          >
            Conhecer o Ciframento
            <ArrowUpRight class="size-4" aria-hidden="true" />
          </a>
        </div>

        <figure class="mx-auto w-full max-w-[22rem] lg:col-span-4 lg:col-start-8">
          <VideoDeDemonstracao />
          <figcaption class="mt-3 text-sm text-base-content/55">Gravação real, no celular e no computador ao mesmo tempo.</figcaption>
        </figure>

        <div class="hidden lg:col-span-12 lg:mt-6 lg:block">
          <MockAplicativo />
        </div>
      </div>
    </article>
  );
}
