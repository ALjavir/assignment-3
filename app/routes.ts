import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
} from "@react-router/dev/routes";

export default [


    layout("./routes/layout/layout.tsx", [
        index("./routes/home/home.tsx"),
        // route("register", "./auth/register.tsx"),
    ]),

    // ...prefix("concerts", [
    //     index("./concerts/home.tsx"),
    //     route(":city", "./concerts/city.tsx"),
    //     route("trending", "./concerts/trending.tsx"),
    // ]),
] satisfies RouteConfig;
