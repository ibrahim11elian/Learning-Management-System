import Authenticated from "@/Layouts/AuthenticatedLayout";
import StudentLayout from "../Layouts/StudentLayout";
import Pagination from "@/Components/Pagination";
import CourseList from "@/Components/CourseList";
import CourseCard from "@/Components/CourseCard";

function Courses({ enrollments }) {
    return (
        <Authenticated>
            <StudentLayout>
                <div className="py-3 px-5 mx-auto max-w-6xl bg-white space-y-3">
                    <CourseList
                        render={enrollments?.data?.map((enrollment) => (
                            <CourseCard
                                key={enrollment.id}
                                course={enrollment.course}
                                className={
                                    "col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3"
                                }
                            />
                        ))}
                    />
                    <Pagination courses={enrollments} />
                </div>
            </StudentLayout>
        </Authenticated>
    );
}

export default Courses;
