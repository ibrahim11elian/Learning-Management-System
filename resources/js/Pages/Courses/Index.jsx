import CourseCard from "@/Components/CourseCard";
import CourseList from "@/Components/CourseList";
import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";

function Index({ courses }) {
    return (
        <Authenticated>
            <div className="py-3 px-5 mx-auto max-w-6xl bg-white space-y-3">
                <CourseList
                    render={courses?.data?.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                            className={
                                "col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3"
                            }
                        />
                    ))}
                />
                <Pagination courses={courses} />
            </div>
        </Authenticated>
    );
}

export default Index;
