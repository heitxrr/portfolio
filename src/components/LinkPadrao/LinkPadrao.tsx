import Link from "next/link";
import { LinkPadraoProps } from "@/types/types";

export default function LinkPadrao(props: LinkPadraoProps) {
  const { theme, href, children } = props;

  if (theme === "dark") {
    return (
      <Link
        href={href}
        className="inline-block text-base font-bold px-4 py-2 rounded-md cursor-pointer bg-gray-700 text-white hover:bg-gray-600"
      >
        {children}
      </Link>
    );
  } else if (theme === "light") {
    return (
      <Link
        href={href}
        className="inline-block text-base font-bold px-4 py-2 rounded-md cursor-pointer bg-blue-800 text-white hover:bg-blue-700"
      >
        {children}
      </Link>
    );
  } else {
    return (
      <Link
        href={href}
        className="inline-block text-base font-bold px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200"
      >
        {children}
      </Link>
    );
  }
}
