"use client";

export default function FooterSmall({ absolute }: { absolute?: boolean }) {
    return (
        <footer
            className={`pb-6 ${absolute ? "absolute w-full bottom-0 bg-gray-800" : "relative"}`}
        >
            <div className="container mx-auto px-4">
                <hr className="mb-6 border-b-1 border-gray-600" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4">
                        <div className="text-sm text-gray-500 font-semibold py-1 text-center md:text-left">
                            Copyright © {new Date().getFullYear()}{" "}
                            <a
                                href="https://jesseltoncap.com/"
                                className="text-white hover:text-gray-300 text-sm font-semibold py-1"
                            >
                                Jesselton Capital
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-8/12 px-4">
                        <ul className="flex flex-wrap list-none md:justify-end justify-center">
                            <li>
                                <a
                                    href="https://jesseltoncap.com/#about" // e.g., About Page
                                    className="text-white hover:text-gray-300 text-sm font-semibold block py-1 px-3"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://jesseltoncap.com/#contact"
                                    className="text-white hover:text-gray-300 text-sm font-semibold block py-1 px-3"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://jesseltoncap.com/#portofolio"
                                    className="text-white hover:text-gray-300 text-sm font-semibold block py-1 px-3"
                                >
                                    Portofolio
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
