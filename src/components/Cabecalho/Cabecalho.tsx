import React from 'react';

const Cabecalho: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#sobre" className="hover:text-gray-400">Sobre</a></li>
                    <li><a href="#habilidades" className="hover:text-gray-400">Habilidades</a></li>
                    <li><a href="#projetos" className="hover:text-gray-400">Projetos</a></li>
                    <li><a href="#contato" className="hover:text-gray-400">Contato</a></li>
                    <li><a href="#curriculo" className="hover:text-gray-400">Currículo</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Cabecalho;
