import { createSignal, onCleanup, onMount, type JSX } from "solid-js";

const ROLAGEM_PARA_FIXAR_O_FUNDO_PX = 24;

export function Cabecalho(): JSX.Element {
  const [paginaRolada, setPaginaRolada] = createSignal(false);

  onMount(() => {
    const atualizarFundo = () => setPaginaRolada(scrollY > ROLAGEM_PARA_FIXAR_O_FUNDO_PX);
    addEventListener("scroll", atualizarFundo, { passive: true });
    atualizarFundo();
    onCleanup(() => removeEventListener("scroll", atualizarFundo));
  });

  return (
    <>
      <a
        href="#conteudo"
        class="fixed top-3 left-3 z-50 -translate-y-24 rounded-md bg-base-content px-4 py-2 text-sm font-medium text-base-100 focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>
      <header
        class="fixed inset-x-0 top-0 z-40 text-[#f1f1f1] transition-colors duration-300"
        classList={{ "bg-[#0f0f0f] shadow-[0_1px_0_rgb(255_255_255/.08)]": paginaRolada() }}
      >
        <div class="largura-do-conteudo flex h-16 items-center justify-between gap-8">
          <a href="#inicio" class="font-medium tracking-tight">
            Marcus V. A. Pires
          </a>
          <nav class="flex gap-x-7 text-[0.95rem] text-white/65 [&>a]:transition-colors [&>a:hover]:text-white">
            <a href="#sobre" class="hidden sm:inline">
              Sobre
            </a>
            <a href="#durante-a-graduacao">Projetos</a>
            <a href="#competencias" class="hidden sm:inline">
              Competências
            </a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>
    </>
  );
}
