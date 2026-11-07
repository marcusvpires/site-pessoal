import type { JSX } from "solid-js";

export function LogoDeTecnologia(props: { svg: string; nome: string }): JSX.Element {
  return (
    <span class="inline-flex items-center gap-2 whitespace-nowrap">
      <span innerHTML={props.svg} aria-hidden="true" class="size-[1em] shrink-0 [&>svg]:size-full [&>svg]:fill-current" />
      {props.nome}
    </span>
  );
}
