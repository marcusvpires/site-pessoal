import type { JSX } from "solid-js";

export function FichaTecnica(props: { children: JSX.Element }): JSX.Element {
  return <dl class="grid grid-cols-[6.5rem_1fr] gap-x-6 gap-y-3 text-[0.95rem]">{props.children}</dl>;
}
