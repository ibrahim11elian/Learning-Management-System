import React from "react";
import NavLink from "./NavLink";

const menuItems = [
    "home",
    "courses",
    "about",
    "contact",
    "become an Instructor",
];

function NavBar() {
    return (
        <nav className=" min-w-[65rem] flex items-center justify-between bg-gray-900 px-4">
            <div className="space-x-3">
                {menuItems.map((item, index) => (
                    <NavLink
                        key={index}
                        className=" capitalize py-3 px-2"
                        href={"/" + item}
                        active={false}
                    >
                        {item}
                    </NavLink>
                ))}
            </div>

            <span className="text-gray-400 hover:text-white transition-colors duration-300">
                English
            </span>
        </nav>
    );
}

export default NavBar;
