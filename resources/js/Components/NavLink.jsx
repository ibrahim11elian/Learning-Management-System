import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center border-t-2 text-sm font-medium leading-5 transition duration-300 ease-in-out focus:outline-none " +
                (active
                    ? "border-main-400 text-white focus:border-main-500 "
                    : "border-transparent text-gray-400 hover:text-white hover:border-main-300 focus:text-white focus:border-main-500 ") +
                className
            }
        >
            {children}
        </Link>
    );
}
