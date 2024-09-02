import Button from "@/Components/Button";
import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";

const navLinks = [
    {
        name: "dashboard",
        href: "dashboard",
    },
    {
        name: "courses",
        href: "courses",
    },
    {
        name: "wish List",
        href: "wishlist",
    },
    {
        name: "settings",
        href: "settings",
    },
];

function StudentLayout({ children }) {
    const { user } = usePage().props.auth;
    return (
        <>
            <div className="h-40 bg-main-100"></div>
            <div className="flex flex-col max-w-6xl mx-auto -translate-y-20 bg-white border-2 border-gray-100">
                <div>
                    <header className="flex items-center justify-between py-3 px-5">
                        <div className="flex items-center gap-4">
                            <img
                                src="https://picsum.photos/seed/picsum/300"
                                alt={user.first_name}
                                className="w-24 h-24 rounded-full"
                            />
                            <div className="flex flex-col">
                                <h2 className="text-lg font-bold capitalize">
                                    {user.first_name + " " + user.last_name}
                                </h2>
                                <p className="text-gray-500 capitalize">
                                    {user.role}
                                </p>
                            </div>
                        </div>
                        <Button size="lg" variant="main_100" color="main">
                            <span className="mr-1">Become Instructor</span>
                            <HiArrowRight />
                        </Button>
                    </header>
                    <nav className="flex justify-around border-t-2 border-gray-100">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={route(`student.${link.href}`, {
                                    user: user.id,
                                })}
                                className={`py-3 capitalize px-4 border-b-2 transition-colors duration-300 h-full
                                        ${
                                            route().current(
                                                `student.${link.href}`
                                            )
                                                ? "border-main-500 text-gray-900"
                                                : "hover:border-main-500 border-transparent text-gray-600"
                                        }
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            <main className="max-w-6xl mx-auto px-3">{children}</main>
        </>
    );
}

export default StudentLayout;
