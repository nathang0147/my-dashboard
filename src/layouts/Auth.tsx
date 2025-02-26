"use client";

import Navbar from "../components/Navbars/AuthNavbar";
import FooterSmall from "../components/Footers/FooterSmall";
import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar transparent />
            <main>
                <section className="relative w-full h-full py-40 min-h-screen">
                    <div className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full">
                        <Image
                            src="/img/register_bg_2.png"
                            alt="Background"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                    {children}
                    <FooterSmall absolute />
                </section>
            </main>
        </>
    );
}
