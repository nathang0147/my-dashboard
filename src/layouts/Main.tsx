"use client";

import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import MainNavbar from "@/components/Navbars/MainNavbar";
import HeaderStats from "@/components/Headers/HeaderStats";
import Footer from "@/components/Footers/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex-1 md:ml-64 bg-blueGray-100 min-h-screen">
                {/* Navbar */}
                <MainNavbar />
                {/* Header */}
                <HeaderStats />

                <main className="px-4 md:px-10 mx-auto w-full -m-24">{children}</main>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}
