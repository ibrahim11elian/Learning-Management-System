import React from "react";
import Button from "./Button";

function AccountButtons() {
    return (
        <div className="flex gap-3 items-start self-stretch my-auto min-w-[240px]">
            <Button
                as="link"
                href={route("register")}
                variant="main_100"
                color="main"
                className="py-3"
            >
                Create Account
            </Button>
            <Button as="link" href={route("login")} className="py-3">
                Sign In
            </Button>
        </div>
    );
}

export default AccountButtons;
