import type { JSX } from "solid-js";

export function Sobre(): JSX.Element {
  return (
    <section id="sobre" data-theme="perfil-claro" class="bg-base-100 py-secao text-base-content">
      <div class="largura-do-conteudo grid gap-x-10 gap-y-10 lg:grid-cols-12">
        <h2 class="text-titulo-de-secao font-medium lg:col-span-5">Sobre</h2>
        <div class="space-y-5 text-destaque text-base-content/75 lg:col-span-6 lg:col-start-7">
          <p>
            Busco minha primeira oportunidade na indústria (estágio) para somar vivência acadêmica e projetos próprios à escala do mercado
            corporativo.
          </p>
          <p>
            Durante a graduação, fui o autor do Ciframento, registrado no INPI, e desenvolvi o sistema de controle de uma leitora clínica em um
            projeto de pesquisa com bolsa do CNPq. Também atuei por 4 anos na programação de robôs da equipe CROSSBOTS, da UTFPR.
          </p>
        </div>

        <dl class="mt-8 grid grid-cols-2 gap-x-10 gap-y-10 border-t border-base-300 pt-10 lg:col-span-12 lg:grid-cols-4">
          <div>
            <dt class="sr-only">Registro</dt>
            <dd class="text-numero-em-destaque font-medium">INPI</dd>
            <dd class="mt-2 text-base-content/60">Software de minha autoria registrado</dd>
          </div>
          <div>
            <dt class="sr-only">Pesquisa</dt>
            <dd class="text-numero-em-destaque font-medium">CNPq</dd>
            <dd class="mt-2 text-base-content/60">Bolsas de iniciação científica: 2023–24, 2024–25 e 2025–26</dd>
          </div>
          <div>
            <dt class="sr-only">Trabalhos apresentados</dt>
            <dd class="text-numero-em-destaque font-medium">5</dd>
            <dd class="mt-2 text-base-content/60">Trabalhos apresentados, um deles internacional</dd>
          </div>
          <div>
            <dt class="sr-only">Robótica</dt>
            <dd class="text-numero-em-destaque font-medium">4 anos</dd>
            <dd class="mt-2 text-base-content/60">Equipe de robótica competitiva</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
