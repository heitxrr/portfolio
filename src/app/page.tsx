import React from "react";

import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Cabecalho />
      <Rodape />
    </div>
  );
};

export default Home;
