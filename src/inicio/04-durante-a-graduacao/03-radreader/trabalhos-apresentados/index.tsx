import type { JSX } from "solid-js";

export function TrabalhosApresentados(): JSX.Element {
  return (
    <table class="w-full text-left text-[0.95rem] [&_a]:text-base-content/70 [&_a]:underline [&_a]:decoration-base-content/25 [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:text-secondary [&_td]:border-t [&_td]:border-base-300 [&_td]:py-3.5 [&_td]:pr-6 [&_td]:align-top [&_th]:pr-6 [&_th]:pb-3 [&_th]:font-normal [&_th]:text-base-content/50">
      <caption class="mb-5 text-left text-destaque">Trabalhos apresentados</caption>
      <thead>
        <tr>
          <th>Ano</th>
          <th>Evento</th>
          <th class="hidden sm:table-cell">Autoria</th>
          <th class="text-right">Certificado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="tabular-nums">2026</td>
          <td>
            XXXI SICITE
            <span class="block text-base-content/55 sm:hidden">1º autor, apresentador</span>
          </td>
          <td class="hidden sm:table-cell">1º autor, apresentador</td>
          <td class="text-right">
            <a href="/certificados/2026-sicite.pdf" target="_blank">PDF</a>
          </td>
        </tr>
        <tr>
          <td class="tabular-nums">2025</td>
          <td>
            XXV International Symposium on Solid State Dosimetry
            <span class="block text-base-content/55 sm:hidden">2º autor, apresentador</span>
          </td>
          <td class="hidden sm:table-cell">2º autor, apresentador</td>
          <td class="text-right">
            <a href="/certificados/2025-isssd.pdf" target="_blank">PDF</a>
          </td>
        </tr>
        <tr>
          <td class="tabular-nums">2025</td>
          <td>
            SEI-SICITE
            <span class="block text-base-content/55 sm:hidden">1º autor, apresentador</span>
          </td>
          <td class="hidden sm:table-cell">1º autor, apresentador</td>
          <td class="text-right">
            <a href="/certificados/2025-sei-sicite-montagem.pdf" target="_blank">PDF</a>
          </td>
        </tr>
        <tr>
          <td class="tabular-nums">2025</td>
          <td>
            SEI-SICITE, dois trabalhos
            <span class="block text-base-content/55 sm:hidden">2º autor</span>
          </td>
          <td class="hidden sm:table-cell">2º autor</td>
          <td class="text-right whitespace-nowrap">
            <a href="/certificados/2025-sei-sicite-eletronica.pdf" target="_blank">PDF 1</a>
            <span class="text-base-content/30"> · </span>
            <a href="/certificados/2025-sei-sicite-eletronica-testes.pdf" target="_blank">PDF 2</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
