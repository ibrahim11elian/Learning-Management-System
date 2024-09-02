import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import StudentLayout from "../Layouts/StudentLayout";

export default function Dashboard({ stats }) {
    return (
        <Authenticated>
            <StudentLayout>
                <Head title="Dashboard" />
                <div className="pb-10 space-y-3">
                    <h1 className="text-3xl text-gray-900 font-semibold">
                        Dashboard
                    </h1>
                    <div className="grid grid-cols-12 gap-3">
                        <StatCard
                            bg="bg-main-100"
                            stat={stats.enrolled_courses}
                            title="Enrolled Courses"
                            icon={
                                <img
                                    src="/assets/PlayCircle.svg"
                                    className="w-8 h-8"
                                />
                            }
                        />
                        <StatCard
                            bg="bg-indigo-100"
                            stat={stats.active_courses}
                            title="Active Courses"
                            icon={
                                <img
                                    src="/assets/CheckSquareOffset.svg"
                                    className="w-8 h-8"
                                />
                            }
                        />
                        <StatCard
                            bg="bg-green-100"
                            stat={stats.completed_courses}
                            title="Completed Courses"
                            icon={
                                <img
                                    src="/assets/Trophy.svg"
                                    className="w-8 h-8"
                                />
                            }
                        />
                    </div>
                </div>
            </StudentLayout>
        </Authenticated>
    );
}

function StatCard({ stat, title, icon, bg }) {
    return (
        <div
            className={`px-7 py-4 ${bg} flex gap-3 col-span-full sm:col-span-4 md:col-span-3`}
        >
            <div className="p-3 flex items-center justify-center bg-white">
                {icon}
            </div>
            <div className="flex flex-col justify-between">
                <h2 className="text-2xl font-semibold">{stat}</h2>
                <p className="text-sm text-gray-500">{title}</p>  
            </div>
        </div>
    );
}
