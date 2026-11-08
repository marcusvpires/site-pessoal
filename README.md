# Site pessoal

Perfil profissional de Marcus Vinícius Almeida Pires, em https://www.maquinadomundo.com.br/. Vite, SolidJS, Tailwind e tema do daisyUI.

<p align="center">
  <img src="print.jpg" alt="Primeira tela do site pessoal" width="820">
  <br>
  <sub>Primeira tela em 07/11/2026.</sub>
</p>

## Rodar

```
nvm use 22
npm install
npm run dev      # http://localhost:3000
npm run build    # saída em dist/, com a página já renderizada no HTML
```

## Estrutura

Cada componente é uma pasta com `index.tsx`; os números seguem a ordem da página.

```
src/
  index.tsx, index.css
  inicio/
    01-cabecalho/  02-abertura/  03-sobre/
    04-durante-a-graduacao/  01-projetos-em-destaque/  02-ciframento/  03-radreader/  04-crossbots/
    05-desde-os-13-anos/  06-competencias/  07-contato/
public/
  fotos/  certificados/  media/
```

Conteúdo escrito direto no JSX. Ícones importados um a um (`lucide-solid/icons/<nome>`, `simple-icons/icons/<nome>.svg?raw`).

## Build

`npm run build` gera o site em `dist/`, roda a página no servidor (`src/entry-server.tsx`) e grava o HTML pronto em `dist/index.html` (`scripts/pre-renderizar.mjs`). No navegador, `src/index.tsx` hidrata esse HTML.

## Busca

- `index.html`: título, descrição, URL canônica, Open Graph e dados estruturados (JSON-LD: `WebSite`, `ProfilePage` e `Person`).
- A cada mudança de conteúdo: `lastmod` em `public/sitemap.xml` e `dateModified` do `ProfilePage` em `index.html`.
- `public/robots.txt` libera todos os robôs, inclusive os de busca por IA.
- Links para LinkedIn, GitHub e Lattes com `rel="me"`: indicam que os perfis são da mesma pessoa.
- `public/compartilhamento.jpg` (1200 × 630): imagem dos links compartilhados.
- `public/favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icone-192.png`, `icone-512.png` e `site.webmanifest`.

## Privacidade, segurança e direitos

- Sem cookies e sem requisições a terceiros: as fontes ficam em `public/fontes/`. Visitas contadas pelo Vercel Web Analytics e tempo de carregamento medido pelo Vercel Speed Insights (`inject()` e `injectSpeedInsights()` em `src/index.tsx`), sem cookies e sem identificar o visitante; os scripts vêm do próprio domínio (`/_vercel/insights/` e `/_vercel/speed-insights/`), por isso a CSP não muda. Se algum serviço externo entrar (análise de acesso, fontes, vídeos), revisar a frase do rodapé e o `Content-Security-Policy`.
- `vercel.json`: cabeçalhos de segurança (CSP, HSTS, nosniff, Referrer-Policy, Permissions-Policy, COOP, CORP) e cache longo de `fontes/` e `assets/`.
- A CSP só aceita o script inline de hidratação do Solid, pelo hash. O build confere o hash e falha se ele mudar (atualização do `solid-js`); a mensagem de erro traz o hash novo para colocar em `script-src`.
- `public/404.html`: página de endereço inexistente.
- `public/.well-known/security.txt`: contato para relato de falhas; renovar `Expires` antes de 07/11/2027.
- `LICENSE`: conteúdo com todos os direitos reservados. O ano do copyright no rodapé (`src/inicio/07-contato/`) é fixo: atualizar a cada ano.

## Imagens

Fotos em WebP, sem metadados, com versão reduzida para celular (`-800.webp`, `-720.webp`) declarada em `srcset`. Contraste de texto no mínimo 4,5:1 (WCAG AA): cinza claro não abaixo de `text-base-content/60` nas seções claras.
