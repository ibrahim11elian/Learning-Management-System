import React from "react";
import InstructorLayout from "../Layouts/InstructorLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import CourseList from "../../../Components/CourseList";
import Pagination from "@/Components/Pagination";
import CourseCard from "@/Components/CourseCard";

function Enrollments({ enrollments }) {
    return (
        <Authenticated>
            <InstructorLayout>
                <div className="py-3 space-y-3">
                    <CourseList
                        render={enrollments?.data?.map((enrollment) => (
                            <CourseCard
                                key={enrollment.id}
                                course={enrollment.course}
                                className={
                                    "col-span-full sm:col-span-6 xl:col-span-4"
                                }
                            />
                        ))}
                    />
                    <Pagination courses={enrollments} />
                </div>
            </InstructorLayout>
        </Authenticated>
    );
}

export default Enrollments;
