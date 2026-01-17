import Link from "next/link";
import { JSX } from "react";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
  isActive: boolean;
}

export default function SidebarMenuItem({
  path,
  icon,
  title,
  subtitle,
  isActive = false,
}: Props) {
  return (
    <Link
      href={path}
      className={`w-full px-2 inline-flex space-x-2 items-center py-3 hover:bg-white/5 transition ease-linear duration-150 ${isActive ? "bg-blue-800" : ""}`}
    >
      {icon}
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subtitle}
        </span>
      </div>
    </Link>
  );
}
