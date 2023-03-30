var _a, _b;
import { jsx as _jsx } from "react/jsx-runtime";
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
var RoutePaths = (_a = {},
    _a["main" /* appRoutes.MAIN */] = '/',
    _a["about" /* appRoutes.ABOUT */] = '/about',
    _a["not_found" /* appRoutes.NOT_FOUND */] = '*',
    _a);
export var RouteConfig = (_b = {},
    _b["main" /* appRoutes.MAIN */] = {
        path: RoutePaths.main,
        element: _jsx(MainPage, {})
    },
    _b["about" /* appRoutes.ABOUT */] = {
        path: RoutePaths.about,
        element: _jsx(AboutPage, {})
    },
    _b["not_found" /* appRoutes.NOT_FOUND */] = {
        path: RoutePaths.not_found,
        element: _jsx(NotFoundPage, {})
    },
    _b);
