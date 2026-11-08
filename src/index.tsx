/* @refresh reload */
import "./index.css";
import { hydrate, render } from "solid-js/web";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";
import "solid-devtools";
import Inicio from "./inicio";

const raizDaPagina = document.getElementById("root")!;
const montarPagina = raizDaPagina.hasChildNodes() ? hydrate : render;

montarPagina(() => <Inicio />, raizDaPagina);
inject();
injectSpeedInsights();
