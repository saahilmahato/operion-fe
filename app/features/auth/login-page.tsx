import { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "./login-api";

export function LoginPage() {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");
        setIsSubmitting(true);

        try {
            await login({ identifier, password });
            navigate("/dashboard");
        } catch (error) {
            setError(error instanceof Error ? error.message : "Unable to sign in.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#101d30] px-4 py-12">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-40 -top-40 h-125 w-125 rounded-full bg-accent/20 blur-[100px]" />
                <div className="absolute -bottom-48 -right-32 h-130 w-130 rounded-full bg-blue-500/15 blur-[110px]" />

                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />
            </div>

            <section className="relative w-full max-w-105 rounded-2xl border border-white/10 bg-[#f5f7fa] p-8 shadow-2xl shadow-black/30 sm:p-10">
                <div className="mb-9">
                    <h1 className="text-2xl font-semibold tracking-tight text-text">Welcome</h1>
                    <p className="mt-2 text-sm text-text-muted">Sign in to continue.</p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="identifier"
                            className="mb-2 block text-sm font-medium text-text"
                        >
                            Username or email
                        </label>

                        <input
                            id="identifier"
                            type="text"
                            autoComplete="username"
                            placeholder="Enter your username or email"
                            value={identifier}
                            onChange={(event) => setIdentifier(event.target.value)}
                            required
                            className="h-12 w-full rounded-lg border border-border bg-surface px-4 text-sm text-text outline-none transition placeholder:text-text-subtle hover:border-border-strong focus:border-accent focus:shadow-(--ui-focus-ring)"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium text-text"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                            className="h-12 w-full rounded-lg border border-border bg-surface px-4 text-sm text-text outline-none transition placeholder:text-text-subtle hover:border-border-strong focus:border-accent focus:shadow-(--ui-focus-ring)"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-3 h-12 w-full rounded-lg bg-accent text-sm font-semibold text-white shadow-sm transition hover:bg-accent-hover focus:outline-none focus:shadow-(--ui-focus-ring) active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {isSubmitting ? "Signing in..." : "Sign in"}
                    </button>
                    {error && (
                        <p role="alert" className="text-sm text-danger">
                            {error}
                        </p>
                    )}
                </form>
            </section>
        </main>
    );
}
