import Authenticated from "@/Layouts/AuthenticatedLayout";
import StudentLayout from "../Layouts/StudentLayout";
import Pagination from "@/Pages/Courses/Partials/Pagination";
import CourseList from "./partials/Courses";

function Courses({ enrollments }) {
    return (
        <Authenticated>
            <StudentLayout>
                <div className="py-3 px-5 mx-auto max-w-6xl bg-white space-y-3">
                    <CourseList enrollments={enrollments.data} />
                    <Pagination courses={enrollments} />
                </div>
            </StudentLayout>
        </Authenticated>
    );
}

export default Courses;
