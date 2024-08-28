import React from "react";
import NavIcons from "./NavIcons";
import AccountButtons from "./AccountButtons";
import ApplicationLogo from "./ApplicationLogo";
import SearchInput from "./SearchInput";
import { Link } from "@inertiajs/react";

function Header({ user }) {
    return (
        <header className=" min-w-[65rem] flex  gap-10 justify-between items-center px-8 py-4 bg-white shadow-sm max-md:px-5 border-b-2 border-gray-100">
            <div className="flex gap-10 justify-center items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
                <ApplicationLogo displayName />
                <SearchInput />
            </div>
            <nav className="flex gap-6 items-center justify-end my-auto text-base font-semibold tracking-normal leading-10 capitalize min-w-[240px] max-md:max-w-full">
                <NavIcons />

                {user ? (
                    <Link href="/account">
                        <img
                            src="https://picsum.photos/seed/picsum/300"
                            alt={user.first_name}
                            className="rounded-full w-10 h-10"
                        />
                    </Link>
                ) : (
                    <AccountButtons />
                )}
            </nav>
        </header>
    );
}

export default Header;
