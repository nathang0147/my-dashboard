"use client";

import { useEffect, useRef } from "react";
import Chart, {ChartConfiguration} from "chart.js/auto";
import {ChartData} from "@/types/dashboard";

interface Props{
    data: ChartData
}

export default function CardLineChart({ data }: Props) {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (!chartRef.current) return;

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext("2d");
        if (!ctx) return;

        const config: ChartConfiguration<'line', number[], string> = {
            type: "line",
            data: data,
            options: {
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: "white",
                        },
                        align: "end",
                        position: "bottom",
                    },
                },
                scales: {
                    x: {
                        ticks: { color: "rgba(255,255,255,.7)" },
                        grid: { display: false, color: "rgba(33, 37, 41, 0.3)" },
                    },
                    y: {
                        ticks: { color: "rgba(255,255,255,.7)" },
                        grid: { color: "rgba(255, 255, 255, 0.15)" },
                    },
                },
            },
        };

        chartInstance.current = new Chart(ctx, config);
    }, [data]);

    return (
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                        <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                            Overview
                        </h6>
                        <h2 className="text-white text-xl font-semibold">Sales value</h2>
                    </div>
                </div>
            </div>
            <div className="p-4 flex-auto">
                <div className="relative h-[350px]">
                    <canvas ref={chartRef}></canvas>
                </div>
            </div>
        </div>
    );
}