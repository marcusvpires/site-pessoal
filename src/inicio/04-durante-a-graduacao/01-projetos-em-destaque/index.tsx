import type { JSX } from "solid-js";
import { ProjetoEmDestaque } from "./projeto-em-destaque";

export function ProjetosEmDestaque(): JSX.Element {
  return (
    <div class="bg-base-100 py-secao">
      <div class="largura-do-conteudo">
        <h2 class="text-titulo-de-secao font-medium">Durante a graduação</h2>
        <div class="mt-12 grid gap-5 sm:grid-cols-3">
          <ProjetoEmDestaque
            ancora="#ciframento"
            nome="Ciframento"
            papel="Autor · registro no INPI"
            imagem="/media/demo-celular-poster.webp"
            descricaoDaImagem="Cifra sincronizada com a música no aplicativo do Ciframento"
          />
          <ProjetoEmDestaque
            ancora="#radreader"
            nome="RADreader"
            papel="Sistema de controle · bolsa CNPq"
            imagem="/fotos/ic-marcus-e-christian-isssd-2025.jpg"
            descricaoDaImagem="Marcus e Christian no XXV International Symposium on Solid State Dosimetry"
            enquadramentoDaImagem="object-[28%_50%]"
          />
          <ProjetoEmDestaque
            ancora="#crossbots"
            nome="CROSSBOTS"
            papel="Programação de robôs · 4 anos"
            imagem="/fotos/crossbots-rcx-2024.jpg"
            descricaoDaImagem="Equipe CROSSBOTS na RCX 2024"
            enquadramentoDaImagem="object-[50%_30%]"
          />
        </div>
      </div>
    </div>
  );
}
