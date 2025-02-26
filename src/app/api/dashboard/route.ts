import { NextResponse } from "next/server";

// Simulated database/API response
export async function GET() {
    return NextResponse.json({
        barChartData: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: new Date().getFullYear().toString(),
                    backgroundColor: "#ed64a6",
                    borderColor: "#ed64a6",
                    data: [30, 78, 56, 34, 100, 45, 13],
                    barThickness: 8,
                },
                {
                    label: (new Date().getFullYear() - 1).toString(),
                    backgroundColor: "#4c51bf",
                    borderColor: "#4c51bf",
                    data: [27, 68, 86, 74, 10, 4, 87],
                    barThickness: 8,
                },
            ],
        },
        lineChartData: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: new Date().getFullYear().toString(),
                    backgroundColor: "#4c51bf",
                    borderColor: "#4c51bf",
                    data: [65, 78, 66, 44, 56, 67, 75],
                    fill: false,
                },
                {
                    label: (new Date().getFullYear() - 1).toString(),
                    fill: false,
                    backgroundColor: "#fff",
                    borderColor: "#fff",
                    data: [40, 68, 86, 74, 56, 60, 87],
                },
            ],
        },
        pageVisits: [
            { page: "/argon/", visitors: "4,569", users: "340", bounce: "46.53%", trend: "up", color: "emerald-500" },
            { page: "/argon/index.html", visitors: "3,985", users: "319", bounce: "46.53%", trend: "down", color: "orange-500" },
            { page: "/argon/charts.html", visitors: "3,513", users: "294", bounce: "36.49%", trend: "down", color: "orange-500" },
            { page: "/argon/tables.html", visitors: "2,050", users: "147", bounce: "50.87%", trend: "up", color: "emerald-500" },
            { page: "/argon/profile.html", visitors: "1,795", users: "190", bounce: "46.53%", trend: "down", color: "red-500" },
        ],
        socialTraffic: [
            { source: "Facebook", visitors: "1,480", percentage: "60%", color: "red" },
            { source: "Facebook", visitors: "5,480", percentage: "70%", color: "emerald" },
            { source: "Google", visitors: "4,807", percentage: "80%", color: "purple" },
            { source: "Instagram", visitors: "3,678", percentage: "75%", color: "lightBlue" },
            { source: "Twitter", visitors: "2,645", percentage: "30%", color: "orange" },
        ],
    });
}
