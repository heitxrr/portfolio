import React from "react";
import Image from "next/image";

import { BalaoSobreMimProps } from "@/types/types";

const BalaoSobreMim: React.FC<BalaoSobreMimProps> = ({
    title,
    description,
    img,
}) => {
    return (
        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 max-w-sm">
            <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                    src={img}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
};

export default BalaoSobreMim;
