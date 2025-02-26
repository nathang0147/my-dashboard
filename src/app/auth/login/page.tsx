"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Logging in with:", { email, password });
    };

    return (
        <div className="container mx-auto px-4 h-full flex justify-center items-center">
            <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                    {/* Social Page */}
                    <div className="rounded-t mb-0 px-6 py-6">
                        <div className="text-center mb-3">
                            <h6 className="text-gray-500 text-sm font-bold">Sign in with</h6>
                        </div>
                        <div className="btn-wrapper text-center">
                            <button className="bg-white text-gray-700 px-4 py-2 rounded shadow hover:shadow-md inline-flex items-center font-bold text-xs transition duration-150">
                                <Image src="/img/github.svg" alt="Github" width={20} height={20} className="w-5 mr-1" />
                                Github
                            </button>
                            <button className="bg-white text-gray-700 px-4 py-2 rounded shadow hover:shadow-md inline-flex items-center font-bold text-xs transition duration-150">
                                <Image src="/img/google.svg" alt="Google" width={20} height={20} className="w-5 mr-1" />
                                Google
                            </button>
                        </div>
                        <hr className="mt-6 border-b-1 border-gray-300" />
                    </div>
                    
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div className="text-gray-400 text-center mb-3 font-bold">
                            <small>Or sign in with credentials</small>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-gray-600 text-xs font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full transition duration-150"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-gray-600 text-xs font-bold mb-2">Password</label>
                                <input
                                    type="password"
                                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full transition duration-150"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="form-checkbox border-0 rounded text-gray-700 ml-1 w-5 h-5 transition duration-150" />
                                    <span className="ml-2 text-sm font-semibold text-gray-600">Remember me</span>
                                </label>
                            </div>

                            <div className="text-center mt-6">
                                <button type="submit" className="bg-gray-800 text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg w-full transition duration-150">
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Forgot Password & Page Links */}
                <div className="flex flex-wrap mt-6 relative">
                    <div className="w-1/2">
                        <a href="#" className="text-gray-200">
                            <small>Forgot password?</small>
                        </a>
                    </div>
                    <div className="w-1/2 text-right">
                        <Link href="/auth/register" className="text-gray-200">
                            <small>Create new account</small>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
