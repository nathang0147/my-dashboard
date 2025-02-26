"use client";

import {SocialTraffic} from "@/types/dashboard";

interface Props {
    data: SocialTraffic[];
}

export default function CardSocialTraffic({ data }:Props) {
    // const socialTraffic = [
    //     { source: "Facebook", visitors: "1,480", percentage: "60%", color: "red" },
    //     { source: "Facebook", visitors: "5,480", percentage: "70%", color: "emerald" },
    //     { source: "Google", visitors: "4,807", percentage: "80%", color: "purple" },
    //     { source: "Instagram", visitors: "3,678", percentage: "75%", color: "lightBlue" },
    //     { source: "Twitter", visitors: "2,645", percentage: "30%", color: "orange" },
    // ];

    return (
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-base text-blueGray-700">Social traffic</h3>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        <button
                            className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                        >
                            See all
                        </button>
                    </div>
                </div>
            </div>
            <div className="block w-full overflow-x-auto">
                {/* Table */}
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead className="thead-light">
                    <tr>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Referral
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Visitors
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(({ source, visitors, percentage, color }, index) => (
                        <tr key={index}>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                {source}
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {visitors}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <div className="flex items-center">
                                    <span className="mr-2">{percentage}</span>
                                    <div className="relative w-full">
                                        <div className={`overflow-hidden h-2 text-xs flex rounded bg-opacity-20 bg-${color}-500`}>
                                            <div
                                                style={{ width: percentage }}
                                                className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${color}-500`}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}