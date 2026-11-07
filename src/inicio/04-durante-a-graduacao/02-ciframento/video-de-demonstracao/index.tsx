import { onCleanup, onMount, type JSX } from "solid-js";

const FRACAO_VISIVEL_PARA_REPRODUZIR = 0.4;

export function VideoDeDemonstracao(props: { class?: string }): JSX.Element {
  let video!: HTMLVideoElement;

  onMount(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observador = new IntersectionObserver(
      ([entrada]) => (entrada.isIntersecting ? video.play().catch(() => undefined) : video.pause()),
      { threshold: FRACAO_VISIVEL_PARA_REPRODUZIR },
    );
    observador.observe(video);
    onCleanup(() => observador.disconnect());
  });

  return (
    <video
      ref={video}
      poster="/media/demo-celular-poster.webp"
      width={720}
      height={1280}
      muted
      loop
      playsinline
      preload="metadata"
      aria-label="Demonstração do Ciframento no celular e no computador"
      class={`h-auto w-full rounded-2xl bg-black ${props.class ?? ""}`}
    >
      <source src="/media/demo-celular-e-pc.mp4" type="video/mp4" />
      <source src="/media/demo-celular-e-pc.webm" type="video/webm" />
    </video>
  );
}
