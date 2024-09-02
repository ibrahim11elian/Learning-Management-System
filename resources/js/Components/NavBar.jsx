import React from "react";
import { usePage } from "@inertiajs/react";
import NavLink from "./NavLink";

const menuItems = [
    { name: "home", href: "/home" },
    { name: "courses", href: "/courses" },
    { name: "about", href: "/about" },
    { name: "contact", href: "/contact" },
    { name: "become an Instructor", href: "/become-an-instructor" },
];

function NavBar() {
    const { url } = usePage();

    return (
        <nav className="min-w-[65rem] flex items-center justify-between bg-gray-900 px-4">
            <div className="space-x-3">
                {menuItems.map((item, index) => (
                    <NavLink
                        key={index}
                        className="capitalize py-3 px-2"
                        href={item.href}
                        active={url === item.href}
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>

            <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                English
            </span>
        </nav>
    );
}

export default NavBar;
