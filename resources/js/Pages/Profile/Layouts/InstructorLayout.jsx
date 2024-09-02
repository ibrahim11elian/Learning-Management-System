import { Link, usePage } from "@inertiajs/react";

function InstructorLayout({ children }) {
    const { user, hasEnrollments } = usePage().props;
    return (
        <>
            <div className="h-40 bg-main-100"></div>
            <div className="flex flex-col max-w-6xl mx-auto -translate-y-20 bg-white border-2 border-gray-100">
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
                                {user.instructor.job_title}
                            </p>
                        </div>
                    </div>
                </header>
            </div>

            <main className="max-w-6xl mx-auto px-3 md:px-0 grid grid-cols-12 gap-5">
                <div className="col-span-full sm:col-span-6 md:col-span-4 p-4 border-2 border-gray-100">
                    <h3 className="text-2xl text-gray-900">About Me</h3>
                    <p className="text-gray-500 mt-2">{user.instructor.bio}</p>
                </div>
                <div className="col-span-full sm:col-span-6 md:col-span-8">
                    <nav className="flex items-center gap-3 border-b-2 border-gray-100">
                        <Link
                            href={route("instructor.courses", {
                                user: user.id,
                            })}
                            className={`py-3 capitalize px-8 border-b-2 transition-colors duration-300 h-full
                                        ${
                                            route().current(
                                                `instructor.courses`
                                            )
                                                ? "border-main-500 text-gray-900"
                                                : "hover:border-main-500 border-transparent text-gray-600"
                                        }
                                            }`}
                        >
                            Courses
                        </Link>
                        {hasEnrollments && (
                            <Link
                                href={route("instructor.enrolled.courses", {
                                    user: user.id,
                                })}
                                className={`py-3 capitalize px-8 border-b-2 transition-colors duration-300 h-full
                                        ${
                                            route().current(
                                                `instructor.enrolled.courses`
                                            )
                                                ? "border-main-500 text-gray-900"
                                                : "hover:border-main-500 border-transparent text-gray-600"
                                        }
                                            }`}
                            >
                                Enrolled Courses
                            </Link>
                        )}
                    </nav>
                    {children}
                </div>
            </main>
        </>
    );
}

export default InstructorLayout;
