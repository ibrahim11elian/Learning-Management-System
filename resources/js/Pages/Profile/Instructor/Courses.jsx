import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import InstructorLayout from "../Layouts/InstructorLayout";
import CourseList from "@/Components/CourseList";
import CourseCard from "@/Components/CourseCard";

function Courses({ courses }) {
    return (
        <Authenticated>
            <InstructorLayout>
                <CourseList
                    render={courses?.data?.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                            className={
                                "col-span-full sm:col-span-6 xl:col-span-4"
                            }
                        />
                    ))}
                />
            </InstructorLayout>
        </Authenticated>
    );
}

export default Courses;
