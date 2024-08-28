import { Link } from "@inertiajs/react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

function Pagination({ courses }) {
    return (
        <nav className="flex items-center justify-center gap-2">
            {courses?.links?.map((link, index) => (
                <Link
                    key={index}
                    href={link.url}
                    disabled={link.active}
                    className={
                        `${
                            link.active
                                ? "bg-main-500 text-white"
                                : " text-gray-900 hover:bg-main-500 hover:text-white"
                        }` +
                        ` px-4 py-2.5 text-sm font-semibold rounded-full transition-colors duration-300 ${
                            index === 0 || index === courses?.links.length - 1
                                ? " bg-main-200 py-3"
                                : ""
                        }`
                    }
                >
                    {index === 0 ? (
                        <HiArrowLeft className="text-lg" />
                    ) : index === courses?.links.length - 1 ? (
                        <HiArrowRight className="text-lg" />
                    ) : (
                        link.label
                    )}
                </Link>
            ))}
        </nav>
    );
}

export default Pagination;
