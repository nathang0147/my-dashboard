import "../styles/globals.css"; // ✅ Load Tailwind & Global styles
import type { AppProps } from "next/app";
import AuthLayout from "@/layouts/Auth";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthLayout>
            <Component {...pageProps} />
        </AuthLayout>
    );
}
