import { createSignal, onCleanup, onMount, type JSX } from "solid-js";

/** Desenho de tamanho fixo reduzido por transform até caber na largura do container; medidas internas não mudam com a escala. */
export function DesenhoEmEscala(props: { largura: number; altura: number; class?: string; children: JSX.Element }): JSX.Element {
  let container!: HTMLDivElement;
  const [escala, setEscala] = createSignal(0);

  onMount(() => {
    const medirEscala = () => setEscala(Math.min(1, container.clientWidth / props.largura));
    const observador = new ResizeObserver(medirEscala);
    observador.observe(container);
    medirEscala();
    onCleanup(() => observador.disconnect());
  });

  return (
    <div
      ref={container}
      class={`relative w-full ${props.class ?? ""}`}
      style={{ "aspect-ratio": `${props.largura} / ${props.altura}`, "max-width": `${props.largura}px` }}
    >
      <div
        class="absolute left-0 top-0 origin-top-left transition-opacity duration-300"
        style={{ width: `${props.largura}px`, height: `${props.altura}px`, transform: `scale(${escala()})`, opacity: escala() ? 1 : 0 }}
      >
        {props.children}
      </div>
    </div>
  );
}
