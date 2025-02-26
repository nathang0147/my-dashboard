import AuthLayout from "../../layouts/Auth";

export default function AuthRootLayout({ children }: { children: React.ReactNode }) {
    return <AuthLayout>{children}</AuthLayout>;
}
