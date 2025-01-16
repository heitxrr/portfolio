import React from "react";

import LinkPadrao from "../LinkPadrao/LinkPadrao";

const Cabecalho: React.FC = () => {
  return (
    <header className=" p-4 ">
      <nav>
        <ul className="flex items-center justify-between w-full max-w-screen-xl mx-auto h-full">
          <li>
            <a>
              <LinkPadrao theme="light" href="/habilidades">
                Habilidades
              </LinkPadrao>
            </a>
          </li>
          <li>
            <a>
              <LinkPadrao theme="light" href="/projetos">
                Projetos
              </LinkPadrao>
            </a>
          </li>
          <li>
            <a>
              <LinkPadrao theme="light" href="/contato">
                Contato
              </LinkPadrao>
            </a>
          </li>
          <li>
            <a>
              <LinkPadrao theme="dark" href="/curriculo">
                Ver CV
              </LinkPadrao>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Cabecalho;
