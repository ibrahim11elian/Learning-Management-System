import Guest from "@/Layouts/GuestLayout";

function Index({ auth, courses }) {
    console.log(courses);
    return (
        <>
            <h1 className="text-3xl font-semibold text-gray-700">
                All Courses
            </h1>
            <ul className="grid grid-cols-12 gap-3 mx-auto mt-5 place-items-center">
                {courses.map((course, index) => (
                    <li
                        className="font-semibold col-span-3 text-sm w-fit flex flex-col px-4 py-2 bg-slate-300 rounded shadow-sm"
                        key={course.id}
                    >
                        <span>
                            ({index + 1}) {course.title}
                        </span>

                        <span className="text-xs text-gray-600">
                            Category: {course.category.name}
                        </span>
                        <span className="text-xs text-gray-600">
                            Instructor: ({course.instructor.first_name}{" "}
                            {course.instructor.last_name})
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Index;
