import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

const enum appRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

const RoutePaths: Record<appRoutes, string> = {
    [appRoutes.MAIN] : '/',
    [appRoutes.ABOUT] : '/about',
}
export const RouteConfig:Record<appRoutes, RouteProps> = {
    [appRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage/>
    },
    [appRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: <AboutPage/>
    }
}