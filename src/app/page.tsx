import React from "react";

import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import BalaoSobreMim from "@/components/BalaoSobreMim/BalaoSobreMim";
import Logo from "@/img/logo-rodape-temporario.png";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Cabecalho/>
      <BalaoSobreMim title="Meu Portfólio" description="Seja bem-vindo(a) ao meu portfólio! Meu nome é Heitor e aqui você encontrará diversas informações sobre mim e meus projetos" img={Logo} />
      <Rodape />
    </div>
  );
};

export default Home;
