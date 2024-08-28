import Header from "@/Components/Header";
import NavBar from "@/Components/NavBar";
import { useState } from "react";

export default function Authenticated({ user, header, children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar />

            <Header user={user} />
            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main className="bg-white">{children}</main>
        </div>
    );
}
