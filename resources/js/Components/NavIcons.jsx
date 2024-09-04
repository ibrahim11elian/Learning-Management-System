import useLogout from "@/hooks/useLogout";
import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart, FiBell } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";

function NavIcons() {
    const { user } = usePage().props.auth;
    const { logout, isLoading } = useLogout();

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

            {user && (
                <button
                    onClick={logout}
                    disabled={isLoading}
                    className="flex items-center text-gray-900 hover:text-main-500 transition-colors duration-300 disabled:cursor-not-allowed"
                >
                    <IoMdLogOut className="text-xl" />
                </button>
            )}
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
