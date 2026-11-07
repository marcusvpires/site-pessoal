import { createSignal, For, onCleanup, onMount, Show, type JSX } from "solid-js";
import ArrowLeft from "lucide-solid/icons/arrow-left";
import Plane from "lucide-solid/icons/plane";
import Play from "lucide-solid/icons/play";
import { DesenhoEmEscala } from "./desenho-em-escala";
import "./mock-aplicativo.css";

type LinhaDaCifra = { tipo: "secao"; titulo: string } | { tipo: "verso"; acordes: string; letra: string };

const REFRAO: LinhaDaCifra[] = [
  { tipo: "secao", titulo: "[Refrão]" },
  { tipo: "verso", acordes: "A            E", letra: "Mais uma vez" },
  { tipo: "verso", acordes: "F#m         D", letra: "eu me perdi" },
  { tipo: "verso", acordes: "A            E", letra: "E nessa tela" },
  { tipo: "verso", acordes: "F#m         D", letra: "não vou seguir" },
];
const CIFRA_NO_CELULAR = [...REFRAO, ...REFRAO];
const MAIOR_FONTE_NO_CELULAR_PX = 30;
const INTERVALO_ENTRE_PALAVRAS_MS = 420;
const ALTURA_DA_LINHA_ATIVA_NA_TELA = 0.32;

const CIFRA_NO_EDITOR = `[Primeira Parte]
F#m              B5(9)
Telas e cifras e rolagem vazia
         A5(9)           E
O que eu falo não reconheceu
F#m                  B5(9)
Mais nesse compasso. Não escuta
         A5(9)           E
E o constante já me convenceu

[Refrão]
A            E
Mais uma vez
F#m         D
eu me perdi
A            E
E nessa tela
F#m         D
não vou seguir`;

/** Maior fonte, até o limite, em que a linha mais longa da cifra cabe na largura do elemento sem quebrar. */
function maiorFonteSemQuebrarLinha(elementoDaCifra: HTMLElement): number {
  const sonda = document.createElement("span");
  sonda.style.fontSize = "100px";
  sonda.textContent = "0".repeat(20);
  elementoDaCifra.append(sonda);
  const larguraDoCaracterePorPxDeFonte = sonda.getBoundingClientRect().width / 20 / 100;
  sonda.remove();
  const estilo = getComputedStyle(elementoDaCifra);
  const larguraUtil = elementoDaCifra.clientWidth - parseFloat(estilo.paddingLeft) - parseFloat(estilo.paddingRight);
  const caracteresDaLinhaMaisLonga = Math.max(
    ...CIFRA_NO_CELULAR.map((linha) => (linha.tipo === "secao" ? linha.titulo.length : Math.max(linha.acordes.length, linha.letra.length))),
  );
  return Math.min(MAIOR_FONTE_NO_CELULAR_PX, Math.floor((larguraUtil / caracteresDaLinhaMaisLonga / larguraDoCaracterePorPxDeFonte) * 10) / 10);
}

/** Destaca uma palavra por vez e rola a cifra; pausa enquanto o celular está fora da tela. */
function Celular(props: { posicao: JSX.CSSProperties }): JSX.Element {
  let celular!: HTMLDivElement;
  let areaDaCifra!: HTMLDivElement;
  let cifra!: HTMLDivElement;
  let relogio: ReturnType<typeof setInterval> | undefined;
  let observador: IntersectionObserver | undefined;

  onCleanup(() => {
    clearInterval(relogio);
    observador?.disconnect();
  });

  onMount(async () => {
    await document.fonts?.ready;
    cifra.style.fontSize = `${maiorFonteSemQuebrarLinha(cifra)}px`;
    const palavras = Array.from(cifra.querySelectorAll<HTMLElement>(".palavra"));
    let indiceDaPalavra = 0;
    const avancarPalavra = () => {
      palavras.forEach((palavra, indice) => palavra.classList.toggle("cantada", indice === indiceDaPalavra));
      const linhaDaPalavra = palavras[indiceDaPalavra].parentElement!;
      const deslocamento = linhaDaPalavra.offsetTop - areaDaCifra.clientHeight * ALTURA_DA_LINHA_ATIVA_NA_TELA;
      cifra.style.transform = `translateY(${-Math.max(0, deslocamento)}px)`;
      indiceDaPalavra = (indiceDaPalavra + 1) % palavras.length;
    };
    avancarPalavra();
    observador = new IntersectionObserver(([entrada]) => {
      clearInterval(relogio);
      if (entrada.isIntersecting) relogio = setInterval(avancarPalavra, INTERVALO_ENTRE_PALAVRAS_MS);
    });
    observador.observe(celular);
  });

  return (
    <div ref={celular} class="celular" style={props.posicao}>
      <div class="tela">
        <div class="ilha" />
        <div class="barra-de-status">
          <span>9:41</span>
          <Plane class="h-5 w-5 text-secondary" fill="currentColor" aria-label="Modo avião" />
        </div>
        <div class="cabecalho">
          <div>
            <b>Telas e Cifras</b>
            <span>Marcus Vinícius</span>
          </div>
          <div class="ouvindo">
            <i />
            Ouvindo
          </div>
        </div>
        <div ref={areaDaCifra} class="area-da-cifra">
          <div ref={cifra} class="cifra font-mono">
            <For each={CIFRA_NO_CELULAR}>
              {(linha) =>
                linha.tipo === "secao" ? (
                  <div class="secao">
                    <span class="titulo-da-secao">{linha.titulo}</span>
                  </div>
                ) : (
                  <>
                    <div>
                      <span class="acorde">{linha.acordes}</span>
                    </div>
                    <div>
                      <For each={linha.letra.split(" ")}>
                        {(palavra, indice) => (
                          <>
                            {indice() > 0 && " "}
                            <span class="palavra">{palavra}</span>
                          </>
                        )}
                      </For>
                    </div>
                  </>
                )
              }
            </For>
          </div>
        </div>
      </div>
    </div>
  );
}

function EditorDoStudio(props: { posicao: JSX.CSSProperties }): JSX.Element {
  return (
    <div class="janela" style={props.posicao}>
      <div class="barra">
        <i />
        <i />
        <i />
      </div>
      <div class="editor">
        <header>
          <ArrowLeft class="h-4 w-4 opacity-60" />
          <div class="nome">
            <b>Telas e Cifras</b>
            <span>Marcus Vinícius</span>
          </div>
          <span class="botao">Ver no player</span>
          <span class="botao">Trocar áudio</span>
          <span class="botao principal">Atualizar</span>
        </header>
        <div class="colunas">
          <section class="ver">
            <nav class="abas">
              <span>Resultado</span>
              <span class="ativa">Desvios</span>
              <span>Tokens</span>
            </nav>
            <div class="desvios">
              <div>
                Telas e cifras e <span class="w tocando">rolagem</span> vazia
              </div>
              <div>
                O que eu falo não{" "}
                <span class="w aprox">
                  reconheceu<small>conheceu</small>
                </span>
              </div>
              <div>Mais nesse compasso. Não escuta o que eu falo</div>
              <div>E o constante já me convenceu</div>
              <div class="extra">ê ê</div>
              <div class="vazia" />
              <div>
                Mais uma vez <span class="vezes">2×</span>
              </div>
              <div>eu me perdi</div>
              <div>E nessa tela</div>
              <div>
                <span class="w nao">não</span> vou seguir
              </div>
            </div>
            <div class="tocador">
              <span class="play">
                <Play class="h-3 w-3" fill="currentColor" />
              </span>
              <span class="tempo">0:41 / 2:05</span>
              <span class="trilha" />
            </div>
          </section>
          <section class="texto-cifra">
            <div class="topo">
              <span>Cifra</span>
              <span>Ctrl+S para atualizar</span>
            </div>
            <pre class="font-mono">{CIFRA_NO_EDITOR}</pre>
          </section>
        </div>
      </div>
    </div>
  );
}

/** Editor e celular juntos; em tela estreita só o celular, que é o único a medir a fonte e não pode ficar oculto. */
export function MockAplicativo(): JSX.Element {
  const [telaEstreita, setTelaEstreita] = createSignal(false);
  onMount(() => {
    const consultaDeLargura = window.matchMedia("(max-width: 767px)");
    const lerLargura = () => setTelaEstreita(consultaDeLargura.matches);
    lerLargura();
    consultaDeLargura.addEventListener("change", lerLargura);
    onCleanup(() => consultaDeLargura.removeEventListener("change", lerLargura));
  });
  return (
    <Show
      when={telaEstreita()}
      fallback={
        <DesenhoEmEscala largura={1200} altura={760} class="mx-auto">
          <div class="mock-aplicativo relative h-full w-full">
            <EditorDoStudio posicao={{ left: "0px", top: "80px", width: "900px", height: "620px" }} />
            <Celular posicao={{ left: "800px", top: "20px" }} />
          </div>
        </DesenhoEmEscala>
      }
    >
      <DesenhoEmEscala largura={400} altura={740} class="mx-auto max-w-[300px]">
        <div class="mock-aplicativo relative h-full w-full">
          <Celular posicao={{ left: "10px", top: "10px" }} />
        </div>
      </DesenhoEmEscala>
    </Show>
  );
}

export function MockEditorDoStudio(): JSX.Element {
  return (
    <DesenhoEmEscala largura={900} altura={620}>
      <div class="mock-aplicativo relative h-full w-full">
        <EditorDoStudio posicao={{ left: "0px", top: "0px", width: "900px", height: "620px", opacity: 1 }} />
      </div>
    </DesenhoEmEscala>
  );
}
