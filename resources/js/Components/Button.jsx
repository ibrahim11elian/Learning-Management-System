import { Link } from "@inertiajs/react";

const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
};

const variants = {
    main: "bg-main-500 hover:bg-main-600 disabled:bg-main-200",
    info: "bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-200",
    gray: "bg-gray-500 hover:bg-gray-600 disabled:bg-gray-200",
    danger: "bg-red-500 hover:bg-red-600 disabled:bg-red-200",
    success: "bg-green-500 hover:bg-green-600 disabled:bg-green-200",
    warning: "bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-200",
    secondary: "hover:opacity-60",
    main_100: "bg-main-100 hover:bg-main-200 disabled:opacity-40",
};

const colors = {
    main: "text-main-500",
    white: "text-white",
    info: "text-indigo-500",
    gray: "text-gray-900",
    danger: "text-red-500",
    success: "text-green-500",
    warning: "text-yellow-500",
};

export default function Button({
    className = "",
    disabled,
    children,
    size = "md",
    variant = "main",
    color = "white",
    as = "button",
    href = "#",
    ...props
}) {
    const classNames =
        `inline-flex items-center ${variants[variant]} ${colors[color]} border border-transparent font-semibold text-xs  uppercase tracking-widest  focus:outline-none focus:ring-2 focus:ring-main-500 focus:ring-offset-2 transition ease-in-out duration-300 ` +
        className +
        " " +
        sizes[size];

    if (as === "link") {
        return (
            <Link
                href={href}
                {...props}
                className={classNames}
                disabled={disabled}
            >
                {children}
            </Link>
        );
    }

    return (
        <button {...props} className={classNames} disabled={disabled}>
            {children}
        </button>
    );
}
