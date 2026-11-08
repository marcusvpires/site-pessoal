import type { JSX } from "solid-js";
import logoRust from "simple-icons/icons/rust.svg?raw";
import logoTypescript from "simple-icons/icons/typescript.svg?raw";
import logoNodered from "simple-icons/icons/nodered.svg?raw";
import { LogoDeTecnologia } from "../../logo-de-tecnologia";
import { FichaTecnica } from "../ficha-tecnica";
import { ItemDaFichaTecnica } from "../item-da-ficha-tecnica";
import { TrabalhosApresentados } from "./trabalhos-apresentados";

export function Radreader(): JSX.Element {
  return (
    <article id="radreader" data-theme="perfil-claro" class="bg-base-100 py-secao text-base-content">
      <div class="largura-do-conteudo grid gap-x-10 gap-y-14 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <p class="text-base-content/65">Sistema de controle · pesquisa com bolsa CNPq</p>
          <h3 class="mt-2 text-titulo-de-projeto font-medium">RADreader</h3>
          <p class="mt-5 max-w-[46ch] text-destaque text-base-content/80">
            Leitora clínica de radiação por dosímetros passivos, desenvolvida em iniciação científica da UTFPR com a USP e a Unifesp.
          </p>
          <div class="mt-10">
            <FichaTecnica>
              <ItemDaFichaTecnica rotulo="Aquecimento">Rampa controlada até 500 °C</ItemDaFichaTecnica>
              <ItemDaFichaTecnica rotulo="Sincronização">Ordem de microssegundos</ItemDaFichaTecnica>
              <ItemDaFichaTecnica rotulo="Software">
                <LogoDeTecnologia svg={logoRust} nome="Rust" />
                <LogoDeTecnologia svg={logoTypescript} nome="TypeScript" />
                <LogoDeTecnologia svg={logoNodered} nome="Node-RED" />
              </ItemDaFichaTecnica>
              <ItemDaFichaTecnica rotulo="Orientação">
                <span class="block">Profa. Anna Luiza Malthez</span>
                <span class="block">Profa. Dra. Danielle Filipov Pereira</span>
              </ItemDaFichaTecnica>
            </FichaTecnica>
          </div>
        </div>

        <div class="grid gap-5 self-center sm:grid-cols-[3fr_2fr] lg:col-span-7 [&_figcaption]:mt-3 [&_figcaption]:text-sm [&_figcaption]:text-base-content/65 [&_img]:w-full [&_img]:rounded-lg">
          <figure>
            <img src="/fotos/radreader-simulacao-temperaturas.jpg" width="1172" height="691" alt="Simulação de temperatura nos componentes da câmara de leitura" loading="lazy" />
            <figcaption>Simulação de temperatura da câmara de leitura</figcaption>
          </figure>
          <figure>
            <img src="/fotos/radreader-simulacao-conveccao.jpg" width="573" height="473" alt="Simulação de fluxo de ar dentro da câmara de leitura" loading="lazy" />
            <figcaption>Simulação de fluxo de ar</figcaption>
          </figure>
        </div>

        <div class="lg:col-span-12">
          <TrabalhosApresentados />
        </div>
      </div>
    </article>
  );
}
