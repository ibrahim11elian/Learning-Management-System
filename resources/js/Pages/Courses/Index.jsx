import CourseList from "@/Components/CourseList";
import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";

function Index({ auth, courses }) {
    return (
        <Authenticated user={auth?.user}>
            <div className="py-3 px-5 mx-auto max-w-6xl bg-white space-y-3">
                <CourseList courses={courses.data} />
                <Pagination courses={courses} />
            </div>
        </Authenticated>
    );
}

export default Index;
