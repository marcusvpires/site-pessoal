import type { JSX } from "solid-js";
import logoCplusplus from "simple-icons/icons/cplusplus.svg?raw";
import logoArduino from "simple-icons/icons/arduino.svg?raw";
import logoEspressif from "simple-icons/icons/espressif.svg?raw";
import { LogoDeTecnologia } from "../../logo-de-tecnologia";
import { FichaTecnica } from "../ficha-tecnica";
import { ItemDaFichaTecnica } from "../item-da-ficha-tecnica";

export function Crossbots(): JSX.Element {
  return (
    <article id="crossbots" class="bg-base-200 py-secao">
      <div class="largura-do-conteudo grid gap-x-10 gap-y-14 lg:grid-cols-12">
        <div class="grid grid-cols-2 gap-4 self-center lg:col-span-7 [&_img]:size-full [&_img]:rounded-lg [&_img]:object-cover">
          <img src="/fotos/crossbots-rcx-2024.jpg" alt="Equipe CROSSBOTS na RCX 2024" loading="lazy" class="col-span-2 aspect-[16/9]" />
          <img src="/fotos/crossbots-montando-robos.jpg" alt="Preparação dos robôs autônomos" loading="lazy" class="aspect-square" />
          <img src="/fotos/crossbots-pits.jpg" alt="Ajustes nos pits durante a competição" loading="lazy" class="aspect-square" />
        </div>

        <div class="self-center lg:col-span-4 lg:col-start-9">
          <p class="text-base-content/55">Programação em equipe · 4 anos</p>
          <h3 class="mt-2 text-titulo-de-projeto font-medium">CROSSBOTS</h3>
          <p class="mt-5 text-destaque text-base-content/80">Equipe de robótica competitiva da UTFPR, programando robôs autônomos.</p>
          <div class="mt-10">
            <FichaTecnica>
              <ItemDaFichaTecnica rotulo="Tecnologias">
                <LogoDeTecnologia svg={logoCplusplus} nome="C++" />
                <LogoDeTecnologia svg={logoArduino} nome="Arduino" />
                <LogoDeTecnologia svg={logoEspressif} nome="ESP32" />
              </ItemDaFichaTecnica>
              <ItemDaFichaTecnica rotulo="Categorias">Mini-sumô, micromouse e artbot</ItemDaFichaTecnica>
              <ItemDaFichaTecnica rotulo="Liderança">Robô de mini-sumô Chapisco</ItemDaFichaTecnica>
              <ItemDaFichaTecnica rotulo="Competições">Copa Pinhão 2023, RCX 2023 e RCX 2024</ItemDaFichaTecnica>
            </FichaTecnica>
          </div>
        </div>
      </div>
    </article>
  );
}
