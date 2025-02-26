export interface ChartDataset {
    label: string;
    backgroundColor: string;
    borderColor: string;
    data: number[];
    barThickness?: number; // Optional for bar charts
    fill?: boolean; // Optional for line charts
}

export interface ChartData {
    labels: string[];
    datasets: ChartDataset[];
}

export interface PageVisit {
    page: string;
    visitors: string;
    users: string;
    bounce: string;
    trend: "up" | "down";
    color: string;
}

export interface SocialTraffic {
    source: string;
    visitors: string;
    percentage: string;
    color: string;
}

export interface DashboardData {
    barChartData: ChartData;
    lineChartData: ChartData;
    pageVisits: PageVisit[];
    socialTraffic: SocialTraffic[];
}
