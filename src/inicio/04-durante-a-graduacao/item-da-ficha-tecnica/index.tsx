import type { JSX } from "solid-js";

export function ItemDaFichaTecnica(props: { rotulo: string; children: JSX.Element }): JSX.Element {
  return (
    <>
      <dt class="text-base-content/65">{props.rotulo}</dt>
      <dd class="flex flex-wrap gap-x-5 gap-y-1">{props.children}</dd>
    </>
  );
}
