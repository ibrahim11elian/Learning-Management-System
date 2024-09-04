import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const logoutFn = async () => {
    try {
        await axios.post("/logout");
    } catch (error) {
        throw new Error("Failed to logout!");
    }
};

function useLogout() {
    const {
        mutate: logout,
        isPending: isLoading,
        error,
    } = useMutation({
        mutationFn: logoutFn,
        onSuccess: () => {
            window.location.href = "/home";
        },
    });

    return { logout, isLoading, error };
}

export default useLogout;
