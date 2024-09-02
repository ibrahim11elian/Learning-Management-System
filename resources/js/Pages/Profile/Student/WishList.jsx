import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import StudentLayout from "../Layouts/StudentLayout";

function WishList() {
    return (
        <Authenticated>
            <StudentLayout>
                <div>WishList</div>
            </StudentLayout>
        </Authenticated>
    );
}

export default WishList;
