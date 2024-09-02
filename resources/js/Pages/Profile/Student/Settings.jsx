import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "../Partials/DeleteUserForm";
import UpdatePasswordForm from "../Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "../Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import StudentLayout from "../Layouts/StudentLayout";

export default function Settings({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout>
            <StudentLayout>
                <Head title="Settings" />
                <div className=" space-y-3 ">
                    <h1 className="text-3xl text-gray-900 font-semibold">
                        Account Settings
                    </h1>
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </StudentLayout>
        </AuthenticatedLayout>
    );
}
