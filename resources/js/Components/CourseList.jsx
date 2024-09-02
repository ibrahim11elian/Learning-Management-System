import { cloneElement } from "react";

function CourseList({ render }) {
    return <div className={`grid grid-cols-12 gap-3 `}>{render}</div>;
}

export default CourseList;
