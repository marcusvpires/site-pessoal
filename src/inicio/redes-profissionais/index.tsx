import type { JSX } from "solid-js";
import GraduationCap from "lucide-solid/icons/graduation-cap";
import Mail from "lucide-solid/icons/mail";
import logoGithub from "simple-icons/icons/github.svg?raw";
import logoLinkedin from "./logo-linkedin.svg?raw";
import { LogoDeTecnologia } from "../logo-de-tecnologia";

export function RedesProfissionais(): JSX.Element {
  return (
    <ul class="flex flex-wrap gap-x-8 gap-y-3 [&_a]:inline-flex [&_a]:items-center [&_a]:gap-2 [&_a]:transition-colors [&_a:hover]:opacity-75">
      <li>
        <a href="https://www.linkedin.com/in/m4rcusvinicius/" target="_blank" rel="me noopener noreferrer">
          <LogoDeTecnologia svg={logoLinkedin} nome="LinkedIn" />
        </a>
      </li>
      <li>
        <a href="https://github.com/marcusvpires" target="_blank" rel="me noopener noreferrer">
          <LogoDeTecnologia svg={logoGithub} nome="GitHub" />
        </a>
      </li>
      <li>
        <a href="http://lattes.cnpq.br/3468743778197473" target="_blank" rel="me noopener noreferrer">
          <GraduationCap class="size-[1.1em]" aria-hidden="true" />
          Lattes
        </a>
      </li>
      <li>
        <a href="mailto:marcus.vinicius.mvap@gmail.com">
          <Mail class="size-[1.1em]" aria-hidden="true" />
          E-mail
        </a>
      </li>
    </ul>
  );
}
