import { LoginPage } from "../features/auth/login-page";

export function meta() {
    return [
        { title: "Sign in | Operion" },
        { name: "description", content: "Sign in to your Operion operations workspace." },
    ];
}

export default function Home() {
    return <LoginPage />;
}
