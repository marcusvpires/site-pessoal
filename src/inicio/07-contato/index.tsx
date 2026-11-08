import { createSignal, type JSX } from "solid-js";
import { RedesProfissionais } from "../redes-profissionais";

const ENDERECO_DE_EMAIL = "marcus.vinicius.mvap@gmail.com";
const DURACAO_DO_AVISO_DE_COPIA_MS = 1800;

export function Contato(): JSX.Element {
  const [emailCopiado, setEmailCopiado] = createSignal(false);

  const copiarEmail = () =>
    navigator.clipboard?.writeText(ENDERECO_DE_EMAIL).then(() => {
      setEmailCopiado(true);
      setTimeout(() => setEmailCopiado(false), DURACAO_DO_AVISO_DE_COPIA_MS);
    });

  return (
    <footer id="contato" class="bg-azul-do-retrato text-[#f1f1f1]">
      <div class="largura-do-conteudo pt-secao pb-10">
        <h2 class="text-titulo-de-secao font-medium">Contato</h2>
        <p class="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-3">
          <a href={`mailto:${ENDERECO_DE_EMAIL}`} class="text-titulo-de-projeto font-medium break-all transition-opacity hover:opacity-80">
            {ENDERECO_DE_EMAIL}
          </a>
          <button type="button" onClick={copiarEmail} aria-live="polite" class="text-white/60 transition-colors hover:text-white">
            {emailCopiado() ? "Copiado" : "Copiar"}
          </button>
        </p>
        <div class="mt-8 text-white/80">
          <RedesProfissionais />
        </div>

        <div class="mt-24 flex flex-wrap justify-between gap-3 border-t border-white/15 pt-6 text-sm text-white/55">
          <span>© 2026 Marcus Vinícius Almeida Pires. Todos os direitos reservados.</span>
          <span>Este site não usa cookies. As visitas são contadas de forma anônima.</span>
        </div>
      </div>
    </footer>
  );
}
