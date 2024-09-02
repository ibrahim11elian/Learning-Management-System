import Header from "@/Components/Header";
import NavBar from "@/Components/NavBar";
import { useState } from "react";

export default function Authenticated({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar />

            <Header />

            <main className="bg-white">{children}</main>
        </div>
    );
}
