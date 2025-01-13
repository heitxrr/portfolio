import React from 'react';

const Rodape: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-around">
                <img src="/path/to/logo1.png" alt="Logo 1" className="h-12 w-12" />
                <img src="/path/to/logo2.png" alt="Logo 2" className="h-12 w-12" />
                <img src="/path/to/logo3.png" alt="Logo 3" className="h-12 w-12" />
                <img src="/path/to/logo4.png" alt="Logo 4" className="h-12 w-12" />
            </div>
        </footer>
    );
};

export default Rodape;