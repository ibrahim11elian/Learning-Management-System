import React from "react";
import CourseCard from "./CourseCard";

function CourseList({ courses }) {
    return (
        <div className="grid grid-cols-12 gap-3 ">
            {courses.map((course) => {
                return <CourseCard key={course.id} course={course} />;
            })}
        </div>
    );
}

export default CourseList;
