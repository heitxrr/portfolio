import React from "react";
import LinkPadrao from "@/components/LinkPadrao/LinkPadrao";


const Curriculo: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl">
                <h1 className="text-3xl font-bold text-center mb-6">Meu Currículo</h1>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Informações Pessoais</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Nome: Heitor</li>
                        <li>Idade: 19 anos</li>
                        <li>E-mail: heitorrrocha04@outlook.com</li>
                        <li>Residência: São Paulo - Vila Prudente</li>
                        <li>Telefone: (11)98119-4959</li>
                    </ul>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Experiência Profissional</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Auxiliar na RP Network ME - Instalação de câmeras e manutenção de computadores.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl font-semibold mb-2">Formação</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>CURSANDO|GRADUAÇÃO(2024-2025) - Análise e Desenvolvimento de Sistemas - FIAP</li>
                        <li>CURSANDO|INGLÊS(2022-2026) - Cultural Norte Americano - CNA</li>
                    </ul>
                </section>
                <section>
                    <ul className="font-light">Para ver mais informações, clique no botão abaixo!</ul>
                </section>
                <div className="mt-8 text-center">
                <a
                href="curriculoh.pdf"
                download="curriculo_heitor.pdf"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                Baixar Currículo (PDF)
                </a>

                </div>
                <div className="absolute top-4 left-4">
                    <LinkPadrao href="/" theme="dark">
                    Voltar
                    </LinkPadrao>
                </div>
            </div>
        </div>
    );
};

export default Curriculo;
