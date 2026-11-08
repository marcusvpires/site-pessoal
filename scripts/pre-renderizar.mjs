import { createHash } from "node:crypto";
import { readFile, rm, writeFile } from "node:fs/promises";

const CAMINHO_DO_HTML = "dist/index.html";
const CAMINHO_DA_CONFIGURACAO_DA_VERCEL = "vercel.json";
const PASTA_DO_BUILD_DE_SERVIDOR = "dist-servidor";

const { renderizarPagina } = await import(`../${PASTA_DO_BUILD_DE_SERVIDOR}/entry-server.js`);
const { conteudo, scriptDeHidratacao } = renderizarPagina();
const modeloDaPagina = await readFile(CAMINHO_DO_HTML, "utf8");

const paginaPreRenderizada = modeloDaPagina
  .replace("</head>", `${scriptDeHidratacao}</head>`)
  .replace('<div id="root"></div>', `<div id="root">${conteudo}</div>`);

await writeFile(CAMINHO_DO_HTML, paginaPreRenderizada);
await rm(PASTA_DO_BUILD_DE_SERVIDOR, { recursive: true, force: true });

const politicaDeSeguranca = (await readFile(CAMINHO_DA_CONFIGURACAO_DA_VERCEL, "utf8")).match(/"Content-Security-Policy",\s*"value":\s*"([^"]+)"/)[1];
const scriptsInlineExecutaveis = [...paginaPreRenderizada.matchAll(/<script(?![^>]*\bsrc=)(?![^>]*application\/ld\+json)[^>]*>([\s\S]*?)<\/script>/g)].map(
  ([, codigo]) => codigo,
);
const hashesAusentesDaPolitica = scriptsInlineExecutaveis
  .map((codigo) => `'sha256-${createHash("sha256").update(codigo).digest("base64")}'`)
  .filter((hash) => !politicaDeSeguranca.includes(hash));

if (hashesAusentesDaPolitica.length > 0) {
  throw new Error(`Script inline fora da Content-Security-Policy do vercel.json. Incluir em script-src: ${hashesAusentesDaPolitica.join(" ")}`);
}
