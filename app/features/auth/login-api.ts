import { apiBaseUrl } from "../../config";

type LoginCredentials = {
    identifier: string;
    password: string;
};

export async function login(credentials: LoginCredentials): Promise<void> {
    if (!apiBaseUrl) {
        throw new Error("Login is not configured. Set VITE_API_BASE_URL in your .env file.");
    }

    const response = await fetch(`${apiBaseUrl}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        throw new Error(
            `Login failed: ${response.status}${response.statusText ? ` ${response.statusText}` : ""}`,
        );
    }
}
