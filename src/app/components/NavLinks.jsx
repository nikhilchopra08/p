import Link from "next/link";

const NavLinks = ({ href, title }) => {
    return (
        <Link href={href} className="block py-2 pl-3 pr-4 text-[#ADE7BE]">{title}
        </Link>
    );
};

export default NavLinks;
