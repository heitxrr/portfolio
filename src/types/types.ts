import { StaticImageData } from "next/image";

// export type StandardType = {
//     id: string;
//     name: string;
//     description?: string;
//     createdAt: Date;
//     updatedAt: Date;
// };

export type RodapeProps = {
  img: StaticImageData;
};

export type CabecalhoProps = {
  gray?: boolean;
};

export type LinkPadraoProps = {
  children: React.ReactNode;
  href: string;
  theme?: string;
};
