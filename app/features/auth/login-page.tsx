import { useState } from "react";

function BrandMark() {
    return (
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-lg font-bold text-white shadow-sm">
            O
        </div>
    );
}

function ArrowIcon() {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            height="16"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="16"
        >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            height="15"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="15"
        >
            <path d="m5 12 4 4L19 6" />
        </svg>
    );
}

export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        setSubmitted(true);
    }

    return (
        <main className="grid min-h-screen min-w-5xl grid-cols-[1.1fr_0.9fr] bg-canvas">
            <section className="relative flex flex-col justify-between overflow-hidden bg-[#18334a] px-16 py-12 text-white">
                <div className="absolute -right-36 -top-40 h-130 w-130 rounded-full border border-white/10" />
                <div className="absolute -bottom-56 -left-24 h-130 w-130 rounded-full border border-white/10" />
                <div className="relative z-10 flex items-center gap-3">
                    <BrandMark />
                    <div>
                        <p className="text-base font-bold tracking-tight">operion</p>
                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
                            Operations platform
                        </p>
                    </div>
                </div>

                <div className="relative z-10 max-w-xl pb-10">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#84b8e8]">
                        Operations, in focus
                    </p>
                    <h1 className="mt-5 max-w-lg text-5xl font-bold leading-[1.08] tracking-[-0.04em]">
                        Make every moving part feel manageable.
                    </h1>
                    <p className="mt-6 max-w-md text-base leading-7 text-white/65">
                        Operion gives teams one clear place to coordinate work, spot risk early, and
                        keep momentum visible.
                    </p>
                    <div className="mt-10 flex items-center gap-8 border-t border-white/15 pt-6 text-xs text-white/65">
                        <span className="flex items-center gap-2">
                            <CheckIcon /> Trusted by operations teams
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckIcon /> Secure by design
                        </span>
                    </div>
                </div>

                <p className="relative z-10 text-xs text-white/40">
                    © 2024 Operion, Inc. All rights reserved.
                </p>
            </section>

            <section className="flex items-center justify-center bg-surface px-16 py-12">
                <div className="w-full max-w-100">
                    <div className="mb-10 lg:hidden">
                        <BrandMark />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                        Welcome back
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-text">
                        Sign in to Operion
                    </h2>
                    <p className="mt-2 text-sm text-text-muted">
                        Enter your details to access your workspace.
                    </p>

                    <form className="mt-9 space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label
                                className="mb-2 block text-xs font-bold text-text"
                                htmlFor="email"
                            >
                                Work email
                            </label>
                            <input
                                autoComplete="email"
                                className="h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-text outline-none transition placeholder:text-text-subtle focus:border-accent focus:ring-4 focus:ring-accent/10"
                                id="email"
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="you@company.com"
                                required
                                type="email"
                                value={email}
                            />
                        </div>
                        <div>
                            <div className="mb-2 flex items-center justify-between">
                                <label className="text-xs font-bold text-text" htmlFor="password">
                                    Password
                                </label>
                                <button
                                    className="text-xs font-semibold text-accent hover:text-accent-hover"
                                    type="button"
                                >
                                    Forgot password?
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    autoComplete="current-password"
                                    className="h-11 w-full rounded-md border border-border bg-surface px-3 pr-20 text-sm text-text outline-none transition placeholder:text-text-subtle focus:border-accent focus:ring-4 focus:ring-accent/10"
                                    id="password"
                                    onChange={(event) => setPassword(event.target.value)}
                                    placeholder="Enter your password"
                                    required
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                />
                                <button
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-text-muted hover:text-text"
                                    onClick={() => setShowPassword((visible) => !visible)}
                                    type="button"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>
                        <label className="flex items-center gap-2.5 text-xs font-medium text-text-muted">
                            <input
                                checked={rememberMe}
                                className="h-4 w-4 rounded border-border accent-accent"
                                onChange={(event) => setRememberMe(event.target.checked)}
                                type="checkbox"
                            />
                            Keep me signed in
                        </label>
                        <button
                            className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-accent text-sm font-bold text-white shadow-sm transition hover:bg-accent-hover focus:outline-none focus:ring-4 focus:ring-accent/15"
                            type="submit"
                        >
                            Sign in <ArrowIcon />
                        </button>
                        {submitted && (
                            <p
                                className="rounded-md bg-accent-soft px-3 py-2 text-xs font-medium text-accent"
                                role="status"
                            >
                                Sign-in is ready to connect to your authentication service.
                            </p>
                        )}
                    </form>

                    <p className="mt-9 text-center text-xs text-text-muted">
                        Need access?{" "}
                        <button
                            className="font-bold text-accent hover:text-accent-hover"
                            type="button"
                        >
                            Contact your administrator
                        </button>
                    </p>
                    <p className="mt-12 text-center text-[11px] text-text-subtle">
                        Protected workspace · Privacy · Terms
                    </p>
                </div>
            </section>
        </main>
    );
}
