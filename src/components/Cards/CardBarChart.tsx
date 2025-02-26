"use client";

import { useEffect, useRef } from "react";
import { Chart, ChartConfiguration, registerables } from "chart.js";
import {ChartData} from "@/types/dashboard";

Chart.register(...registerables);

interface Props{
    data: ChartData
}

export default function CardBarChart({ data }: Props) {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (!chartRef.current) return;

        // Destroy previous chart instance before creating a new one
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext("2d");
        if (!ctx) return;

        const config: ChartConfiguration<"bar", number[], string> = {
            type: "bar",
            data: data,
            options: {
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: "rgba(0,0,0,.4)",
                        },
                        align: "end",
                        position: "bottom",
                    },
                },
                scales: {
                    x: {
                        display: false,
                        grid: {
                            color: "rgba(33, 37, 41, 0.3)",
                        },
                    },
                    y: {
                        display: true,
                        grid: {
                            color: "rgba(33, 37, 41, 0.2)",
                        },
                    },
                },
            },
        };

        chartInstance.current = new Chart(ctx, config);
    }, []);

    return (
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                        <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                            Performance
                        </h6>
                        <h2 className="text-blueGray-700 text-xl font-semibold">
                            Total orders
                        </h2>
                    </div>
                </div>
            </div>
            <div className="p-4 flex-auto">
                {/* Chart */}
                <div className="relative h-[350px]">
                    <canvas ref={chartRef}></canvas>
                </div>
            </div>
        </div>
    );
}
