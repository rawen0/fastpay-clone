import links from "@/constants/sidebar-nav-links";
import Link from "next/link";

type Props = {};

const SideNav = (props: Props) => {
  return links.map((link) => (
    <div
      key={link.label}
      className="group flex space-x-2 uppercase hover:bg-[var(--primary-text)] rounded px-2 py-2 transition-colors duration-200"
    >
      <link.Icon className="w-4 h-4 stroke-[var(--primary-text)] group-hover:stroke-neutral-100" />
      <Link
        href={link.href}
        className="text-[var(--primary-text)] group-hover:text-neutral-100"
      >
        {link.label}
      </Link>
    </div>
  ));
};

export default SideNav;
