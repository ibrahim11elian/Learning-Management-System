import { Link } from "@inertiajs/react";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart, FiBell } from "react-icons/fi";

function NavIcons() {
    return (
        <>
            <NavLink
                to="/"
                active={window.location.pathname === "/"}
                className="mr-3"
            >
                <FiShoppingCart />
            </NavLink>

            <NavLink
                to="/"
                active={window.location.pathname === "/"}
                className="mr-3"
            >
                <FaRegHeart />
            </NavLink>

            <NavLink
                to="/"
                active={window.location.pathname === "/"}
                className="mr-3"
            >
                <FiBell />
            </NavLink>
        </>
    );
}

export default NavIcons;

const NavLink = ({ to, children, active }) => {
    return (
        <Link
            href={to}
            className={` text-xl ${
                active
                    ? "text-main-500"
                    : "text-gray-900 hover:text-main-500 transition-colors duration-300"
            }`}
        >
            {children}
        </Link>
    );
};
