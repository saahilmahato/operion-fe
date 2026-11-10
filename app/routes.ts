import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    route(".well-known/appspecific/com.chrome.devtools.json", "routes/chrome-devtools.ts"),
    index("routes/home.tsx"),
    route("dashboard", "routes/dashboard.tsx"),
] satisfies RouteConfig;
