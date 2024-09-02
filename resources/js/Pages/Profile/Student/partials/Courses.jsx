import CourseCard from "@/Pages/Courses/Partials/CourseCard";

function CourseList({ enrollments }) {
    return (
        <div className="grid grid-cols-12 gap-3 ">
            {enrollments.map((enrollment) => {
                return (
                    <CourseCard
                        key={enrollment.id}
                        course={enrollment.course}
                    />
                );
            })}
        </div>
    );
}

export default CourseList;
