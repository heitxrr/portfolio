import React from 'react';
import Image from 'next/image';
import Logo from "@/img/logo-rodape-temporario.png";

const Rodape: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-around">
                <Image src={Logo} alt="Logo 1" className="h-12 w-12" />
                <Image src={Logo} alt="Logo 2" className="h-12 w-12" />
                <Image src={Logo} alt="Logo 3" className="h-12 w-12" />
                <Image src={Logo} alt="Logo 4" className="h-12 w-12" />
            </div>
        </footer>
    );
};

export default Rodape;