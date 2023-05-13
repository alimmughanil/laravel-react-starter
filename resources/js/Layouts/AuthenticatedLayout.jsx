import { React, useState } from "react";
import SideNavbar from "@/Components/SideNavbar";
import Sidebar from "@/Components/Sidebar";
import { Head } from "@inertiajs/react";
import VerifyEmail from "@/Components/VerifyEmail";

function AuthenticatedLayout({ title, children, open, setOpen, auth }) {
    const sidebarMenu = [
        {
            title: "Dashboard",
            src: "fas fa-tachometer-alt fa-fw",
            link: "/dashboard",
        },
    ];

    return (
        <div className="flex">
            <Head title={title} />
            <Sidebar title={title} open={open} menu={sidebarMenu} />
            <div
                className={` ${
                    open ? "w-16 sm:block sm:w-full" : "block"
                } min-h-screen flex-1`}
            >
                <SideNavbar
                    setOpen={setOpen}
                    open={open}
                    title={title}
                    auth={auth}
                    link="/admin/dashboard"
                />
                <div
                    className={`${
                        open && "hidden md:block"
                    } px-3 py-2 sm:px-6 sm:py-4`}
                >
                    {!auth.user.email_verified_at && (
                        <VerifyEmail user={auth.user} />
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AuthenticatedLayout;
