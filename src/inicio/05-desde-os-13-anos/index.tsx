import type { JSX } from "solid-js";

export function DesdeOs13Anos(): JSX.Element {
  return (
    <section id="desde-os-13-anos" data-theme="perfil-claro" class="bg-base-100 py-secao text-base-content">
      <div class="largura-do-conteudo grid gap-x-10 gap-y-12 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <h2 class="text-titulo-de-secao font-medium">Desde os 13 anos</h2>
          <p class="mt-6 max-w-[34ch] text-destaque text-base-content/75">Programo e monto eletrônica por hobby desde o primeiro Arduino, em 2017.</p>
        </div>

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:col-span-8 [&_figcaption]:mt-3 [&_figcaption]:text-sm [&_figcaption]:text-base-content/60 [&_img]:aspect-[3/4] [&_img]:w-full [&_img]:rounded-lg [&_img]:object-cover">
          <figure>
            <img src="/fotos/hobby-2017-arduino.jpg" alt="Arduino com display LCD montado em protoboard, 2017" loading="lazy" />
            <figcaption>Primeiro Arduino</figcaption>
          </figure>
          <figure>
            <img src="/fotos/hobby-2019-visita-fabrica.jpg" alt="Marcus em visita a uma linha de produção industrial, 2019" loading="lazy" class="object-[20%_50%]" />
            <figcaption>Visita a uma fábrica</figcaption>
          </figure>
          <figure>
            <img src="/fotos/hobby-2020-carrinho-rc.jpg" alt="Carrinho de controle remoto com Arduino, 2020" loading="lazy" />
            <figcaption>Carrinho de controle remoto</figcaption>
          </figure>
          <figure>
            <img src="/fotos/hobby-2021-braco-robotico.jpg" alt="Braço robótico controlado por joystick, 2021" loading="lazy" />
            <figcaption>Braço robótico com joystick</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
