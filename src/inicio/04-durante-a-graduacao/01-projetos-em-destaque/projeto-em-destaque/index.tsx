import type { JSX } from "solid-js";
import ArrowRight from "lucide-solid/icons/arrow-right";

export function ProjetoEmDestaque(props: {
  ancora: string;
  nome: string;
  papel: string;
  imagem: string;
  descricaoDaImagem: string;
  enquadramentoDaImagem?: string;
}): JSX.Element {
  return (
    <a href={props.ancora} class="group relative block aspect-[4/3] overflow-hidden rounded-lg bg-base-200 sm:aspect-[3/4]">
      <img
        src={props.imagem}
        alt={props.descricaoDaImagem}
        loading="lazy"
        class={`absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${props.enquadramentoDaImagem ?? ""}`}
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" aria-hidden="true" />
      <div class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
        <div>
          <p class="text-sm text-white/70">{props.papel}</p>
          <h3 class="mt-1 text-2xl font-medium tracking-tight">{props.nome}</h3>
        </div>
        <ArrowRight class="mb-1 size-5 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </a>
  );
}
