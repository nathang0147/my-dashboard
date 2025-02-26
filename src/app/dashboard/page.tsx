"use client";

import CardLineChart from "@/components/Cards/CardLineChart";
import CardBarChart from "@/components/Cards/CardBarChart";
import CardPageVisits from "@/components/Cards/CardPageVisits";
import CardSocialTraffic from "@/components/Cards/CardSocialTraffic";
import { DashboardData } from "@/types/dashboard";
import {useEffect, useState} from "react";

export default function Dashboard() {
    const [dashboardData, setDashboardData] = useState<DashboardData|null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDashboardData() {
            try {
                const res = await fetch("/api/dashboard", { cache: "no-store" });
                const data = await res.json();
                setDashboardData(data);
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchDashboardData();
    }, []);

    if (loading) return <p>Loading dashboard...</p>;
    if (!dashboardData) return <p>Error loading data</p>;

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <CardLineChart data={dashboardData.lineChartData} />
                </div>
                <div className="w-full xl:w-4/12 px-4">
                    <CardBarChart data={dashboardData.barChartData} />
                </div>
            </div>
            <div className="flex flex-wrap mt-4">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <CardPageVisits data={dashboardData.pageVisits} />
                </div>
                <div className="w-full xl:w-4/12 px-4">
                    <CardSocialTraffic data={dashboardData.socialTraffic} />
                </div>
            </div>
        </>
    );
}
