import { generateHydrationScript, renderToString } from "solid-js/web";
import Inicio from "./inicio";

export function renderizarPagina(): { conteudo: string; scriptDeHidratacao: string } {
  return { conteudo: renderToString(() => <Inicio />), scriptDeHidratacao: generateHydrationScript() };
}
