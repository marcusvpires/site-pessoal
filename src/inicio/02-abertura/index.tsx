import type { JSX } from "solid-js";
import ArrowDown from "lucide-solid/icons/arrow-down";
import MapPin from "lucide-solid/icons/map-pin";
import { RedesProfissionais } from "../redes-profissionais";

export function Abertura(): JSX.Element {
  return (
    <section id="inicio" class="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#0f0f0f] text-[#f1f1f1]">
      <div
        class="absolute inset-0 -z-10 bg-azul-do-retrato [clip-path:polygon(78%_0,100%_0,100%_100%,52%_100%)] lg:[clip-path:polygon(70%_0,100%_0,100%_100%,46%_100%)]"
        aria-hidden="true"
      />

      <div class="largura-do-conteudo grid flex-1 items-end gap-x-10 pt-28 lg:grid-cols-12">
        <div class="self-center pb-16 lg:col-span-7 lg:pb-24">
          <p class="flex items-center gap-2 text-white/70">
            <MapPin class="size-4" aria-hidden="true" />
            Curitiba, PR
          </p>
          <h1 class="mt-6 text-nome-na-abertura font-medium">
            Marcus Vinícius
            <br />
            Almeida Pires
            <span class="cursor-de-texto" aria-hidden="true" />
          </h1>
          <p class="mt-8 max-w-[36ch] text-destaque text-white/80">
            Estudante de Engenharia de Controle e Automação na UTFPR e programador com base em Python, C/C++ e TypeScript.
          </p>
          <div class="mt-10 text-white/75">
            <RedesProfissionais />
          </div>
        </div>

        <img
          src="/fotos/retrato-computador.webp"
          srcset="/fotos/retrato-computador-800.webp 800w, /fotos/retrato-computador.webp 1100w"
          sizes="(min-width: 1024px) 34rem, min(26rem, calc(100vw - 2rem))"
          alt="Marcus segurando o notebook aberto no editor de código"
          width="1100"
          height="1320"
          fetchpriority="high"
          class="revelar-retrato mx-auto w-full max-w-[26rem] self-end lg:col-span-5 lg:mr-0 lg:max-w-[34rem]"
        />
      </div>

      <a
        href="#sobre"
        class="largura-do-conteudo absolute inset-x-0 bottom-6 hidden items-center gap-2 text-sm text-white/55 transition-colors hover:text-white lg:flex"
      >
        <ArrowDown class="size-4 motion-safe:animate-bounce" aria-hidden="true" />
        Conheça os projetos
      </a>
    </section>
  );
}
